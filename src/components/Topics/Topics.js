import React, { Component } from 'react';

import Topic from './Topic/Topic';

class Topics extends Component {
  
  render() {
    console.log('[Topics.js] rendering...');
    return this.props.topics.map((topic, index) => {
      return (
        <Topic
          click={() => this.props.clicked(index)}
          topicEntry={topic.topicEntry}
          
          key={topic.id}
          changed={event => this.props.changed(event, topic.id)}
        />
      );
    });
  }
}

export default Topics;