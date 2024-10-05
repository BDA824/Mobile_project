import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/Screens/Login";
import Menu from "./src/Screens/Menu";

const TabNav = createBottomTabNavigator();
const Stack = createStackNavigator();


function RoutingTabs() {
    return (
        <TabNav.Navigator>
            <TabNav.Screen name='Home' component={Menu} options={{
                headerShown: false
            }}/>
        </TabNav.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={RoutingTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}