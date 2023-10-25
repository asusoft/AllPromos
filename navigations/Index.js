import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from "../contexts/authContext/AuthContext";
import DrawScreen from "../src/screens/DrawScreen/DrawScreen";
import UserInfoScreen from "../src/screens/UserInfoScreen/UserInfo";
import SignIn from "../src/screens/AuthScreens/SignIn";
import { COLORS, SIZES } from "../assets/constants/theme";
import { Image } from "react-native";
import icons from "../assets/constants/icons";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    const { authUser } = useAuth();

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {
                authUser ?
                    <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
                    :
                    (

                        <RootStack.Screen name="Auth" component={SignIn} />

                    )

            }
        </RootStack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        "display": "flex",
                        "borderRadius": 12,
                        "backgroundColor": COLORS.background,
                        position: 'absolute'
                    },
                    null
                ]
            }}

        >
            <BottomTab.Screen
                name="Home"
                component={DrawScreen}
                options={{
                    tabBarIcon: () => (
                        <Image source={icons.home} resizeMode="contain" style={{ height: 30, width: 30 }} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Draw"
                component={DrawScreen}
                options={{
                    tabBarIcon: () => (
                        <Image source={icons.gift} resizeMode="contain" style={{ height: 30, width: 30 }} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Bookmark"
                component={UserInfoScreen}
                options={{
                    tabBarIcon: () => (
                        <Image source={icons.bookmark} resizeMode="contain" style={{ height: 30, width: 30 }} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={UserInfoScreen}
                options={{
                    tabBarIcon: () => (
                        <Image source={icons.user} resizeMode="contain" style={{ height: 30, width: 30 }} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default RootNavigator