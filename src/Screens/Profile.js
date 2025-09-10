import { StyleSheet, Text, View } from "react-native";
import { useState } from 'react'
import { TextInput, Button } from "react-native-paper";
import { useEffect } from "react";
import { useUser } from "../UserContext";
import { searchUser } from "../Request";

export default function Profile() {

    const [identification, setIdentification] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const { userId } = useUser();

    useEffect(async () => {
        try {
            const response = await searchUser(userId)
            console.log(response.data);
            const data = response.data
            
            setIdentification(data.identification)
            setName(data.name)
            setEmail(data.mail)
            setPhone(data.phone)
            setAddress(data.address)
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{
                    fontFamily: 'Montserrat-Light',
                    fontSize: 24,
                }}>Tell us what has changed</Text>
            </View>
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
            </View>
            <View style={styles.bottom}>
                <Button
                    buttonColor='#271B66'
                    mode='contained'
                >Update</Button>
                <Button
                    buttonColor='#271B66'
                    mode='contained'
                >Update password</Button>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        height: 98,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 25,
        marginRight: 25,
        alignItems: 'center',
        fontFamily: 'Montserrat-Regular',   
    },
    txtinput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: 275,
    }
})