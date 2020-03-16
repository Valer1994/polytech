import React from 'react';
import { Route } from 'react-router-dom';

import { Video } from 'components';

import Students from 'containers/Students_page';

import {
  Main,
  Page,
  Paper,
  Header,
} from 'components';

import 'sass/animate.scss';
import 'sass/main.scss';
import 'sass/media.scss';
import 'sass/feather-icon.scss';

const App = () => (
  <Paper className="App">
    <Header withLogOut/>
    <Route exact path='/' component={Main}/>
    <Route path='/students' component={Students}/>
    <Route path='/video' component={Video} />
  </Paper>
);

export default App;
