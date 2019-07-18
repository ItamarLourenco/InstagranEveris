import React from 'react';
import Styles from '../Style';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

class NavigationBar extends React.Component{

  render(){
    return(
      <View style={Styles.home.contatiner}>
        <Image source={ require('../images/instagram.png') } style={Styles.home.logo} />
      </View>
    )
  }
}
export default NavigationBar;
