import * as React from "react";
import { Image, TouchableOpacity, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { CreateEvent } from "../screens/CreateEvent";

function headerLogo() {
    return (
        <TouchableOpacity style={{ paddingLeft: 20 }}>
            <Image
                style={{ width: 89, height: 29 }}
                source={require("../assets/UGoing_Logo.png")}
            />
        </TouchableOpacity>
    );
}
function loginButton() {
    return (
        <TouchableOpacity style={{ paddingRight: 20 }}>
            <Text
                style={{
                    textDecorationLine: "underline",
                    fontSize: 18,
                }}
            >
                Login/Register
            </Text>
        </TouchableOpacity>
    );
}
export const AppNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Create">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "",
                        headerLeft: () => {
                            return headerLogo();
                        },
                        headerRight: () => {
                            return loginButton();
                        },
                    }}
                />

                <Stack.Screen
                    name="Create"
                    component={CreateEvent}
                    options={{
                        title: "",
                        headerLeft: () => {
                            return headerLogo();
                        },
                        headerRight: () => {
                            return loginButton();
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
