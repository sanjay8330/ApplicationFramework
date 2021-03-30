const uuid = require('uuid');

let map = new Map();

let createPost =  (obj) => {
    let post = {
        name:obj.name,
        description:obj.description,
        id:uuid.v4(),
        date:new Date()
    };

    map.set(post.id,post);
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