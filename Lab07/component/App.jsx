import React from 'react';
import post from './Posts'; 
export default class App extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    
    render() { 
        return <div> 
            <Posts posts={posts}/> 
        </div>
    }
}

const posts = [ { 
    id: 1, 
    name: 'React', 
    description: 'Best UI library' 
}, {
     id: 2, 
     name: 'Node',
     description: 'Server side JS' } 
];