const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const bookingsRouter = require('./bookings.js');

const reviewsRouter = require('./reviews.js');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/listings', listingsRouter);

router.use('/bookings', bookingsRouter);



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