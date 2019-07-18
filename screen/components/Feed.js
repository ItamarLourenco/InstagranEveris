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

export default class Feed extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    const {data} = this.props
    return(
      <TouchableOpacity>
        <View style={Styles.feed.user}>
          <Image source={ data.userPhoto } style={Styles.feed.userPhoto} />
          <Text style={Styles.feed.userName} >{ data.user }</Text>
        </View>
        <Image source={ data.photo } style={Styles.feed.photo} />
        <View style={Styles.feed.buttons}>
          <TouchableOpacity onPress={() => {console.warn('Like');}}>
            <Image source={ require('../images/like.png') } style={Styles.feed.button} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {console.warn('Comentar');}}>
            <Image source={ require('../images/comment.png') } style={Styles.feed.button} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {console.warn('Compartilhar');}}>
            <Image source={ require('../images/share.png') } style={Styles.feed.button} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {console.warn('Compartilhar');}} style={ Styles.feed.lastButton }>
            <Image source={ require('../images/favorite.png') } style={Styles.feed.button} />
          </TouchableOpacity>
        </View>
        <View style={Styles.feed.likes}>
          <Text style={Styles.feed.like}>{ data.likes }</Text>
          <Text style={Styles.feed.likesDescription}> { data.likes > 1 ? 'curtidas' : 'curtida' }</Text>
        </View>
        <View style={Styles.feed.description}>
          <Text style={Styles.feed.descriptionUser}>{data.user}</Text>
            <Text style={Styles.feed.descriptionText}>{data.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
