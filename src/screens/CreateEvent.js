import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
    Switch,
} from "react-native";
import { GlobalColors, GlobalStyles } from "../styles/GlobalStyles";
import "../styles/datePicker.css";

import { DatePicker, TimePicker, Space } from "antd";
import "antd/dist/antd.css";

import moment from "moment";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { fs } from "../Firebase/firebase";

const STATES = {
    NAME: 0,
    TIME: 1,
    PLACE: 2,
    PEOPLE: 3,
    FINISH: 4,
};

export const CreateEvent = ({ navigation }) => {
    const [eventName, setEventName] = useState("");
    const [eventDetails, setEventDetails] = useState("");

    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment());

    const [startTime, setStartTime] = useState(
        moment().startOf("day").add(10, "hours")
    );

    const [showEndTime, setShowEndTime] = useState(true);
    const [endTime, setEndTime] = useState(
        moment().startOf("day").add(11, "hours")
    );

    // TODO: Change to be based on position / Google Maps
    const [eventLocation, setEventLocation] = useState("");
    const [arrivalInstructions, setArrivalInstructions] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [organizerName, setOrganizerName] = useState("");

    const [sectionTitles, setSectionTitles] = useState([]);
    const [status, setStatus] = useState({
        state: STATES.PLACE,
    });
    const [errorStatus, setErrorStatus] = useState("");

    useEffect(() => {
        let newSectionTitles = [];
        for (let i = 0; i <= status.state; i++) {
            let newSection = { id: i, title: getSectionTitle(i) };
            newSectionTitles.push(newSection);
        }
        setSectionTitles((sectionTitles) => newSectionTitles);
        console.log(sectionTitles);
    }, [status]);

    function getSectionTitle(section) {
        switch (section) {
            case STATES.NAME:
                return eventName != "" ? eventName : "The Basics ✏️";
            case STATES.TIME:
                return "The When 🕐";
            case STATES.PLACE:
                return "The Where 🌎";
            case STATES.PEOPLE:
                return "The Who 📞";
        }
    }

    const getMinimizedSection = ({ item }) => {
        console.log(getSectionTitle(item.id));
        return (
            <View style={styles.minimizedSection}>
                <Text style={GlobalStyles.subheaderText}>
                    {getSectionTitle(item.id)}
                </Text>
                {item.id < status.state && (
                    <TouchableOpacity
                        style={{
                            paddingRight: 20,
                            justifyContent: "center",
                        }}
                        onPress={() => {
                            setErrorStatus("");
                            setStatus({ state: item.id });
                        }}
                    >
                        <Text
                            style={{
                                textDecorationLine: "underline",
                                fontSize: 15,
                            }}
                        >
                            Edit
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    };

    const onChangeDate = (date, isStartTime) => {
        if (isStartTime) {
            setStartDate(date);
            console.log(endDate.isBefore(startDate));
            console.log(endDate.isAfter(startDate));
            if (endDate.isBefore(date)) {
                setEndDate(date);
            }
        } else setEndDate(date);
    };

    function disabledDates(current) {
        return current < startDate;
    }

    function incrementStatus() {
        setErrorStatus("");
        setStatus({ state: status.state + 1 });
    }

    function validateSection() {
        switch (status.state) {
            case STATES.NAME:
                if (eventName == "")
                    setErrorStatus("Please enter a valid event name!");
                else {
                    incrementStatus();
                }
                return;
            case STATES.TIME:
                incrementStatus();
                return;
            case STATES.PLACE:
                incrementStatus();
                return;
            case STATES.PEOPLE:
                submitData();
                return;
        }
    }

    function submitData() {
        let eventData = {
            eventName: eventName,
            eventDetails: eventDetails,
            startDate: startDate.format("D, M, YYYY").toString(),
            endDate: endDate.format("D, M, YYYY").toString(),
            startTime: startTime.format("h:m").toString(),
            endTime: endTime.format("h:m").toString(),
            eventLocation: eventLocation,
            arrivalInstructions: arrivalInstructions,
            phoneNumber: phoneNumber,
            organizerName: organizerName,
        };

        console.log(submitData);

        // fs.collection("alerts").add(eventData);
    }

    const getCurrentSection = () => {
        switch (status.state) {
            case STATES.NAME:
                return (
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
                );
            case STATES.TIME:
                return (
                    <View style={styles.infoSection}>
                        <View style={{ alignItems: "center" }}></View>
                        <Text style={GlobalStyles.subheaderText}>
                            Start Time
                        </Text>
                        <View style={GlobalStyles.timeButton}>
                            <DatePicker
                                value={startDate}
                                onChange={(dates) => onChangeDate(dates, true)}
                            />
                            <TimePicker
                                format={"HH:mm"}
                                minuteStep={5}
                                use12Hours={true}
                                showNow={false}
                                value={startTime}
                                onChange={setStartTime}
                            />
                        </View>

                        <View style={styles.endTimeSection}>
                            <Text style={GlobalStyles.subheaderText}>
                                End Time
                            </Text>
                            <Switch
                                value={showEndTime}
                                onValueChange={setShowEndTime}
                                trackColor={{
                                    false: "#767577",
                                    true: GlobalColors.shamrock,
                                }}
                                activeThumbColor={GlobalColors.shamrock}
                            ></Switch>
                        </View>
                        {showEndTime && (
                            <View style={GlobalStyles.timeButton}>
                                <DatePicker
                                    value={endDate}
                                    onChange={(dates) =>
                                        onChangeDate(dates, false)
                                    }
                                    disabledDate={disabledDates}
                                />
                                <TimePicker
                                    format={"HH:mm"}
                                    minuteStep={5}
                                    use12Hours={true}
                                    showNow={false}
                                    value={endTime}
                                    onChange={setEndTime}
                                />
                            </View>
                        )}
                    </View>
                );
            case STATES.PLACE:
                return (
                    <View style={styles.infoSection}>
                        <Text style={GlobalStyles.subheaderText}>Place</Text>
                        {/* <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventLocation}
                            value={eventLocation}
                            placeholder="e.g. 100 Moffett Blvd"
                        /> */}
                        <GooglePlacesAutocomplete
                            placeholder="e.g. 100 Moffett Blvd"
                            placeholderTextColor="#333"
                            minLength={1}
                            currentLocation="true"
                            numberOfLines={3}
                            onPress={(data, details = null) => {
                                console.log(data, details);
                            }}
                            query={{
                                key: "AIzaSyAn4ES_5Lu5aTaEv1nfi6T9nhJgKfNA7nw",
                                language: "en",
                            }}
                            textInputProps={{
                                autoCapitalize: "none",
                                autoCorrect: false,
                            }}
                            fetchDetails={true}
                            returnKeyType={"search"} // Can be left out for default return key
                            styles={{
                                container: {
                                    flex: 1,
                                    position: "absolute",
                                    width: "100%",
                                },
                                textInputContainer: {
                                    backgroundColor: "transparent",
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
                                    shadowColor: "#000",
                                    shadowOpacity: 0.1,
                                    shadowOffset: { x: 0, y: 0 },
                                    shadowRadius: 15,
                                    borderWidth: 1,
                                    borderColor: "#DDD",
                                    borderRadius: 7,
                                    fontSize: 18,
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
                                    shadowOffset: { x: 0, y: 0 },
                                    shadowRadius: 15,
                                },
                                description: {
                                    fontSize: 16,
                                },
                                row: {
                                    padding: 10,
                                    height: 40,
                                },
                            }}
                            debounce={300}
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Instructions
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setArrivalInstructions}
                            value={arrivalInstructions}
                            placeholder="There's guest parking in Lot B!"
                        />
                    </View>
                );
            case STATES.PEOPLE:
                return (
                    <View style={styles.infoSection}>
                        <Text style={GlobalStyles.subheaderText}>
                            Event Creator
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setOrganizerName}
                            value={organizerName}
                            placeholder="Joe Shmoe"
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Phone Number
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="678-999-8212"
                        />
                    </View>
                );
            default:
                return <View></View>;
        }
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
            case STATES.PEOPLE:
                return "Submit!";
            default:
                return "Next";
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View>
                    <FlatList
                        data={sectionTitles}
                        renderItem={getMinimizedSection}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    {getCurrentSection()}
                </View>
            </View>

            <View style={GlobalStyles.bottomSection}>
                <TouchableOpacity
                    style={GlobalStyles.submitButton}
                    onPress={validateSection}
                >
                    <Text style={GlobalStyles.buttonText}>{buttonText()}</Text>
                </TouchableOpacity>
                <Text style={GlobalStyles.errorText}>{errorStatus}</Text>
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
    minimizedSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    endTimeSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 20,
    },
});
