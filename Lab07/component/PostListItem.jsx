import React from 'react'; 
export default function PostListItem(props) { 
    const {post} = props; 
    return <tr> 
        <td>{post.id}</td> 
        <td>{post.name}</td> 
        <td>{post.description}</td> 
    </tr> 
}