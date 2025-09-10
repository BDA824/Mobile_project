import { StyleSheet, Text, View } from "react-native";
import { useState } from 'react'
import { TextInput, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Header from "../Components/Header";
import { useUser } from "../UserContext";
import { searchUser } from "../Request";
import { useEffect } from "react";
import { makeTransaction } from "../Request";

export default function MoveMoney({ navigation }) {

    const [type, setType] = useState('')
    const [transactionAmount, setTransactionAmount] = useState(0)
    const [targetAccount, setTargetAccount] = useState('')
    const [name, setName] = useState('');
    const { userId } = useUser();

    const [responses, setResponse] = useState({});
    const [success, setSuccess] = useState(false);
    const [founds, setFounds] = useState(false);
    useEffect(async () => {
        try {
            const response = await searchUser(userId)
            const data = response.data
            setResponse(data)
            setName(data.name)
            navigation.navigate('Main', {screen: 'Home', params: {userId: userId}})
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    const handleSubmit = async () => {
        try {
          const data = {
            id: responses.id,
            phone: responses.phone,
            type_transaction: type,
            amount: transactionAmount,
            target_account: targetAccount
          }
          const response = await makeTransaction(data)
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
            setType('');
            setTransactionAmount(0);
            setTargetAccount('')
          }, 3000);
        } catch (error) {
          if (error.response.status == 400)
            setFounds(true)
            setTimeout(() => {
                setFounds(false)
                setType('');
                setTransactionAmount(0);
                setTargetAccount('')
            }, 3000);
        }
      }

    return (
        <View style={styles.container}>
            <Header name={name}/>
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
                    <Picker.Item label="Deposit" value="Deposit" />
                    <Picker.Item label="Transfer" value="Transfer" />
                    <Picker.Item label="Withdrawal" value="Withdrawal" />
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
                {success && <Text style={{ color: 'green', marginTop: 5, fontFamily: 'Montserrat-Bold' }}>The transaction was successfully completed </Text>}
                {founds && <Text style={{ color: 'red', marginTop: 5, fontFamily: 'Montserrat-Bold' }}>insufficient funds</Text>}
            </View>
            <View style={styles.bottom}>
            <Button
                    buttonColor='#271B66'
                    mode='contained'
                    style={{ width: 145 }}
                    onPress={handleSubmit}
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