import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import projectsContainer from './components/projects/projectsContainer';
import thankYou from './components/thankYou';

class App extends React.Component {
  render() {
    return (
      <div id="overall">
      <Router>
        <Switch>          
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={projectsContainer} />
          <Route path='/thankyou' component={thankYou} />
        </Switch>
      </Router>
      </div>
    );
  };
};
export default App;
