import { StyleSheet, View, Text, ScrollView } from "react-native";
import CardTransaction from "../Components/CardTransaction";
import Header from "../Components/Header";

export default function Transactions() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.header}>
                <Text style={styles.tittle}>How you've moved your money</Text>
            </View>
            <ScrollView style={styles.transactions}>
                <CardTransaction id={1} type={'transaction'} value={25.855} balance={800.952} />
                <CardTransaction id={2} type={'transaction'} value={25.855} balance={800.952} />
                <CardTransaction id={3} type={'transaction'} value={25.855} balance={800.952} />
                <CardTransaction id={4} type={'transaction'} value={25.855} balance={800.952} />
                <CardTransaction id={5} type={'transaction'} value={25.855} balance={800.952} />
                <CardTransaction id={6} type={'transaction'} value={25.855} balance={800.952} />
                <CardTransaction id={7} type={'transaction'} value={25.855} balance={800.952} />
                <CardTransaction id={8} type={'transaction'} value={25.855} balance={800.952} />
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