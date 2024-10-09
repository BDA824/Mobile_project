import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from 'react'

export default function Profile() {

    const [state, setState] = useState('');
    const [totalDebt, setTotalDebt] = useState('');
    const [quotaValue, setQuotaValue] = useState('');
    const [pendingFees, setPendingFees] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{
                    fontFamily: 'Montserrat-Light',
                    fontSize: 24,
                }}>Here's your loan</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.txtinput}
                    label="State"
                    value={state}
                    onChangeText={state => setState(state)}
                ></TextInput>
                <TextInput
                    style={styles.txtinput}
                    label="Total debt"
                    value={totalDebt}
                    onChangeText={debt => setTotalDebt(debt)}
                ></TextInput>
                <TextInput
                    style={styles.txtinput}
                    label="Quota value"
                    value={quotaValue}
                    onChangeText={value => setQuotaValue(value)}
                ></TextInput>
                <TextInput
                    style={styles.txtinput}
                    label="Pending fees"
                    value={pendingFees}
                    onChangeText={fees => setPendingFees(fees)}
                ></TextInput>
            </View>
            <View style={styles.bottom}>
                <Button
                    buttonColor='#271B66'
                    mode='contained'
                >Pay quota</Button>
                <Button
                    buttonColor='#271B66'
                    mode='contained'
                >Pay total</Button>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        height: 98,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 25,
        marginRight: 25,
        alignItems: 'center',
        fontFamily: 'Montserrat-Regular',   
    },
    txtinput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: 275,
    }
})