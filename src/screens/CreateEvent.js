import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import "../styles/datePicker.css";

import { DatePicker, TimePicker, Space } from "antd";
import "antd/dist/antd.css";

import moment from "moment";

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
        state: STATES.NAME,
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

    const onChangeDate = (dates, dateStrings) => {
        if (dates[0]) setStartDate(dates[0]);
        if (dates[1]) setEndDate(dates[1]);
        console.log(startDate);
        console.log(endDate);
    };

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
            case STATES.PLACE:
                incrementStatus();
            case STATES.PEOPLE:
        }
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
                        <View style={{ alignItems: "center" }}>
                            <Space align={"center"}>
                                <DatePicker.RangePicker
                                    allowEmpty={[false, true]}
                                    onCalendarChange={onChangeDate}
                                    value={[startDate, endDate]}
                                />
                            </Space>
                        </View>
                        <Text style={GlobalStyles.subheaderText}>
                            Start Time
                        </Text>
                        <View style={GlobalStyles.timeButton}>
                            <TimePicker
                                format={"HH:mm"}
                                minuteStep={5}
                                use12Hours={true}
                                showNow={false}
                                value={startTime}
                                onChange={setStartTime}
                            />
                        </View>

                        <Text style={GlobalStyles.subheaderText}>End Time</Text>
                        <View style={GlobalStyles.timeButton}>
                            <TimePicker
                                format={"HH:mm"}
                                minuteStep={5}
                                use12Hours={true}
                                showNow={false}
                                value={endTime}
                                onChange={setEndTime}
                            />
                        </View>
                    </View>
                );
            case STATES.PLACE:
                return (
                    <View style={styles.infoSection}>
                        <Text style={GlobalStyles.subheaderText}>Place</Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventLocation}
                            value={eventLocation}
                            placeholder="e.g. 100 Moffett Blvd"
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

            <View style={styles.bottomSection}>
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
    bottomSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    minimizedSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
