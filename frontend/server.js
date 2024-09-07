const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app's build directory
app.use('/genie', express.static(path.join(__dirname, 'build')));

// Send index.html for any request that doesn't match static files
app.get('/genie/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Define the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
