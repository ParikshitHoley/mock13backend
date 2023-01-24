const jwt = require("jsonwebtoken")


exports.isAuthenticatedUser = async (req, res, next) => {

    try {
        let token = req.header("Authorization")
        if (!token) {
            return res.status(403).send("Accss Denied")
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft()
        }

        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verifiedToken
        next()

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};