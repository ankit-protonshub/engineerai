import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './Home';
import CountryInfo from './CountryInfo';

const InitialStack = createStackNavigator ({
    HomeNav : {
        screen: Home,
        navigationOptions: {header: null},
    },
    CountryInfoNav : {
        screen: CountryInfo,
        navigationOptions: {header: null},
    }    
},
{
    initialRouteName: 'HomeNav',
    defaultNavigationOptions: {
        header: null,
    }
}
)

const AppSwitchNavigator = createSwitchNavigator ({
    HomeSwitch: {screen: InitialStack }
});
const AppContainer = createAppContainer(AppSwitchNavigator);

export default class Nvigation extends Component {
    render() {
      return (
        <AppContainer/>
      )
    }
  }