const dotenv = require('dotenv');

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

module.exports = {
  app: {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || 'development'
  },
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/url-shortener'
  }
};
