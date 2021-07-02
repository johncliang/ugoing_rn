import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";
import { fb, fs } from "../Firebase/firebase";
import { GlobalStyles } from "../styles/GlobalStyles";

export const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function handleSignup() {
        fb.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const currentUser = fb.auth().currentUser;

                fs.collection("users")
                    .doc(currentUser.uid)
                    .set({
                        email: email,
                        name: name,
                    })
                    .catch(function (error) {
                        console.log(
                            "An error occurred when attempting to store user info to database."
                        );
                        console.log(error.message);
                    });
                navigation.navigate("Home");
            })
            .catch(function (error) {
                console.log(
                    "An error occurred when attempting to register user to firebase."
                );
                console.log(error.message);
                setErrorMsg(error.message);
            });
    }

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.topSection}>
                <Text style={GlobalStyles.headerText}>Register here</Text>
            </View>
            <View style={styles.middleSection}>
                <View style={styles.infoSection}>
                    <Text style={GlobalStyles.subheaderText_smaller}>
                        What is your email address? 📨
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder="Email"
                        autoCapitalize="none"
                    />
                    <Text style={GlobalStyles.subheaderText_smaller}>
                        Enter your full name 👀
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        value={email}
                        onChangeText={(name) => setName(name)}
                        placeholder="Kenta"
                        autoCapitalize="none"
                    />

                    <Text style={GlobalStyles.subheaderText_smaller}>
                        Choose a password with at least 8 characters 🔒
                    </Text>

                    <TextInput
                        style={GlobalStyles.textInput}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder="Password"
                        secureTextEntry={true}
                        textContentType={"oneTimeCode"}
                    />
                </View>
                <Text style={GlobalStyles.errorText}>{errorMsg}</Text>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity
                    style={GlobalStyles.submitButton}
                    onPress={handleSignup}
                >
                    <Text style={GlobalStyles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setErrorMsg("");
                        navigation.navigate("Login");
                    }}
                >
                    <Text>Already have an account? Login here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topSection: {
        flex: 1,
        justifyContent: "center",
    },
    middleSection: {
        flex: 3,
    },
    bottomSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    infoSection: {
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 7,
        marginHorizontal: 20,
        paddingVertical: 15,
    },
});
