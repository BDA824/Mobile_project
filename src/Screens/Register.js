import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

export default function Register() {

    const [identification, setIdentification] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setIPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [type, setType] = useState('');

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
                        value={email}
                        onChangeText={mail => setEmail(mail)}
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
                        selectedValue={type}
                        onValueChange={(itemValue, itemIndex) =>
                            setType(itemValue)
                        }>
                        <Picker.Item label="Type of account" value="" enabled={false} color='gray' />
                        <Picker.Item label="Saving account" value="java" />
                        <Picker.Item label="Currently account" value="js" />
                    </Picker>
                </View>
            </ScrollView>
            <View style={styles.button}>
                <Button
                    buttonColor='#271B66'
                    mode='contained'
                    style={{width: 125}}
                >Sign up</Button>
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