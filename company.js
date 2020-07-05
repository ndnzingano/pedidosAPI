const { ObjectID } = require('mongodb');
const Pedido = require('./Pedido');
let companies = [];
const authentication = require('./middleware');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

module.exports = function (app) {
  const getOrderOfCompany = async function (req, res) {
    let { id } = req.params;
    const db = await MongoClient.connect(url);
    const company = await db
      .db('app')
      .collection('companies')
      .findOne({_id: new ObjectID(req.params.id)});

    const pedido = new Pedido(company.name, Number(company.quantity));
    res.send(pedido);
  };

  app.get('/companies', async function (req, res) {
    try{
      const db = await MongoClient.connect(url);
      const company = await db
          .db('app')
          .collection('companies')
          .find().toArray();
      res.json({company});
    }
    catch (error) {
      console.log(error);
    }
  });

  app.post('/company', async function (req, res) {
    const db = await MongoClient.connect(url);
    await db.db('app').collection('companies').insertOne(req.body);
    res.end();
  });

  app.get('/companies/id/:id/order', authentication,  getOrderOfCompany);


  app.get('/company/:id', async function (req, res) {
    const db = await MongoClient.connect(url);
    const company = await db
      .db('app')
      .collection('companies')
      .findOne({_id: new ObjectID(req.params.id)});
    res.json(company);
  });

  app.delete('/company/:id', async function (req, res) {
    const db = await MongoClient.connect(url);
    const company = await db
      .db('app')
      .collection('companies')
      .deleteOne({_id: new ObjectID(req.params.id)});
    res.json(company);
  });


 };
