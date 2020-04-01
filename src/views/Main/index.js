import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Dashboard, Analysis, Calendar, Settings } from '../index'
import { VIEWS_NAME } from 'consts'

import BottomNavigation from './BottomNavigation'

const App = createBottomTabNavigator(
  {
    [VIEWS_NAME.DASHBOARD]: {
      screen: Dashboard
    },
    [VIEWS_NAME.ANALYSIS]: {
      screen: Analysis
    },
    [VIEWS_NAME.CALENDAR]: {
      screen: Calendar
    },
    [VIEWS_NAME.SETTINGS]: {
      screen: Settings
    },
  },
  {
    lazy: false,
    tabBarComponent: props => (
      <BottomNavigation {...props} />
    )
  }
);

export default createAppContainer(App)