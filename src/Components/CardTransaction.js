import { StyleSheet, Text, View } from "react-native";

export default function CardTransaction({ id, type, value, balance }) {
    return (
        <View style={styles.container} key={id}>
            <View>
                <Text style={styles.message}>You have {'\n'} {type} </Text>
            </View>
            <View>
                <Text style={styles.message}>$ {value} {'\n'} Balance $ {balance} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 125,
        backgroundColor: '#314EEB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#C4C3C7',
        borderRadius: 10,
    },
    message: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#FFFFFF'
    }
})