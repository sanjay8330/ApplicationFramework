//import React from 'react';
import Posts from '../component/Posts'; 

import React from 'react'; 
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'; 
import PostsHolder from '../component/PostsHolder';
import UserContext from './UserContext';

export default class App extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            user: null
        };
    } 

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                user: {
                    name: 'admin'
                }
            });
        }, 5000);
    }
    render() { 
        return (<Router> 
            <Switch> 
                <Route exact path="/posts"> 
                    <UserContext.Provider value={this.state.user}>
                        <PostsHolder /> 
                    </UserContext.Provider>
                </Route> 
            </Switch> 
            <Redirect to='/posts'/>
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