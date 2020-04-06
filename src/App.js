import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.compnent';

const Hats = () => (

  <div>
    <h1>Hats</h1>
  </div>
)

const Mens = () =>(

  <div>
    <h1>Mens</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={Hats} />
        <Route exact path='/mens' component={Mens} />
      </Switch>
    </div>
  );
}

export default App;
