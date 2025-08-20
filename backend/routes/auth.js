const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  logout, 
  getUserProfile, 
  updateProfile 
} = require('../controllers/authController');
const { isAuthenticatedUser } = require('../middleware/auth');

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Logout user
router.get('/logout', logout);

// Get user profile
router.get('/me', isAuthenticatedUser, getUserProfile);

// Update user profile
router.put('/me/update', isAuthenticatedUser, updateProfile);

module.exports = router;
