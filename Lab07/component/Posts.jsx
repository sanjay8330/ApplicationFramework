import React from 'react';
import PostListItem from './PostListItem';

export default class Posts extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
             post: null 
        };
    }

    //New Method to set the aded post to the Posts component
    selectPost(post) { 
        this.setState({post: post}) 
    }

    render() { 
        const {posts} = this.props; 
        return <div> 
            <table> 
                <thead> 
                    <tr> 
                        <th>ID</th>
                        <th>Name</th> 
                        <th>Description</th> 
                        <th>Select Post</th>
                    </tr> 
                </thead> 
                <tbody> {posts.map(post => { 
                    return <PostListItem key={post.id.toString()} post={post}/>
                    })} 
                </tbody> 
            </table> 
            <div> {this.state.post ? <Post post={this.state.post} editable={false}/> : ''} </div>
        </div> 
    };
}