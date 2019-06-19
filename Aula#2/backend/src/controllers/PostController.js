const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async  index(req, res){
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },

    async store(req, res){
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const today = new Date();  
        
        console.log(today.getTime());


        const name2 = today.getTime();
        console.log(name2);
        const [name] = image.split('.');
        const fileName = `${name2}.jpg`;

        await sharp(req.file.path)
        .resize(500)
        .jpeg({ quality: 70 })
        .toFile(
            path.resolve(req.file.destination, 'resized', fileName)
        )

        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        req.io.emit('post', post);

        return res.json(post);
    },

    async get(req, res){

        const post = await Post.findById(req.params.id);
        return res.json(post);
    }
};