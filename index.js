/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './screen/Home';
import Post from './screen/Post';
import {name as appName} from './app.json';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Home,
    navigationOptions: {
      header: null,
    },
  },

  Post: {screen: Post,
    navigationOptions: {
      header: null,
    },
  },
});

const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => App);
