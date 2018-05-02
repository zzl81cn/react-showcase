import React, {Componet} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

export default class Topics extends Componet {
  constructor(props) {
    super(props);
    // console.log(props.params);
  }
  
  /* const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  ); */
  render() {
    const {match} = this.props;
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
          <li><Link to={`${match.url}/components`}>Components</Link></li>
          <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
        </ul>
    
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}
        />
      </div>
      
    )
  }  
}