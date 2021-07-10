import React, { useState, useContext } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    Button,
} from "react-native";
import { fb } from "../Firebase/firebase";
import { GlobalStyles } from "../styles/GlobalStyles";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    //const { signIn } = useContext(AuthContext);

    function handleLogin(navigation) {
        console.log(email);
        console.log(password);
        fb.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                console.log(
                    "An error occurred when attempting to register user to firebase."
                );
                console.log(error.message);
                setErrorMsg("Login error:\n" + error.message);
            });
        navigation.navigate("Home");
    }

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.topSection}>
                <Text style={GlobalStyles.headerText}>Login here</Text>
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
                        What is your password? 🔒
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
                    onPress={() => handleLogin(navigation)}
                >
                    <Text style={GlobalStyles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setErrorMsg("");
                        navigation.navigate("Signup");
                    }}
                    title="Signup"
                >
                    <Text>
                        Don't have an account yet? Click here to sign up!{" "}
                    </Text>
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
