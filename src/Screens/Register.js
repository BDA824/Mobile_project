import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { registerUser } from "../Request";

export default function Register({navigation}) {

    const [identification, setIdentification] = useState(0); //Integer
    const [name, setName] = useState(''); //String
    const [username, setUsername] = useState(''); //String
    const [password, setIPassword] = useState(''); //String
    const [mail, setMail] = useState(''); //Email
    const [phone, setPhone] = useState(0); //Integer
    const [address, setAddress] = useState(''); //String
    const [type_account, setType_account] = useState(''); //String

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleSubmit = async () =>{
        try{
            const data = {
                identification: identification,
                name: name,
                username: username,
                password: password,
                mail: mail,
                phone: phone,
                address:address,
                type_account: type_account
            }
            const response = await registerUser(data)
            setSuccess(true)
            setTimeout(() => {
                navigation.navigate('Login')
              }, 3000);
        } catch (error) {
            if (error.response.status === 409)
                setError(true);
                setTimeout(() => {
                    setError(false); // Ocultamos el error después de 3 segundos
                    setIdentification(0);
                    setName('');
                    setUsername('');
                    setIPassword('');
                    setMail('');
                    setPhone('');
                    setAddress('');
                    setType_account('')
                  }, 3000);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.tittle}>We want to meet you</Text>
            </View>
            <ScrollView>
                <View style={styles.form}>
                    <TextInput
                        style={styles.txtinput}
                        label="Identification"
                        value={identification}
                        onChangeText={id => setIdentification(id)}
                    ></TextInput>
                    <TextInput
                        style={styles.txtinput}
                        label="Name"
                        value={name}
                        onChangeText={name => setName(name)}
                    ></TextInput>
                    <TextInput
                        style={styles.txtinput}
                        label="Username"
                        value={username}
                        onChangeText={user => setUsername(user)}
                    ></TextInput>
                    <TextInput
                        style={styles.txtinput}
                        label="Password"
                        value={password}
                        secureTextEntry
                        onChangeText={pass => setIPassword(pass)}
                    ></TextInput>
                    <TextInput
                        style={styles.txtinput}
                        label="Email"
                        value={mail}
                        onChangeText={mail => setMail(mail)}
                    ></TextInput>
                    <TextInput
                        style={styles.txtinput}
                        label="Phone"
                        value={phone}
                        onChangeText={phone => setPhone(phone)}
                    ></TextInput>
                    <TextInput
                        style={styles.txtinput}
                        label="Address"
                        value={address}
                        onChangeText={add => setAddress(add)}
                    ></TextInput>
                    <Picker
                        style={{
                            fontFamily: 'Roboto-Regular', width: 275,
                            fontSize: 18, marginTop: 15, borderWidth: 0, backgroundColor: 'transparent'
                        }}
                        selectedValue={type_account}
                        onValueChange={(itemValue, itemIndex) =>
                            setType_account(itemValue)
                        }>
                        <Picker.Item label="Type of account" value="" enabled={false} color='gray' />
                        <Picker.Item label="Saving account" value="Saving account" />
                        <Picker.Item label="Currently account" value="Currently account" />
                    </Picker>
                </View>
            </ScrollView>
            <View style={styles.button}>
                <Button
                    buttonColor='#271B66'
                    mode='contained'
                    style={{width: 125}}
                    onPress={handleSubmit}
                >Sign up</Button>
            {error && <Text style={{ color: 'red', marginTop: 5, fontFamily: 'Montserrat-Bold' }}>This user is already registered</Text>}
            {success && <Text style={{ color: 'green', marginTop: 5, fontFamily: 'Montserrat-Bold' }}>Registration has been successful</Text>}
            </View>
            <View style={styles.footer}>
                <Text style={{
                    fontFamily: 'Montserrat-Light',
                    fontSize: 24,
                    color: 'white',
                }}>Esteban-quito</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        height: 125,
        // borderWidth: 2,
        // borderColor: '#C4C3C7',
        // borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tittle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
    },
    form: {
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: '#C4C3C7',
        // borderRadius: 10,
    },
    button: {
        height: 85,
        marginBottom: 62,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtinput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: 275,
    },
    footer: {
        height: 45,
        borderRadius: 5,
        backgroundColor: '#271B66',
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})