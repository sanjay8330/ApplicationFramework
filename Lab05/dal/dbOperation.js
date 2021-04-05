const posts = require('./').db('posts').collection('posts');

/***Insert Post - INSERT OPERATION */
const save = async ({id, name, description, postedDate}) => {
    const result = await posts.insertOne({id, name, description,
        postedDate});
    return result.ops[0];
};

/***Delete Post by ID - DELETE OPERATION */
const removeById = async id => {
    await posts.deleteOne({id});
};

/***Update Post - UPDATE OPERATION */
const update = async (id, {name, description, postedDate}) => {
    const result = await posts.replaceOne({id}, {id, name,description, postedDate});
    return result.ops[0];
};

/***Get Post - RETRIEVE OPERATION */
const getall = async () => {
    const cursor = await posts.find();
    return cursor.toArray();
};

/*Getting the posts for an id passed, from the mongoDB***/
const getbyid = async id => {
    return await posts.findOne({id});
};

/***Export the new db operation codes to be used in the server.js */
module.exports = {save,removeById,update,getall,getbyid};