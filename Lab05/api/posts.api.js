//importing the uuid library
const uuid = require('uuid');
const { post } = require('../routes/home.routes');

//Creating a global post variable
let map = new Map();

//Method to accept name and description
let createPost = (obj) => {
    let post = {
        name:obj.name,
        description:obj.description,
        ID:uuid.v4(),
        date:new Date()

    };

    map.set(post.ID,post);  
    return post; 
}

let getPosts = () => {
    return [...map.values()];
}

let getPost = (id) => {
    return map.get(id);
}

//Exporting as JSON object
module.exports ={
    createPost,
    getPosts,
    getPost
};


