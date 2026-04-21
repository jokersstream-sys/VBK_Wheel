const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory (index.html lives here)
app.use(express.static(__dirname));

// Fallback — always serve index.html from root
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Joker's Giveaway Wheel running on port ${PORT}`);
});

