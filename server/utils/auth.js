const jwt = require('jsonwebtoken');
const secret = 'super_secret_key'; 
function signToken({ email, _id }) {
  const payload = { email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: "1d" });
};
// Middleware to verify token and attach user to the context
const authMiddleware = (req) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    token = token.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token, secret);
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