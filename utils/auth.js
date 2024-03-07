const withAuth = (req, res, next) =>  {
//   console.log(req);
    if (!req.session.user_id) {
      // If the user is not logged in, redirect them to the login page
      return res.redirect('/login');
    } else {
      // Otherwise, continue on to the restricted route 
      next();
    }
};
module.exports = withAuth;