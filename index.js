/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import { name as appName } from './app.json';
import { ORIGINAL } from 'consts/colors'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ORIGINAL.PRIMARY.LEVEL1,
    accent: ORIGINAL.SECOND_A.LEVEL1,
  },
};

function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
