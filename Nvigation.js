import React, {Component} from 'react';

import { StyleSheet, Image } from 'react-native';

import {
    createSwitchNavigator,
    createAppContainer,
  } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'

// Initial Flow Files
import Home from './Home';
import CountryInfo from './CountryInfo';
import WeatherInfo from './WeatherInfo';

//********************** Initial Stack **********************/
const InitialStack = createStackNavigator ({
    HomeNav: {
    screen: Home,
    navigationOptions: { header: null },
  },
  CountryInforNav: {
    screen: CountryInfo,
    navigationOptions: { header: null },
  },
  WeatherInfoNav: {
    screen: WeatherInfo,
    navigationOptions: { header: null },
  },
},
{
    initialRouteName: 'HomeNav',
    defaultNavigationOptions: {
      header: null,
    },
}
);
//***************************************************************/


//********************** Switch Navigator **********************/

const AppSwitchNavigator = createSwitchNavigator({
  InitialSwitch: {screen: InitialStack},
});
const AppContainer = createAppContainer(AppSwitchNavigator);

//***************************************************************/ 

export default class Navigation extends Component {
    render() {
        return (
          <AppContainer/>
        );
    }
}

const styles = StyleSheet.create({
  headerButtonStyle: {
    marginTop: 8,
    marginLeft: 10,
    height: 34,
    width: 34
  },

});