import React from 'react';
import Login from '../src/containers/Login';
import { Video } from '../src/components';
import Students from '../src/containers/Students_page';

import { Route } from 'react-router-dom';

import { 
  Main,
  Page,
  Header,
} from '../src/components';

import './App.css';
function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path='/' component={Main}/>
        <Route path='/students' component={Students}/>
        <Route path='/video' component={Video} />
    </div>
  );
}

export default App;
