/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Pages/loginPage';

AppRegistry.registerComponent(appName, () => Login);
