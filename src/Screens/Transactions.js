import { StyleSheet, View, Text, ScrollView } from "react-native";
import CardTransaction from "../Components/CardTransaction";
import Header from "../Components/Header";
import { useUser } from "../UserContext";
import { searchUser } from "../Request";
import { useEffect, useState } from "react";
import { transactionForUser } from "../Request";

export default function Transactions() {

    const [name, setName] = useState('');
    const { userId } = useUser();
    const [transactions, setTransactions] = useState([]);
    useEffect(async () => {
        try {
            const response = await searchUser(userId)
            const responses = await transactionForUser(userId)
            const data = response.data
            setName(data.name)
            setTransactions(responses.data)
            console.log(transactions)
        } catch (error) {
            console.log(error.message);
        }
    }, []);
    return (
        <View style={styles.container}>
            <Header name={name}/>
            <View style={styles.header}>
                <Text style={styles.tittle}>How you've moved your money</Text>
            </View>
            <ScrollView style={styles.transactions}>
                {transactions.map(transaction => (
                    <CardTransaction id={transaction.id} type={transaction.type_transaction} value={transaction.amount} balance={"---"}/>
                ))}
            </ScrollView>
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
        justifyContent: 'center',
        borderTopWidth: 2,
        borderTopColor: 'black',
        marginLeft: 12,
        marginRight: 12
    },
    tittle: {
        fontFamily: 'Montserrat-Light',
        fontSize: 20
    },
    transactions: {
        height: 375,
        borderWidth: 2,
        borderColor: '#C4C3C7',
        borderRadius: 10,
    }
})