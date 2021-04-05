//importing the uuid library
const uuid = require('uuid');
//const { post } = require('../routes/post.routes');

//Creating a global post variable
//let map = new Map();

//Method to accept name and description
/*
let createPost = (obj) => {
    let post = {
        name:obj.name,
        description:obj.description,
        ID:uuid.v4(),
        date:new Date()

    };

    map.set(post.ID,post);  
    return post; 
}*/


/*Getting the DB Operations from the dbOperation.js***/
const {getall, getbyid, removeById, save, update} = require('../dal/dbOperation.js');

/*Inserting the posts through the mongoDB***/
const createPost = async ({name, description}) => {
    const post = {
        id: uuid.v4(),
        name,
        description,
        postedDate: new Date()
    }
    return await save(post);
}

/*Deleting the post from the passed ID, from the mongoDB***/
const deletePost = async ({id}) => {
    return await removeById(id);
}

/*Updating the post from the passed ID, in the mongoDB***/
const updatePost = async ({id},{name,description}) => {
    const updatedpost = {
        id: UUID.v4(),
        name,
        description,
        postedDate: new Date()
    }
    return await update(id,updatedpost);
}


/*Getting all the posts from the mongoDB***/
let getPosts = async () => {
    return await getall();
}
   

let getPostById = async (id) => {
    return await getbyid(id);
}


//Exporting as JSON object
module.exports ={
    createPost,
    getPosts,
    getPostById,
    deletePost,
    updatePost
};


