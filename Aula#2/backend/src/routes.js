const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    return res.send (`Hello ${req.query.name}`);
});

//Post
routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.get)
routes.post('/posts', upload.single('image'), PostController.store);
 
//Like
routes.post('/posts/:id/like', LikeController.store)
 
module.exports = routes;


