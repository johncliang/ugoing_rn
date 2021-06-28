import * as React from "react";
import { Image, TouchableOpacity, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { CreateEvent } from "../screens/CreateEvent";

export const AppNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "",
                        headerLeft: () => {
                            return (
                                <TouchableOpacity style={{ paddingLeft: 20 }}>
                                    <Image
                                        style={{ width: 150, height: 50 }}
                                        source={require("../assets/UGoing_Logo.png")}
                                    />
                                </TouchableOpacity>
                            );
                        },
                        headerRight: () => {
                            return (
                                <TouchableOpacity style={{ paddingRight: 20 }}>
                                    <Text
                                        style={{
                                            textDecorationLine: "underline",
                                            fontSize: 18,
                                        }}
                                    >
                                        Sign up
                                    </Text>
                                </TouchableOpacity>
                            );
                        },
                    }}
                />

                <Stack.Screen
                    name="Create"
                    component={CreateEvent}
                    options={{
                        title: "",
                        headerLeft: () => {
                            return (
                                <TouchableOpacity style={{ paddingLeft: 20 }}>
                                    <Image
                                        style={{ width: 150, height: 50 }}
                                        source={require("../assets/UGoing_Logo.png")}
                                    />
                                </TouchableOpacity>
                            );
                        },
                        headerRight: () => {
                            return (
                                <TouchableOpacity style={{ paddingRight: 20 }}>
                                    <Text
                                        style={{
                                            textDecorationLine: "underline",
                                            fontSize: 18,
                                        }}
                                    >
                                        Sign up
                                    </Text>
                                </TouchableOpacity>
                            );
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
