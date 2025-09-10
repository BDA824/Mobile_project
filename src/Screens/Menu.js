import { StyleSheet, Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { searchUser } from "../Request";
import { useUser } from '../UserContext';

export default function Menu({ route, navigation }) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [balance, setBalance] = useState('')
    const { userId } = useUser();
    const { userID } = route.params;
    useEffect(async () => {
        try {
            const response = await searchUser(userID)
            console.log(userID);
            const data = response.data
            setName(data.name)
            setPhone(data.phone)
            setBalance(data.balance)
        } catch (error) {
            console.log(error.message);
        }
    }, [userID]);
    return (
        <View>
            <Header name={name} />
            <View style={{
                height: 55,
                borderTopWidth: 2,
                borderTopColor: 'black',
                marginLeft: 12,
                marginRight: 12
            }}></View>
            <View style={styles.information}>
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ fontFamily: 'Montserrat-Regular' }}>Saving Account {'\n'} {phone}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: 35 }}>
                    <Text
                        style={{ fontFamily: 'Montserrat-Bold' }}
                        onPress={() => navigation.navigate('Financial history')}
                    >Balance {'\n'} $ {balance}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <Button
                    icon={require('../../assets/Icons/ApplyLoan.svg')}
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    buttonColor='#271B66'
                    mode='contained'
                    onPress={() => navigation.navigate('Apply loan')}
                >Apply for loan</Button>
                <Button
                    icon={require('../../assets/Icons/Transaction.svg')}
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    buttonColor='#271B66'
                    mode='contained'
                    onPress={() => navigation.navigate('Info transactions')}
                >Transactions</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    information: {
        height: 165,
        borderWidth: 2,
        borderColor: '#C4C3C7',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingLeft: 25,
        marginLeft: 25,
        marginRight: 25
    },
    buttons: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 25,
        marginRight: 25,
        alignItems: 'center',
        fontFamily: 'Montserrat-Regular'
    }
})

