const express = require('express');
const app = express();
const PORT = 3000;

// Import router
const postRouter = require('./routes/posts.routes');

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Mount router
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
