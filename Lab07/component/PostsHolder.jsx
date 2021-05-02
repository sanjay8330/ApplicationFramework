import React from 'react'; 
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Posts from './Posts'; 
import PostsFunctional from './PostsFunctional';
import AddPost from './AddPost'; 

const posts = [ 
    { 
        id: 1, name: 'React', 
        description: 'Best UI library' 
    }, 
    { 
        id: 2, name: 'Node', 
        description: 'Server side JS' 
    } 
];

export default class PostsHolder extends React.Component {
    constructor(props) { 
        super(props); 
    }

    addNewPost({name, description}) { 
        posts.push({id: posts.length + 1, name, description}); 
    }
    
    render() { 
        return (<div>
            <Router>
                <Link to="/posts/add">Add</Link>
                <Switch>
                    <Route exact path="/posts">
                        <PostsFunctional posts={posts}/>
                    </Route>
                    <Route  path='/posts/add'>
                        <AddPost save={this.addNewPost}/>
                    </Route>
                </Switch>
            </Router>
            </div>); 
    }
}