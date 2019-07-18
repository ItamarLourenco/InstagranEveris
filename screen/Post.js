import React from 'react';
import Styles from './Style';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import NavigationBar from './components/NavigationBar'
import Feed from './components/Feed'
import Data from './Data.js'

export default class Post extends React.Component{

  render(){
    const { navigation } = this.props;
    const data = navigation.getParam('data')

    return(

      <View>
        <NavigationBar navigation={navigation} showButtonBack={true} />
        <Feed data={data} showComments={true} />
      </View>
    )
  }
}
