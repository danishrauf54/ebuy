const express = require('express');
const router = express.Router();
const { 
  newOrder, 
  getSingleOrder, 
  myOrders 
} = require('../controllers/orderController');
const { isAuthenticatedUser } = require('../middleware/auth');

// Create new order
router.post('/new', isAuthenticatedUser, newOrder);

// Get single order
router.get('/:id', isAuthenticatedUser, getSingleOrder);

// Get logged in user orders
router.get('/me', isAuthenticatedUser, myOrders);

module.exports = router;
