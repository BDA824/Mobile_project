import { View, Text, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

export default function Header() {
    return (
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
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#271B66',
        marginBottom: 55,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})