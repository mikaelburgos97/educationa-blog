const express = require('express');
const cors = require('cors'); // Add this line
// const app = express();
// const port = 3000;
const mongoose = require('mongoose');


// // app.use(cors()); // Add this line to enable CORS

// app.use(cors({
//   origin: 'http://127.0.0.1:5500'  
// }));

// app.get('/posts', (req, res) => {
//   // Your existing code for fetching posts
//   Post.find()
//     .then(posts => res.json(posts))
//     .catch(err => res.json(err)); 
// });

// app.post('/posts', (req, res) => {
//   // Your existing code for creating a new post
//   const post = new Post(req.body);

//   post.save()
//     .then(savedPost => res.json(savedPost))
//     .catch(err => res.json(err));
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
