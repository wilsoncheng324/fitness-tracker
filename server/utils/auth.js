const jwt = require('jsonwebtoken');
const JWT_SECRET = 'super_secret_key';

// Function to sign the token
const signToken = ({ _id }) => jwt.sign({ _id }, JWT_SECRET, { expiresIn: '1d' });

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