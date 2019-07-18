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
  TouchableOpacity
} from 'react-native';

class NavigationBar extends React.Component{

  render(){
    const {showButtonBack} = this.props
    const { goBack } = this.props.navigation;
    return(
      <View style={{flexDirection: 'row', borderBottomWidth: .5, borderColor: '#DDD'}}>
        {
          showButtonBack ?
          <TouchableOpacity onPress={() => {goBack()}} style={Styles.home.navigationBackBase} >
            <Image style={Styles.home.navigationBack} source={require('../images/back.png')}/>
          </TouchableOpacity>
          :
          null
        }

        <View style={Styles.home.baseLogo}>
          <Image source={ require('../images/instagram.png') } style={Styles.home.logo} />
        </View>
      </View>
    )
  }
}
export default NavigationBar;
