import React from 'react';
import { Route } from 'react-router-dom';

import Students from 'containers/Students_page';
import Details from 'containers/Details';

import {
  Paper,
  Header,
  Footer,
} from 'components';

import 'sass/animate.scss';
import 'sass/main.scss';
import 'sass/media.scss';
import 'sass/feather-icon.scss';

const App = () => (
  <Paper className="App">
    <Header withLogOut/>
    <Route exact path='/' component={Students}/>
    <Route path='/details' component={Details} />
    <Footer/>
  </Paper>
);

export default App;
