import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { loginUser } from '../Request';
import { useUser } from '../UserContext';



export default function Login({ navigation }) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUserId } = useUser();

  const [incorrectPass, setIncorrectPass] = useState(false);
  const [incorrectUser, setIncorrectUser] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      const data = {
        username: username,
        password: password,
      }

      const response = await loginUser(data)
      const userData = response.data.user.id
      setUserId(userData)
      setSuccess(true)
      setTimeout(() => {
        navigation.navigate('Main', {screen: 'Home', params: { userID: userData }});
      }, 3000);
    } catch (error) {
      if (error.response.status === 404)
        setIncorrectUser(true)
        setTimeout(() => {
          setIncorrectUser(false)
          setUserName("");
          setPassword("");
        }, 3000);
      if (error.response.status == 400)
        setIncorrectPass(true)
        setTimeout(() => {
          setIncorrectPass(false)
          setUserName("");
          setPassword("");
        }, 3000);
    }
  }

  return (
    <View>
      {/* <ImageBackground source={require('../../assets/Images/Font_Page1.jpg')} /> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Esteban-quito</Text>
          <Button
            mode='text'
            onPress={() => navigation.navigate('Register')}
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
          {incorrectPass && <Text style={{ color: 'red', marginTop: 5, fontFamily: 'Montserrat-Bold' }}>Password invalid</Text>}
          {incorrectUser && <Text style={{ color: 'red', marginTop: 5, fontFamily: 'Montserrat-Bold' }}>Username invalid</Text>}
          <View style={styles.btn}>
            <Button
              mode='text'
              onPress={handleSubmit}
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