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
    return(
      <View style={styles.contatiner}>
        <NavigationBar />
        <FlatList
            data={Data.feed}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Feed data={item} />}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contatiner: {

  }
});

export default Home;
