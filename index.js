const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler for GET request
app.get('/', (req, res) => {
  res.send('GET request received');
});

// Route handler for POST request
app.post('/', (req, res) => {
  res.send('POST request received');
});

// Route handler for PUT request
app.put('/', (req, res) => {
  res.send('PUT request received');
});

// Route handler for DELETE request
app.delete('/', (req, res) => {
  res.send('DELETE request received');
});

// Route handler for PATCH request
app.patch('/', (req, res) => {
  res.send('PATCH request received');
});

// Route handler for OPTIONS request
app.options('/', (req, res) => {
  res.send('OPTIONS request received');
});

// Route handler for HEAD request
app.head('/', (req, res) => {
  res.send('HEAD request received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
