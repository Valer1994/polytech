import React from 'react';
import Login from '../src/containers/Login';

import { Route } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div className="App">
        <Route exact path='/'/>
        <Route exact path='/'/>
        <Login />
    </div>
  );
}

export default App;
