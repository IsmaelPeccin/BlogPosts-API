const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });
    console.log(token, process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.tokenData = decoded.data.findUser;

    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next(error);
  }
};
