/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import FavoriteScreen from './src/screen/FavoriteScreen';

const FAVORITE_SCREEN = 'FavoriteScreen'

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(FAVORITE_SCREEN, () => FavoriteScreen)