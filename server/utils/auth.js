const jwt = require('jsonwebtoken');
const JWT_SECRET = 'super_secret_key'; // @TODO: Good job changing this from the default. Next level up will be to pull this from process.ENV.JWT_SECRET environment variable using .env file

// Function to sign the token
const signToken = ({ email, _id }) => jwt.sign({ email, _id }, JWT_SECRET, { expiresIn: '1d' });

// Middleware to verify token and attach user to the context
const authMiddleware = (req) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    token = token.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { user: { _id: decoded._id } };
    } catch (e) {
      console.error('Invalid JWT token');
    }
  }

  return { user: null };
};

module.exports = {
  signToken,
  authMiddleware,
};