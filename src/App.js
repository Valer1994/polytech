import React from 'react';
import Login from '../src/containers/Login';
import { Video } from '../src/components';
import Students from '../src/containers/Students_page';

import { Route } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div className="App">
        <Route exact path='/'/>
        <Route exact path='/'/>
        <Route path='/video' component={Video} />
        <Students />
    </div>
  );
}

export default App;
