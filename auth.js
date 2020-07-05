const SECRET = 'adhajwdhjahd08218101909019';
const jwt = require('jsonwebtoken');

module.exports = function (app) {
  app.post('/auth', (req, res) => {
    const { login, password } = req.body;
    if (login === 'nadine' && password === 'cats') {
      res.json({
        token: jwt.sign({
          user: 'nadine',
        }, SECRET)
      });
    }
    res.status(405);
  });
};
