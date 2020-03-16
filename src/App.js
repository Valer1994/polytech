import React from 'react';
import { Route } from 'react-router-dom';

import { 
  Main,
  Page,
} from '../src/components';

import './App.css';
function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Main}/>
        <Route path='/page' component={Page}/>
    </div>
  );
}

export default App;
