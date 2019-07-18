import {
  StyleSheet,
} from 'react-native';

class Styles{
    static home = StyleSheet.create({
      logo: {
        width:100,
        height:100,
        resizeMode: 'contain',
        marginTop: 10
      },
      navigationBackBase:{
        justifyContent: 'flex-end',
        paddingBottom: 15,
        paddingLeft: 10
      },
      navigationBack: {
        width:20,
        height:20,
        resizeMode: 'contain',
      },
      baseLogo: {
        flex: 1,
        alignItems: 'center',
        height: 80,
        marginTop: 10,
      }
    });

    static feed = StyleSheet.create({
      user: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5
      },
      userPhoto: {
        width: 35,
        height: 35,
        borderRadius: 35/2,
        margin:10,
      },
      userName: {
        fontWeight: 'bold',
        flex: 1,
        alignSelf: 'center'
      },
      photo: {
        resizeMode: 'cover',
        width: '100%',
        height: 250
      },
      buttons: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5
      },
      button: {
        width: 20,
        height: 20,
        marginLeft: 10
      },
      lastButton: {
        position: 'absolute',
        right: 10
      },
      description: {
        flexDirection: 'row',
        marginLeft: 15,
      },
      descriptionUser: {
        fontWeight: 'bold',
        fontSize: 12
      },
      descriptionText: {
        marginLeft: 5,
        fontSize: 12
      },
      likes: {
        flexDirection: 'row',
        marginLeft: 15,
      },
      like: {
        fontWeight: 'bold',
      },
      likesDescription: {
        marginLeft: 3
      }
    });

    static comments = StyleSheet.create({
      userPhoto: {
        width: 20,
        height: 20,
        borderRadius: 20/2,
        margin:10,
      },
      user: {
        marginLeft: 20,
        marginBottom: -10,
        flexDirection: 'row',
        height: 50
      },
      userName: {
        fontSize: 10
      },
      comment: {
        fontSize: 10,
        marginLeft: 60
      }
    })

}
export default Styles;
