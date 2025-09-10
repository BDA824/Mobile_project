import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import { Picker } from "@react-native-picker/picker";
import { useUser } from "../UserContext";
import { searchHistory, searchUser, loanForUser } from "../Request";
import { useEffect } from "react";

export default function History({ navigation }) {

    const [selectedValue, setSelectedValue] = useState('');
    const [name, setName] = useState('');
    const { userId } = useUser();
    const [datas, setData] = useState({})
    const [incomes, setIncomes] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [Loans, setLoans] = useState([])
    const { setIdPay } = useUser();

    useEffect(async () => {
        try {
            const response = await searchUser(userId)
            const data = response.data
            setName(data.name)

            const identification = {
                identification: data.identification
            }

            const history = await searchHistory(identification)
            console.log(history.data)
            setIncomes(history.data.incomes_monthly)
            setExpenses(history.data.expenses_monthly)

            const loans = await loanForUser(data.id)
            setLoans(loans.data)
            console.log(Loans)
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    const handleValueChange = (value) => {
        setSelectedValue(value);
        console.log(value);
        setIdPay(value)
        navigation.navigate('Info loan')
        // navigation.navigate('Main', {
        //     screen: 'Info loan',
        //     params: { id_pay: value },
        //   });
    };

    return (
        <View style={styles.container}>
            <Header name={name} />
            <View style={styles.header}>
                <Text style={{
                    fontFamily: 'Montserrat-Light',
                    fontSize: 24,
                    textAlign: 'center'
                }}>That's how your money {'\n'} has moved</Text>
            </View>
            <View style={styles.info}>
                <View>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 22,
                        color: '#FFFFFF',
                        marginBottom: 25
                    }}>Total incomes <Text style={{ color: 'green' }}>{incomes}</Text></Text>
                </View>
                <View>
                    <Text style={styles.message}>Total expenses <Text style={{ color: 'red' }}>{expenses}</Text></Text>
                </View>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 45
            }}>
                <Picker
                    style={{
                        fontFamily: 'Montserrat-regular', width: 275,
                        fontSize: 18, marginTop: 15, borderWidth: 0, backgroundColor: 'transparent'
                    }}
                    selectedValue={selectedValue}
                    onValueChange={handleValueChange}
                >
                    <Picker.Item label="Loans actives" value="" enabled={false} color='gray' />
                    {Loans.map((item) => (
                        <Picker.Item
                            key={item.id} // Usar un identificador único
                            label={item.amount} // Usar el atributo 'name' como label
                            value={item.id_payment}   // Usar 'id' como valor del picker
                        />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        height: 165,
        backgroundColor: '#314EEB',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#C4C3C7',
        borderRadius: 10,
    },
    message: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: '#FFFFFF'
    },
})
