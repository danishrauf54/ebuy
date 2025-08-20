# E-commerce Project with Complete Authentication & Shopping Cart System

This project includes a full-stack e-commerce application with complete user authentication functionality, shopping cart management, and checkout process including login, signup, user profiles, secure routes, and full shopping experience.

## Features

- **User Authentication**
  - User registration with email and password
  - User login with JWT tokens
  - Secure password hashing with bcrypt
  - JWT-based session management
  - User profile management
  - Protected routes

- **Shopping Cart System**
  - Add/remove products from cart
  - Update product quantities
  - Apply coupon codes with discounts
  - Real-time cart total calculations
  - Persistent cart storage
  - Cart icon with item count in header

- **Checkout Process**
  - Complete billing information collection
  - Order summary with item details
  - Payment method selection (Bank/Cash on Delivery)
  - Coupon application during checkout
  - Order confirmation and success page

- **Frontend**
  - React.js with modern UI components
  - Responsive design with Tailwind CSS
  - Context-based state management for auth and cart
  - Form validation and error handling
  - Loading states and user feedback
  - Dynamic navigation based on user status

- **Backend**
  - Node.js with Express.js
  - MongoDB database with Mongoose ODM
  - RESTful API endpoints for auth, orders, and cart
  - Middleware for authentication and route protection
  - Secure cookie handling
  - Order management system

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd ecomm_project2
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create environment configuration
# Copy config.env.example to config.env and update values
cp config.env.example config.env

# Update config.env with your values:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce_db
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_secure
JWT_EXPIRE=7d
NODE_ENV=development

# Start MongoDB (if running locally)
# Make sure MongoDB is running on your system

# Start the backend server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Database Setup

### MongoDB Local Installation
1. Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Create database: `ecommerce_db`

### MongoDB Atlas (Cloud)
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create new cluster
3. Get connection string and update `MONGODB_URI` in config.env

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout
- `GET /api/auth/me` - Get user profile (protected)
- `PUT /api/auth/me/update` - Update user profile (protected)

### Order Routes
- `POST /api/orders/new` - Create new order (protected)
- `GET /api/orders/:id` - Get single order (protected)
- `GET /api/orders/me` - Get user orders (protected)

### Request/Response Examples

#### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Create Order
```bash
POST /api/orders/new
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderItems": [
    {
      "name": "LCD Monitor",
      "quantity": 1,
      "price": 650.00,
      "productId": "1"
    }
  ],
  "billingDetails": {
    "firstName": "John",
    "lastName": "Doe",
    "streetAddress": "123 Main St",
    "townCity": "New York",
    "phoneNumber": "+1234567890",
    "email": "john@example.com"
  },
  "paymentMethod": "bank",
  "subtotal": 650.00,
  "shipping": 0,
  "discount": 0,
  "total": 650.00
}
```

## Project Structure

```
ecomm_project2/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── orderController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── order.js
│   ├── config.env
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   └── CheckoutPage.jsx
│   │   ├── data/
│   │   │   └── sampleProducts.js
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Usage

### 1. Start the application
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 2. Access the application
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

### 3. Test the complete flow
1. **Browse Products**: Navigate to the homepage to see available products
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click the cart icon in the header to see cart contents
4. **Apply Coupons**: Use coupon codes like "SUMMER20", "WELCOME10"
5. **Checkout**: Click "Process to checkout" to complete your order
6. **Authentication**: Sign up/login to access user features
7. **Profile**: View and edit your user profile

## Shopping Cart Features

- **Product Management**: Add, remove, and update quantities
- **Coupon System**: Apply discount codes for savings
- **Real-time Updates**: Cart totals update automatically
- **Persistent Storage**: Cart items saved in localStorage
- **Visual Feedback**: Cart icon shows item count
- **Responsive Design**: Works on all device sizes

## Checkout Features

- **Billing Information**: Complete address and contact details
- **Order Summary**: Review items, quantities, and totals
- **Payment Options**: Bank transfer or cash on delivery
- **Coupon Application**: Apply discounts during checkout
- **Order Confirmation**: Success page with order details
- **Form Validation**: Required field validation and error handling

## Security Features

- **Password Security**: Passwords are hashed using bcrypt with salt rounds
- **JWT Tokens**: Secure JSON Web Tokens for session management
- **Protected Routes**: Middleware to guard sensitive endpoints
- **Input Validation**: Server-side validation for all user inputs
- **CORS Configuration**: Proper CORS setup for security
- **Cookie Security**: HttpOnly cookies with secure options

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/ecommerce_db |
| `JWT_SECRET` | Secret key for JWT signing | (required) |
| `JWT_EXPIRE` | JWT token expiration time | 7d |
| `NODE_ENV` | Environment mode | development |

## Testing the System

### Sample Coupon Codes
- `SUMMER20` - 20% discount
- `WELCOME10` - 10% discount  
- `FREESHIP` - Free shipping

### Sample Products
The system includes sample products like:
- LCD Monitor ($650)
- H1 Gamepad ($550)
- Wireless Headphones ($299.99)
- Smartphone ($899.99)
- Laptop ($1299.99)
- Smart Watch ($399.99)

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in config.env
   - Verify network access for Atlas

2. **JWT Token Issues**
   - Check JWT_SECRET in config.env
   - Ensure token expiration is valid
   - Verify token format in Authorization header

3. **CORS Errors**
   - Check CORS configuration in backend
   - Verify frontend URL in CORS settings
   - Ensure credentials are included in requests

4. **Cart Not Persisting**
   - Check localStorage in browser dev tools
   - Verify CartContext is properly wrapped
   - Check for JavaScript errors in console

### Development Tips

- Use `npm run dev` for development with auto-reload
- Check browser console and server logs for errors
- Use Postman or similar tool to test API endpoints
- Monitor MongoDB connections and queries
- Test authentication flow end-to-end
- Test cart functionality with multiple products
- Verify checkout process completes successfully

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (auth, cart, checkout)
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support and questions, please open an issue in the repository.
