const express = require('express');
//require with authController
const authController = require('../controllers/authController');
const viewController = require('./../controllers/viewController');
const router = express.Router();

router.get('/', viewController.getOverview);
router.get('/tour/:slug',authController.protect , viewController.getTour);
router.get('/login', viewController.getLoginForm);
module.exports = router;
