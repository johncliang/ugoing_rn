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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from "../Firebase/context";
import { fb, db } from "../Firebase/firebase";

import { HomeScreen } from "../screens/Home";
import { CreateEvent } from "../screens/CreateEvent";
import { LoginScreen } from "../screens/Login";
import { SignupScreen } from "../screens/Signup";
import { PublishPost } from "../screens/PublishPost";
import { Tabs } from "antd";



const isWeb = Platform.OS === "web";

const Tab = createBottomTabNavigator();

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
            Create: "create",
            Login: "login",
            Signup: "signup",
        },
    };

    const linking = {
        prefixes: ["http://ugoing.us", "ugoing://"],
        config,
    };
    return (
        <AuthContext.Provider value={userProvider}>
            <NavigationContainer linking={linking}>
                <Stack.Navigator initialRouteName="Home" headerMode='screen'>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        style={styles.containerStyle}
                        options={({ navigation }) => ({
                            title: "",
                            headerTitleAlign: "center",
                            headerLeft: () => null,
                            headerTitle: () => {
                                return headerLogo(navigation, true);
                            },
                            headerStyle: styles.headerStyle
                            // headerRight: () => {
                            //     return loginButton(navigation);
                            // },
                        })}
                    />

                    <Stack.Screen
                        name="Create"
                        component={CreateEvent}
                        headerStyle={styles.containerStyle}
                        options={({ navigation }) => ({
                            title: "",
                            headerTitleAlign: "center",
                            headerLeft: () => null,
                            headerTitle: () => {
                                return headerLogo(navigation, false);
                            },
                            headerStyle: [styles.headerStyle, styles.headerSmall]
                                
                            // headerRight: () => {
                            //     return loginButton(navigation);
                            // },
                        })}
                    />
                    <Stack.Screen
                        name="Publish"
                        component={PublishPost}
                        initialParams={{ uid: "" }}
                        options={({ navigation }) => ({
                            title: "",
                            headerTitleAlign: "center",
                            headerLeft: () => null,
                            headerTitle: () => {
                                return headerLogo(navigation, false);
                            },
                            headerStyle: [styles.headerStyle, styles.headerSmall]
                                
                            // headerRight: () => {
                            //     return loginButton(navigation);
                            // },
                        })}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={({ navigation }) => ({
                            title: "",
                            headerTitleAlign: "center",
                            headerLeft: () => null,
                            headerTitle: () => {
                                return headerLogo(navigation, false);
                            },
                            headerStyle: [styles.headerStyle, styles.headerSmall]
                                
                            // headerRight: () => {
                            //     return loginButton(navigation);
                            // },
                        })}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                        options={({ navigation }) => ({
                            title: "",
                            headerTitleAlign: "center",
                            headerLeft: () => null,
                            headerTitle: () => {
                                return headerLogo(navigation, false);
                            },
                            headerStyle: [styles.headerStyle, styles.headerSmall]
                                
                            // headerRight: () => {
                            //     return loginButton(navigation);
                            // },
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
        
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        zIndex: 3,
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        elevation: 0,
        borderBottomWidth: 0,
    },

    headerSmall: {
        height: 50
    },
    footerTextStyle: {
        fontFamily: "SFPro",
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 18,
    },
    containerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    }
});
