import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import Box from './pages/Box';
import Main from './pages/Main';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Box
  })
);

export default Routes;
