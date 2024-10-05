import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ navigation }) {
    return (
        <View>
            <View style={styles.header}>
                <Text
                    style={{ fontFamily: 'Montserrat-Bold', fontSize: 14, color: '#ffffff' }} >
                    Esteban-quito
                </Text>
                <Text 
                style={{ color: '#ffffff', fontFamily: 'Montserrat-Light' }} >
                    Welcome, {'\n'} Andres
                </Text>
                <IconButton
                    icon={require('../../assets/Icons/Logout.svg')}
                    size={35}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
            <View style={styles.intermediate}></View>
            <View style={styles.information}></View>
            <View style={styles.buttons}></View>
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
        backgroundColor: '#271B66',
        marginBottom: 85,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    intermediate: {
        height: 75,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
    },
    information: {
        height: 165,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
    },
    buttons: {
        height: 100,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
    }
})

