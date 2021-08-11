import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
    //Switch,
    Keyboard,
    TouchableWithoutFeedback,
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



import Switch from 'react-ios-switch';



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

    const [startPicker, setStartPicker] = useState(false);
    const [startDate, setStartDate] = useState(Date());
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

    function displayTime(timeState) {
        return timeState.format("hh:mm").toString() + 
            (parseInt(timeState.format("hh").toString(), 10) >= 12 ? "am" : "pm") + " " +
            timeState.format("MMMM D YYYY").toString()
    }

    function getDetails(section) {
        switch (section) {
            case STATES.NAME:
                return eventDetails != "" ? eventDetails : "";
            case STATES.TIME:
                return displayTime(startTime) + " to " + (showEndTime == true ? displayTime(endTime) : "");
            case STATES.PLACE:
                return arrivalInstructions;
            case STATES.PEOPLE:
                return organizerName + '\n' + phoneNumber;
        }
    }

    const showProgressBar = () => {
        var progress = status.state / 4;
        return ( 
            <ProgressBar progress={progress} color={"black"} style={{marginHorizontal: 20, height: 3}} />
        );
    }

    const [textAreaHeight, setTextAreaHeight] = useState(44);

    const getMinimizedSection = ({ item }) => {
        return (
            <View style={styles.minimizedContainer}>
                <View style={styles.minimizedSection}>
                    <Text style={[GlobalStyles.subheaderText, {fontSize: 18, paddingTop: 15, paddingBottom: 0}]}>
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
                                style={[GlobalStyles.bodyText, {
                                    textDecorationLine: "underline",
                                    fontSize: 15,
                                    fontWeight: '300',
                                    textAlign: 'right',
                                    paddingTop: 15,
                                }]}
                            >
                                edit
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.detailSection}>
                    {getDetails(item.id) != "" && (
                        <Text 
                            style={[GlobalStyles.detailText, {paddingHorizontal: 0, paddingTop: 10, paddingBottom: 15, flexWrap: 'wrap', flex: '1'}]}
                        >
                        {getDetails(item.id)}
                        </Text>
                    )}
                        
                    
                </View>
                
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
                            onChangeText={setEventDetails}
                            value={eventDetails}
                            placeholder="Enter your event details here!"
                            autoCompleteType='off'
                            style={[GlobalStyles.textInput, {height: textAreaHeight, overflow: 'hidden'}]}
                            multiline
                            onContentSizeChange={(e) => setTextAreaHeight(e.nativeEvent.contentSize.height)} 
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
                        <View style={[GlobalStyles.timeButton]}>
                            <DatePicker
                                value={startDate}
                                onChange={(dates) => onChangeDate(dates, true)}
                                inputReadOnly={true}
                            />
                            <TimePicker
                                format={"HH:mm"}
                                minuteStep={5}
                                use12Hours={true}
                                showNow={false}
                                value={startTime}
                                onChange={setStartTime}
                                inputReadOnly={true}
                            />
                                
                            
                        </View>

                        <View style={styles.endTimeSection}>
                            <Text style={GlobalStyles.subheaderText}>
                                End Time
                            </Text>
                            <Switch
                                checked={showEndTime}
                                onChange={setShowEndTime}
                                offColor="#767577"
                                onColor={GlobalColors.shamrock}
                                //ios_backgroundColor= "#ffffff"
                                //trackColor={{
                                    //false: ,
                                   // true: GlobalColors.shamrock,
                                //}}
                                //activeThumbColor={GlobalColors.shamrock}
                                style={GlobalStyles.toggleSwitch}
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
                                    inputReadOnly={true}
                                    
                                />
                                <TimePicker
                                    format={"HH:mm"}
                                    minuteStep={5}
                                    use12Hours={true}
                                    showNow={false}
                                    value={endTime}
                                    onChange={setEndTime}
                                    inputReadOnly={true}
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
                            onChangeText={setArrivalInstructions}
                            value={arrivalInstructions}
                            placeholder="There's guest parking in Lot B!"
                            autoCompleteType='off'
                            style={[GlobalStyles.textInput, {height: textAreaHeight, overflow: 'hidden'}]}
                            multiline
                            onContentSizeChange={(e) => setTextAreaHeight(e.nativeEvent.contentSize.height)} 
                        />
                    </View>
                );
            case STATES.PEOPLE:
                return (
                    <View style={GlobalStyles.infoSectionFilled}>
                        <Text style={GlobalStyles.subheaderText}>
                            Phone Number
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="678-999-8212"
                            autoCompleteType='tel'
                            keyboardType='phone-pad'
                            maxLength={20}
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Who's Number Is This?
                        </Text>
                        <TextInput
                            onChangeText={setOrganizerName}
                            value={organizerName}
                            placeholder="Joe Shmoe"
                            autoCompleteType='name'
                            style={[GlobalStyles.textInput, {height: textAreaHeight, overflow: 'hidden'}]}
                            multiline
                            onContentSizeChange={(e) => setTextAreaHeight(e.nativeEvent.contentSize.height)} 
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
                <Text style={[GlobalStyles.errorText, {marginTop: 10}]}>{errorStatus}</Text>
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
    minimizedContainer: {
        flex: 1,
        flexDirection: "column",
        //alignItems: "flex-start",
    },
    minimizedSection: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detailSection: {
        paddingHorizontal: 20
    },
    endTimeSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 20,
    },
});
