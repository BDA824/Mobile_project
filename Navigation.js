import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Login from "./src/Screens/Login";
import Menu from "./src/Screens/Menu";
import Register from "./src/Screens/Register";
import ApplyLoan from "./src/Screens/ApplyLoan";
import MoveMoney from "./src/Screens/MoveMoney";
import Profile from "./src/Screens/Profile";
import Loan from "./src/Screens/Loan";
import Transactions from "./src/Screens/Transactions";

const TabNav = createBottomTabNavigator();
const Stack = createStackNavigator();

function ApplyLoanS() {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Loan" component={ApplyLoan} />
        </Stack.Navigator>
    );
}

function InfoLoan() {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Info loan" component={Loan} />
        </Stack.Navigator>
    );
}

function InfoTransactions() {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Transactions" component={Transactions} />
        </Stack.Navigator>
    );
}

function RoutingTabs() {
    return (
        <TabNav.Navigator>
            <TabNav.Screen name='Home' component={Menu} options={{
                headerShown: false,
                tabBarIcon: () => <Entypo name="home" size={24} color="black" />
            }} />
            <TabNav.Screen name='Move money' component={MoveMoney} options={{
                headerShown: false,
                tabBarIcon: () => <FontAwesome6 name="money-bill-transfer" size={24} color="black" />
            }} />
            <TabNav.Screen name='Profile' component={Profile} options={{
                headerShown: false,
                tabBarIcon: () => <FontAwesome5 name="user" size={24} color="black" />
            }} />
            <TabNav.Screen
                name="Apply loan"
                component={ApplyLoanS}
                options={{ tabBarButton: () => null, headerShown: false, }}
            />
            <TabNav.Screen
                name="Info loan"
                component={InfoLoan}
                options={{ tabBarButton: () => null, headerShown: false, }}
            />
            <TabNav.Screen
                name="Info transactions"
                component={InfoTransactions}
                options={{ tabBarButton: () => null, headerShown: false, }}
            />
        </TabNav.Navigator>
    )
}

export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Home' component={RoutingTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}