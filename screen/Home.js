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
import FetchService from './FetchService';

class Home extends React.Component{


  constructor(props) {
		super(props)
    this.state = {
      feeds: []
    }

    FetchService.request().then(result => {
      this.setState({feeds: result.feed});
    }).catch(e => {
      console.warn(e);
    });

  }



  render(){
    const {navigate} = this.props.navigation;

    return(
      <View>
        <NavigationBar navigation={navigate} />
        {
          this.state.feeds.length > 0 ?
          <FlatList
              data={this.state.feeds}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <Feed data={item} navigate={navigate} />}
            />
          :
          <Text>Carregando...</Text>
        }
      </View>
    )
  }
}

export default Home;
