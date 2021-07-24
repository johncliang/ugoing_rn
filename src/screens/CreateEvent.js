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

import { ProgressBar } from 'react-native-paper';

import moment from "moment";

import { fs } from "../Firebase/firebase";

import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const place_id = 'AIzaSyAn4ES_5Lu5aTaEv1nfi6T9nhJgKfNA7nw';


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

    //const [mapsLoading] = useGoogleMapsApi({ library: "places" });

    useEffect(() => {
        let newSectionTitles = [];
        for (let i = 0; i <= status.state; i++) {
            let newSection = { id: i, title: getSectionTitle(i) };
            newSectionTitles.push(newSection);
        }
        setSectionTitles((sectionTitles) => newSectionTitles);
    }, [status]);

    function getSectionTitle(section) {
        switch (section) {
            case STATES.NAME:
                return eventName != "" ? eventName : "What ✏️";
            case STATES.TIME:
                return "When 🕐";
            case STATES.PLACE:
                return "Where 🌎";
            case STATES.PEOPLE:
                return "Who 📞";
        }
    }

    const showProgressBar = () => {
        var progress = status.state / 4;
        return ( 
            <ProgressBar progress={progress} color={"black"} style={{marginHorizontal: 20, height: 3}} />
        );
    }

    const getMinimizedSection = ({ item }) => {
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

    // TODO: Pass in optional user field to tether events to a uid
    function submitData() {
        let eventData = {
            eventName: eventName,
            eventDetails: eventDetails,
            startDate: startDate.format("M/D/YYYY").toString(),
            endDate: endDate.format("M/D/YYYY").toString(),
            startTime: startTime.format("h:mm").toString(),
            endTime: endTime.format("h:mm").toString(),
            eventLocation: eventLocation,
            arrivalInstructions: arrivalInstructions,
            phoneNumber: phoneNumber,
            organizerName: organizerName,
        };

        fs.collection("events").add(eventData).then((value) => {
            console.log(value.id);
            navigation.navigate("Publish", {uid: value.id});
        });
    }


    const getCurrentSection = () => {
        switch (status.state) {
            case STATES.NAME:
                return (
                    <View style={GlobalStyles.infoSectionFilled}>
                        <Text style={GlobalStyles.subheaderText}>
                            Event Name{"\ "}
                            <Text style={{color: 'red'}}>
                                 *
                            </Text>
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventName}
                            value={eventName}
                            placeholder="e.g. John's Surprise Birthday Party"
                            autoCompleteType='off'
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Event Description
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventDetails}
                            value={eventDetails}
                            placeholder="Enter your event details here!"
                            autoCompleteType='off'
                        />
                    </View>
                );
            case STATES.TIME:
                return (
                    <View style={GlobalStyles.infoSectionFilled}>
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
                    <View style={GlobalStyles.infoSectionFilled}>
                        <Text style={GlobalStyles.subheaderText}>Place</Text>
                        {/* <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventLocation}
                            value={eventLocation}
                            placeholder="e.g. 100 Moffett Blvd"
                        /> */}
                        {/* {!loading ? <PlacesAutocomplete /> : null} */}
                        <Text style={GlobalStyles.subheaderText}>
                            Instructions
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setArrivalInstructions}
                            value={arrivalInstructions}
                            placeholder="There's guest parking in Lot B!"
                            autoCompleteType='off'
                        />
                    </View>
                );
            case STATES.PEOPLE:
                return (
                    <View style={GlobalStyles.infoSectionFilled}>
                        <Text style={GlobalStyles.subheaderText}>
                            Event Creator
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setOrganizerName}
                            value={organizerName}
                            placeholder="Joe Shmoe"
                            autoCompleteType='name'
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Phone Number
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="678-999-8212"
                            autoCompleteType='tel'
                        />
                    </View>
                );
            default:
                return <View></View>;
        }
    };

    function buttonText() {
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
            {showProgressBar()}
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
