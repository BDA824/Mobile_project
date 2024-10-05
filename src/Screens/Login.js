import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

import Menu from './Menu';

export default function Login({navigation}) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      {/* <ImageBackground source={require('../../assets/Images/Font_Page1.jpg')} /> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Esteban-quito</Text>
          <Button
            mode='text'
            onPress={() => console.log('Pressed')}
            rippleColor='#271B66'
            textColor='white'
          >
            Sign up
          </Button>
        </View>
        <View style={styles.content}>
          <Text style={styles.tittle}>Login</Text>
          <TextInput
            style={styles.username}
            label="Username"
            value={username}
            onChangeText={username => setUserName(username)}
            mode='outlined'
            theme={{ colors: { text: 'black', primary: 'black' } }}
          />
          <TextInput
            style={styles.username}
            label="Password"
            value={password}
            onChangeText={pass => setPassword(pass)}
            secureTextEntry={true}
            mode='outlined'
            theme={{ colors: { text: 'black', primary: 'black' } }}
          />
          <View style={styles.btn}>
            <Button
              mode='text'
              onPress={() => navigation.navigate('Home')}
              rippleColor='#271B66'
              textColor='black'
            >
              Sign in
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  tittle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    marginBottom: 50
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#271B66',
    borderRadius: 3,
    marginBottom: 125,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    marginTop: 20,
    fontSize: 14,
    flexDirection: 'row'
  },
  username: {
    marginBottom: 10,
    width: 275
  },
  headerTxt: {
    fontFamily: 'Montserrat-Light',
    fontSize: 24,
    color: 'white',
  }
});