import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import projectsContainer from './components/projects/projectsContainer';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div id="overall">
      <Navbar />
      <Router>
        <Switch>          
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={projectsContainer} />
        </Switch>
      </Router>
      </div>
    );
  };
};
export default App;
