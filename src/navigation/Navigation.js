import React, { useState, useMemo, useEffect } from "react";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../Firebase/context";
import { fb, db } from "../Firebase/firebase";

import { HomeScreen } from "../screens/Home";
import { CreateEvent } from "../screens/CreateEvent";
import { LoginScreen } from "../screens/Login";
import { SignupScreen } from "../screens/Signup";

function headerLogoBig(navigation) {
    return (
        <TouchableOpacity
            style={{ /*paddingLeft: 20*/ justifyContent: "center" }}
            onPress={() => {
                navigation.navigate("Home");
            }}
        >
            <Image
                style={{ width: 154, height: 50 }}
                source={require("../assets/UGoing_Logo.png")}
            />
        </TouchableOpacity>
    );
}

function headerLogoSmall(navigation) {
    return (
        <TouchableOpacity
            style={{ /*paddingLeft: 20*/ justifyContent: "center" }}
            onPress={() => {
                navigation.navigate("Home");
            }}
        >
            <Image
                style={{ width: 74, height: 24 }}
                source={require("../assets/UGoing_Logo.png")}
            />
        </TouchableOpacity>
    );
}

export const AppNavigator = () => {
    const Stack = createStackNavigator();
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("User state changed");
        fb.auth().onAuthStateChanged(setUser);
    }, []);
    const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

    function loginButton(navigation) {
        if (!user) {
            return (
                <TouchableOpacity
                    style={{ paddingRight: 20 }}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
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
        return (
            <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={() => fb.auth().signOut()}
            >
                <Text
                    style={{
                        textDecorationLine: "underline",
                        fontSize: 18,
                    }}
                >
                    Sign Out
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <AuthContext.Provider value={userProvider}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Create">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={({ navigation }) => ({
                            title: "",
                            headerTitleAlign: "center",
                            headerLeft: () => null,
                            headerTitle: () => {
                                return headerLogoBig(navigation);
                            },
                            headerStyle: styles.headerStyle,
                            /*
                            headerRight: () => {
                                return loginButton(navigation);
                            },*/
                        })}
                    />

                    <Stack.Screen
                        name="Create"
                        component={CreateEvent}
                        options={({ navigation }) => ({
                            title: "",
                            headerLeft: () => {
                                return headerLogoSmall(navigation);
                            },
                            headerRight: () => {
                                return loginButton(navigation);
                            },
                        })}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={({ navigation }) => ({
                            title: "",
                            headerLeft: () => {
                                return headerLogoSmall(navigation);
                            },
                        })}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                        options={({ navigation }) => ({
                            title: "",
                            headerLeft: () => {
                                return headerLogoSmall(navigation);
                            },
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        elevation: 0,
        borderBottomWidth: 0,
    }
});