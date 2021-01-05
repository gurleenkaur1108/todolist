import React, { Component } from 'react';

import classes from './App.css';
import Topics from '../components/Topics/Topics';
import axios from '../axios';
import NewTopic from'../components/Topics/NewTopic/NewTopic' ;

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    topics: [
      { id: 'asfa1', topicEntry: 'clean garden' },
      { id: 'vasdf1', topicEntry: 'do homework'},
      { id: 'asdf11', topicEntry: 'take dog out' }
    ]
   
  };


  topicEntryChangedHandler = (event, id) => {
    const topicIndex = this.state.topics.findIndex(p => {
      return p.id === id;
    });

    const topicName = {
      ...this.state.topics[topicIndex]
    }; //topicName has the copy of the topic we changed



    topicName.topicEntry = event.target.value;

    const topics = [...this.state.topics];
    topics[topicIndex] = topicName;

    this.setState( {topics: topics});
   
  };

  deleteTopicHandler = topicIndex => {
    
    const topics = [...this.state.topics];
    topics.splice(topicIndex, 1);
    this.setState({ topics: topics });
  };


  render() {
    console.log('[App.js] render');
       let topics=null;
      {
        topics = (
        <Topics 
        
          topics={this.state.topics}
          clicked={this.deleteTopicHandler}
          changed={this.topicEntryChangedHandler}
           />
      );
     }

    return (
    <div className={classes.App}>
              
         <h1>{this.props.appTitle}</h1>
            <NewTopic/>
         
             {topics}
         
         
    </div>
           );
       
    }

  } 

export default App;
