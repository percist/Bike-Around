const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('firstName')
      .exists({ checkFalsy: true })
      .isLength({ min: 1 })
      .withMessage('Please provide a valid first name.'),
    check('lastName')
      .exists({ checkFalsy: true })
      .isLength({ min: 1 })
      .withMessage('Please provide a valid last name.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

  // create a new user
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { 
        firstName, 
        lastName, 
        email, 
        password, 
        username 
      } = req.body;
      const user = await User.signup({ 
        firstName, 
        lastName, 
        email, 
        username, 
        password 
      });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );

  // update a user profile
  router.put(
    '/',
    asyncHandler(async (req, res) => {
      const { 
        firstName, 
        lastName, 
        address1, 
        address2, 
        city, 
        state, 
        zip, 
        phoneNumber, 
        email, 
        password 
      } = req.body;
      const updatedUser = {
        firstName, 
        lastName, 
        address1, 
        address2, 
        city, 
        state, 
        zip, 
        phoneNumber, 
        email, 
        password 
      }
      const user = await User.editProfile(updatedUser)
      return res.json({user})
    })
  )

module.exports = router;