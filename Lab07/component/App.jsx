//import React from 'react';
import Posts from '../component/Posts'; 

import React from 'react'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import PostsHolder from '../component/PostsHolder';

export default class App extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    render() { 
        return (<div> 
            <Posts posts={posts}/>  
        </div>);
        
        (<Router> 
            <Switch> 
                <Route exact path="/"> 
                    <PostsHolder/> 
                </Route> 
            </Switch> 
        </Router>);
    };
}

const posts = [ 
    { 
    id: 1, 
    name: 'React', 
    description: 'Best UI library' 
    }, 
    {
     id: 2, 
     name: 'Node',
     description: 'Server side JS' 
    } 
];