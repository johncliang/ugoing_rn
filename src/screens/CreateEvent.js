import React, { useState, useRef, useEffect } from "react";
import { Input } from 'react-native-elements';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Button
} from "react-native";
import { State } from "react-native-gesture-handler";
import { GlobalStyles } from "../styles/GlobalStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



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
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [destination, setDestination] = useState("");

    const [status, setStatus] = useState({
        state: STATES.NAME,
    });

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };





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
                    <View>
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
                            <GooglePlacesAutocomplete
                                placeholder = 'Where?'
                                placeholderTextColor = '#333'
                                minLength = {1}
                                currentLocation = "true"
                                numberOfLines = {3}


                                onPress = {(data, details = null) => {
                                    console.log(data, details);
                                }}
                                query = {{
                                    key: 'AIzaSyAn4ES_5Lu5aTaEv1nfi6T9nhJgKfNA7nw',
                                    language: 'en'
                                }}
                                textInputProps={{
                                    autoCapitalize: "none",
                                    autoCorrect: false
                                }}
                                fetchDetails = {true}
                                returnKeyType={'search'} // Can be left out for default return key 
                                styles = {{
                                    container: {
                                        flex: 1,
                                        position: "absolute",
                                        width: '100%',
                                    },
                                    textInputContainer: {
                                        backgroundColor: 'transparent',
                                        height: 54,
                                        marginTop: 250,
                                        marginHorizontal: 15,
                                        
                                    },
                                    textInput: {
                                        height: 54,
                                        margin: 0,
                                        borderRadius: 0,
                                        paddingVertical: 15,
                                        paddingHorizontal: 20,
                                        shadowColor: '#000',
                                        shadowOpacity: 0.1,
                                        shadowOffset: {x: 0, y: 0},
                                        shadowRadius: 15,
                                        borderWidth: 1,
                                        borderColor: '#DDD',
                                        borderRadius: 7,
                                        fontSize: 18
                                    },
                                    listView: {
                                        borderWidth: 1,
                                        borderColor: "#DDD",
                                        backgroundColor: "#FFF",
                                        marginHorizontal: 15,
                                        marginTop: 0,
                                        zIndex: 5,
                                        shadowColor: "#000",
                                        shadowOpacity: 0.1,
                                        shadowOffset: {x: 0, y: 0},
                                        shadowRadius: 15,
                                    },
                                    description: {
                                        fontSize: 16
                                    },
                                    row: {
                                        padding: 10,
                                        height: 40
                                    }
                                }}
                                debounce={300}
                            />
                        </View>
                            
                    </View>
                )}
                
                {status.state > STATES.NAME && (
                    
                    <View>
                        <Text style={GlobalStyles.subheaderText}>The When 🕐</Text>
                        <Button title="Show Date Picker" onPress={showDatePicker} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            display="inline"
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
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
