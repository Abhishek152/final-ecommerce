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
  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjVmYTQ0NjUxMzNkYTk1OGQxZWUxZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNzk2Njg5Nn0.-DDsNNxQXzHe9uiQbnauczQqisivEC61NNooh6ynIeA";
  return token;
};
