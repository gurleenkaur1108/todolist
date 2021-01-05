import React, { Component } from 'react';

import classes from './Topic.css';


class Topic extends Component {
  

  
  render() {
    console.log('[Topic.js] rendering...');
    return (
     <div className={classes.Topic}>
         <p >
           TASK:{this.props.topicEntry}
        </p>
        <button className={classes.Red} onClick={this.props.click}>
          DELETE
        </button>
        
        <button className={classes.Yellow} key="i4">EDIT(below)</button> 
        <input 
          key="i3"
          
          type="text"
          onChange={this.props.changed}
          value={this.props.topicEntry} />
       
      </div>
    );
  }
}



export default Topic;