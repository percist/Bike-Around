const router = require('express').Router();
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
// const { User } = require('../../db/models');
// const { requireAuth } = require('../../utils/auth.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;