const SECRET = 'adhajwdhjahd08218101909019';
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const jwt_hash = req.headers.authorization;
  jwt.verify(jwt_hash, SECRET, (error) => {
    if (error) res.status(403);
    next();
  });
};
