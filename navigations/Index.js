import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../contexts/authContext/AuthContext";
import DrawScreen from "../src/screens/DrawScreen/DrawScreen";
import SignIn from "../src/screens/AuthScreens/SignIn";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    const { authUser } = useAuth();

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {
                authUser ?
                    <RootStack.Screen name="Home" component={DrawScreen} />
                    :
                    (

                        <RootStack.Screen name="Auth" component={SignIn} />

                    )

            }
        </RootStack.Navigator>
    )
}

export default RootNavigator