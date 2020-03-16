import React from 'react';
import { Route } from 'react-router-dom';

import {
  Main,
  Page,
} from 'components';

import 'sass/animate.scss';
import 'sass/main.scss';
import 'sass/media.scss';
import 'sass/feather-icon.scss';

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Main}/>
        <Route path='/page' component={Page}/>
    </div>
  );
}

export default App;
