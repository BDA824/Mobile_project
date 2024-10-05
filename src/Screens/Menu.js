import { StyleSheet, Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
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
            <View style={{
                height: 55, 
                borderTopWidth: 2,
                borderTopColor: 'black',
                marginLeft: 12,
                marginRight: 12
            }}></View>
            <View style={styles.information}>
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ fontFamily: 'Montserrat-Regular' }}>Saving Account {'\n'} +57 3028561243</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: 35 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Balance {'\n'} $ 758,256</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <Button
                    icon={require('../../assets/Icons/ApplyLoan.svg')}
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    buttonColor='#271B66'
                    mode='contained'
                >Apply for loan</Button>
                <Button
                    icon={require('../../assets/Icons/Transaction.svg')}
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    buttonColor='#271B66'
                    mode='contained'
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
    header: {
        height: 125,
        backgroundColor: '#271B66',
        marginBottom: 65,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
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

