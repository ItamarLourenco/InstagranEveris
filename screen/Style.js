import {
  StyleSheet,
} from 'react-native';

class Styles{
    static home = StyleSheet.create({
      contatiner: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fafafa',
        height: 90,
        borderBottomWidth: .5,
        borderColor: '#ebebeb'
      },
      logo: {
        width:100,
        height:100,
        resizeMode: 'contain',
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
    })
}
export default Styles;
