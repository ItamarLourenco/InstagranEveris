import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import NavigationBar from './components/NavigationBar'
import Feed from './components/Feed'
import Data from './Data.js'

class Home extends React.Component{

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
        <NavigationBar navigation={navigate} />
        <FlatList
            data={Data.feed}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Feed data={item} navigate={navigate} />}
          />
      </View>
    )
  }
}

export default Home;
