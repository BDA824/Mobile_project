import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/Screens/Login";

const TabNav = createBottomTabNavigator();


function RoutingTabs() {
    return (
        <TabNav.Navigator>
            <TabNav.Screen name='Login' component={Login} options={{
                tabBarStyle: {display: 'none'},
                headerShown: false
            }}/>
        </TabNav.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <RoutingTabs />
        </NavigationContainer>
    )
}