const express = require('express');
const path = require('path');
const app = express();

// Get port from environment variable or use 3000 as default
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Giveaway Wheel is running!' });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎡 Giveaway Wheel server is running on port ${PORT}`);
  console.log(`🌐 Access it at: http://localhost:${PORT}`);
});
