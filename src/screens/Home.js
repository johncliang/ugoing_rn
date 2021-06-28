import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={GlobalStyles.topSection}>
                <View style={styles.titleSection}>
                    <Text style={[GlobalStyles.headerText, { color: "black" }]}>
                        ...U Going?
                    </Text>
                    <Text
                        style={[
                            GlobalStyles.subheaderText,
                            { paddingVertical: 15, color: "black" },
                        ]}
                    >
                        Share events with a single link
                    </Text>
                </View>
            </View>
            <View style={GlobalStyles.bottomSection}>
                <TouchableOpacity
                    style={GlobalStyles.submitButton}
                    onPress={() => {
                        console.log(navigation);
                        navigation.navigate("Create");
                    }}
                >
                    <Text style={GlobalStyles.buttonText}>Create Event</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "rgba(230, 149, 151, 0.5)",
    },
    titleSection: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    createSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
