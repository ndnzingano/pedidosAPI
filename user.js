const express = require('express');
const app = express();
const configs = require('./configs');
const companyRoutes = require('./company');
const authRoutes = require('./auth');

function main() {
  configs(app);
  authRoutes(app);
  companyRoutes(app);
  app.listen(5000);
}

main();
