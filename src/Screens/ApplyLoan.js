import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from 'react'
import { Picker } from "@react-native-picker/picker";
import { useUser } from "../UserContext";
import { searchUser } from "../Request";
import { useEffect } from "react";
import { applyLoan } from "../Request";

export default function ApplyLoan() {

    const [amount, setAmount] = useState(0);
    const [dedline, setDedline] = useState(0);
    const [type, setType] = useState('');
    const [incomesMonthly, setIncomesMonthly] = useState(0);
    const [expensesMonthly, setExpensesMonthly] = useState(0);

    const { userId } = useUser();
    const [success, setSuccess] = useState(false);

    useEffect(async () => {
        try {
            const response = await searchUser(userId)
            const data = response.data
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    const handleSubmit = async () => {
        try {
          const data = {
            identification: userId,
            type_loan: type,
            dedline: dedline,
            amount: amount,
            incomes_monthly: incomesMonthly,
            expenses_monthly: expensesMonthly
          }
          const response = await applyLoan(data)
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
            setType('');
            setAmount(0);
            setDedline('')
            setIncomesMonthly('')
            setExpensesMonthly('')
          }, 3000);
        } catch (error) {
          console.log(error)
        }
      }

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
                    onPress={handleSubmit}
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