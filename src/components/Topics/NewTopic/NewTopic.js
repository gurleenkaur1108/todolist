import React, { Component } from 'react';
import axios from 'axios';

import classes from './NewTopic.css';

class NewTopic extends Component {
    state = {
        topicEntrynp: ''
    }

    postDataHandler = () => {
        const data = {
            topicEntrynp:this.state.topicEntrynp
            
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log(response);
                alert("task successfully added, view in console")
            });
    }

    render () {
        return (
            <div className={classes.NewTopic}>
                 
            <h4>Add a Task</h4>
                
                <input type="text" value={this.state.topicEntrynp} onChange={(event) => this.setState({topicEntrynp: event.target.value})} />
                
                <button onClick={this.postDataHandler}>Add to list</button>
            </div>
        );
    }
}

export default NewTopic;