import React from 'react';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
