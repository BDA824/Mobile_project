import { StyleSheet, Text, View } from "react-native";
import { useState } from 'react'
import { TextInput, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Header from "../Components/Header";

export default function MoveMoney() {

    const [type, setType] = useState('')
    const [transactionAmount, setTransactionAmount] = useState('')
    const [targetAccount, setTargetAccount] = useState('')

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.header}>
                <Text style={{
                    fontFamily: 'Montserrat-Light',
                    fontSize: 24,
                }}>Share your money</Text>
            </View>
            <View style={styles.form}>
                <Picker
                    style={{
                        fontFamily: 'Roboto-Regular', width: 275,
                        fontSize: 18, marginTop: 15, borderWidth: 0, backgroundColor: 'transparent'
                    }}
                    selectedValue={type}
                    onValueChange={(itemValue, itemIndex) =>
                        setType(itemValue)
                    }>
                    <Picker.Item label="Type of transaction" value="" enabled={false} color='gray' />
                    <Picker.Item label="Deposit" value="deposit" />
                    <Picker.Item label="Transfer" value="transfer" />
                    <Picker.Item label="Withdrawn" value="withdrawn" />
                </Picker>
                <TextInput
                    style={styles.txtinput}
                    label="Transaction amount"
                    value={transactionAmount}
                    onChangeText={amount => setTransactionAmount(amount)}
                ></TextInput>
                <TextInput
                    style={styles.txtinput}
                    label="Target account"
                    value={targetAccount}
                    onChangeText={target => setTargetAccount(target)}
                ></TextInput>
            </View>
            <View style={styles.bottom}>
            <Button
                    buttonColor='#271B66'
                    mode='contained'
                    style={{ width: 145 }}
                >Move money</Button>
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
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtinput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: 275,
    }
})