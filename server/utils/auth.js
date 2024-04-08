const { GraphQLError } = require('graphql');

const jwt = require('jsonwebtoken');
const secret = 'super_secret_key';
function signToken({ email, _id }) {
  const payload = { email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: "1d" });
};
// Middleware to verify token and attach user to the context
const authMiddleware = ({ req }) => {

  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    console.log(token)
    token = token.split(' ').pop().trim();
    console.log(token)
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch (err) {
    console.log('Invalid token');
  }

  return req;
};

module.exports = {
  signToken,
  authMiddleware,
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
};