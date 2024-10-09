import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import { Picker } from "@react-native-picker/picker";

export default function History({ navigation }) {

    const [selectedValue, setSelectedValue] = useState('');

    const handleValueChange = (value) => {
        setSelectedValue(value);
        if (value === 'prueba1') {
          navigation.navigate('Info loan');
        } else if (value === 'prueba2') {
          navigation.navigate('Info transactions');
        }
      };

    return (
        <View style={styles.container}>
            <Header />
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
                    }}>Total incomes <Text style={{ color: 'green' }}>$ 1,596,000</Text></Text>
                </View>
                <View>
                    <Text style={styles.message}>Total expenses <Text style={{ color: 'red' }}>$ 855,000</Text></Text>
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
                    <Picker.Item label="Prueba 1" value="prueba1" />
                    <Picker.Item label="Prueba 2" value="prueba2" />
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
