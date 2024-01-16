// Create web server
// Import the express library
const express = require('express');

// Create an instance of express
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

// Define a route for the root of the website
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});