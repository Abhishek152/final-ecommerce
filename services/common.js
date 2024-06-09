const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjVmYTQ0NjUxMzNkYTk1OGQxZWUxZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3OTYxNzM2fQ.CqOMbu1hoAMKwvwR232qUycfAT4VRaCHpU1hgHXsXck";
  return token;
};
