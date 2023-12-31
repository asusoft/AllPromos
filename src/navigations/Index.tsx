import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from "../contexts/authContext/AuthContext";
import { Image } from "react-native";
import icons from "../../assets/constants/icons";
import DrawScreen from "../screens/DrawScreen/DrawScreen";
import UserInfoScreen from "../screens/UserInfoScreen/UserInfo";
import SignIn from "../screens/AuthScreens/SignIn";
import TempScreen from "../screens/TempScreen";
import { COLORS, SIZES } from "../../assets/constants/theme";
import { RootStackParamList, BottomTabStackParamList } from "../../types";


const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    const { authToken } = useAuth();

    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 20);
        return () => clearTimeout(timer);
    })

    if (!loading) {
        return (
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                {
                    authToken ?
                        <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
                        :
                        (
                            <RootStack.Screen name="Auth" component={SignIn} />
                        )
                }
            </RootStack.Navigator>
        )
    }
}

const BottomTab = createBottomTabNavigator<BottomTabStackParamList>();
const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Draw"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        "display": "flex",
                        "borderRadius": 12,
                        "backgroundColor": COLORS.BACKGROUND,
                        position: 'absolute'
                    },
                    null
                ]
            }}

        >
            <BottomTab.Screen
                name="Home"
                component={TempScreen}
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
                component={TempScreen}
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