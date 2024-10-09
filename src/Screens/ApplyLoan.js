import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from 'react'
import { Picker } from "@react-native-picker/picker";

export default function ApplyLoan() {

    const [amount, setAmount] = useState('');
    const [dedline, setDedline] = useState('');
    const [type, setType] = useState('');
    const [incomesMonthly, setIncomesMonthly] = useState('');
    const [expensesMonthly, setExpensesMonthly] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.tittle}>Apply for your loan</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.txtinput}
                    label="Amount"
                    value={amount}
                    onChangeText={amount => setAmount(amount)}
                ></TextInput>
                <TextInput
                    style={styles.txtinput}
                    label="Dedline"
                    value={dedline}
                    onChangeText={dedline => setDedline(dedline)}
                ></TextInput>
                <Picker
                    style={{
                        fontFamily: 'Roboto-Regular', width: 275,
                        fontSize: 18, marginTop: 15, borderWidth: 0, backgroundColor: 'transparent'
                    }}
                    selectedValue={type}
                    onValueChange={(itemValue, itemIndex) =>
                        setType(itemValue)
                    }>
                    <Picker.Item label="Type of loan" value="" enabled={false} color='gray' />
                    <Picker.Item label="Mortgage" value="mortgage" />
                    <Picker.Item label="Housing" value="housing" />
                    <Picker.Item label="Free investment" value="free" />
                </Picker>
                <TextInput
                    style={styles.txtinput}
                    label="Incomes"
                    value={incomesMonthly}
                    onChangeText={incomes => setIncomesMonthly(incomes)}
                ></TextInput>
                <TextInput
                    style={styles.txtinput}
                    label="Expenses"
                    value={expensesMonthly}
                    onChangeText={expenses => setExpensesMonthly(expenses)}
                ></TextInput>
            </View>
            <View style={styles.bottom}>
                <Button
                    buttonColor='#271B66'
                    mode='contained'
                    style={{ width: 145 }}
                >Send request</Button>
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
    tittle: {
        fontFamily: 'Montserrat-Light',
        fontSize: 24,
    },
    form: {
        height: 350,
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