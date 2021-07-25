import React, { useState, useMemo, useEffect } from "react";
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../Firebase/context";
import { fb, db } from "../Firebase/firebase";

import { HomeScreen } from "../screens/Home";
import { CreateEvent } from "../screens/CreateEvent";
import { LoginScreen } from "../screens/Login";
import { SignupScreen } from "../screens/Signup";
import { PublishPost } from "../screens/PublishPost";
import { PublishedEvent } from "../screens/PublishedEvent";

const isWeb = Platform.OS === "web";

function headerLogo(navigation, bigLogo) {
    return (
        <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => {
                navigation.navigate("Home");
            }}
        >
            <Image
                style={
                    bigLogo
                        ? { width: 154, height: 50 }
                        : { width: 74, height: 24 }
                }
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

    const config = {
        screens: {
            Home: {
                path: "",
            },
            Create: "create",
            Login: "login",
            Signup: "signup",
            Event: {
                path: "u/:eventID?",
                parse: {
                    eventID: (eventID) => `${eventID}`,
                },
            },
        },
    };

    const linking = {
        prefixes: ["http://ugoing.us", "https://ugoing.us", "ugoing://"],
        config,
    };
    return (
        <AuthContext.Provider value={userProvider}>
            <NavigationContainer linking={linking}>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={({ navigation }) => ({
                            title: "",
                            headerTitleAlign: "center",
                            headerLeft: () => null,
                            headerTitle: () => {
                                return headerLogo(navigation, true);
                            },
                            headerStyle: styles.headerStyle,
                            // headerRight: () => {
                            //     return loginButton(navigation);
                            // },
                        })}
                    />

                    <Stack.Screen
                        name="Create"
                        component={CreateEvent}
                        options={({ navigation }) => ({
                            title: "",
                            headerLeft: () => {
                                return headerLogo(navigation);
                            },
                            headerRight: () => {
                                return loginButton(navigation);
                            },
                        })}
                    />
                    <Stack.Screen
                        name="Publish"
                        component={PublishPost}
                        initialParams={{ uid: "" }}
                        options={({ navigation }) => ({
                            title: "",
                            headerLeft: () => {
                                return headerLogo(navigation);
                            },
                        })}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={({ navigation }) => ({
                            title: "",
                            headerLeft: () => {
                                return headerLogo(navigation);
                            },
                        })}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                        options={({ navigation }) => ({
                            title: "",
                            headerLeft: () => {
                                return headerLogo(navigation);
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
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        elevation: 0,
        borderBottomWidth: 0,
    },
});
