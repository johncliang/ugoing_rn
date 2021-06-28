import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import { State } from "react-native-gesture-handler";
import { GlobalStyles } from "../styles/GlobalStyles";

const STATES = {
    NAME: 0,
    TIME: 1,
    PLACE: 2,
    FINISH: 3,
};

export const CreateEvent = ({ navigation }) => {
    const [eventName, setEventName] = useState("");
    const [eventDetails, setEventDetails] = useState("");
    const [arrivalInstructions, setArrivalInstructions] = useState("");

    const [status, setStatus] = useState({
        state: STATES.NAME,
    });

    function buttonText() {
        console.log(status);
        switch (status.state) {
            case STATES.NAME:
                return "Next";
            case STATES.TIME:
                return "Keep Going";
            case STATES.PLACE:
                return "Almost There";
            case STATES.FINISH:
                return "Submit";
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                {status.state == STATES.NAME && (
                    <Text style={GlobalStyles.subheaderText}>The Basics ✏️</Text>
                
                    <View style={styles.infoSection}>
                        <Text style={GlobalStyles.subheaderText}>
                            Event Name
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventName}
                            value={eventName}
                            placeholder="e.g. John's Surprise Birthday Party"
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Event Description
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventDetails}
                            value={eventDetails}
                            placeholder="Enter your event details here!"
                        />
                    </View>
                )}
                {status.state > STATES.NAME && (
                    <Text style={GlobalStyles.subheaderText}>The When 🕐</Text>
                )}
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity
                    style={GlobalStyles.submitButton}
                    onPress={() => {
                        setStatus({ state: status.state + 1 });
                    }}
                >
                    <Text style={GlobalStyles.buttonText}>{buttonText()}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    infoSection: {
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 7,
        marginHorizontal: 20,
        paddingVertical: 15,
    },
    topSection: {
        flex: 1,
    },
    bottomSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
