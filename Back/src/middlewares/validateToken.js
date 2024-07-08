import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  console.log(req.cookies)

  if (!token) {
    return res.status(401).json({ message: 'No token' });
  }

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    console.log(token)
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};