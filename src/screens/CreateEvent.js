import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
    //Switch,
} from "react-native";
import Switch from "react-ios-switch";
import { GlobalColors, GlobalStyles } from "../styles/GlobalStyles";
import "../styles/datePicker.css";

import { DatePicker, TimePicker, Space } from "antd";
import "antd/dist/antd.css";

import { ProgressBar } from "react-native-paper";

import moment from "moment";
import { fs } from "../Firebase/firebase";

import AutocompleteSearch from "../components/AutocompleteSearch";

import Flatpickr from "react-flatpickr";
import { BrowserView, MobileView } from "react-device-detect";

const STATES = {
    NAME: 0,
    TIME: 1,
    PLACE: 2,
    PEOPLE: 3,
    FINISH: 4,
};

export const CreateEvent = ({ navigation }) => {
    const [status, setStatus] = useState({
        state: STATES.NAME,
    });

    const [eventName, setEventName] = useState("");
    const [eventDetails, setEventDetails] = useState("");

    const [startDate, setStartDate] = useState(
        //moment().startOf("day").add(10, "hours")
        moment().startOf("hour").add(1, "hours")
    );
    const [endDate, setEndDate] = useState(
        //moment().startOf("day").add(11, "hours")
        moment().startOf("hour").add(2, "hours")
    );

    const [dateEntryError, setDateEntryError] = useState("");

    const [showEndTime, setShowEndTime] = useState(true);

    // TODO: Change to be based on position / Google Maps
    const [eventLocation, setEventLocation] = useState("");
    const [arrivalInstructions, setArrivalInstructions] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [organizerName, setOrganizerName] = useState("");

    const [sectionTitles, setSectionTitles] = useState([]);

    const [errorStatus, setErrorStatus] = useState("");

    const datepickerRef = React.createRef();

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
            <ProgressBar
                progress={progress}
                color={"black"}
                style={{ marginHorizontal: 10 }}
            />
        );
    };

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
        console.log(date);
        if (isStartTime) {
            setStartDate(date);
            /*if (endDate.isBefore(date)) {
                setEndDate(date);
            }*/
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
                if (eventName === "")
                    setErrorStatus("Please enter a valid event name!");
                else incrementStatus();
                return;
            case STATES.TIME:
                if (startDate === null)
                    setErrorStatus("Please input a valid start date!");
                else if (endDate.isBefore(startDate))
                    setErrorStatus(
                        "Cannot have an event end before the start time!"
                    );
                else if (startDate.isBefore(moment()))
                    setErrorStatus("Cannot set events in the past");
                else incrementStatus();
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
            startDate: startDate.format("M/D/YYYY, h:mm a").toString(),
            endDate: endDate.format("M/D/YYYY, h:mm a").toString(),
            eventLocation: eventLocation,
            arrivalInstructions: arrivalInstructions,
            phoneNumber: phoneNumber,
            organizerName: organizerName,
        };

        console.log(eventData);

        fs.collection("events")
            .add(eventData)
            .then((value) => {
                console.log(value.id);
                navigation.navigate("Publish", {
                    eventID: value.id,
                    fromCreate: true,
                });
            });
    }

    const getCurrentSection = () => {
        //console.log(startDate.format("YYYY-MM-DD HH:mm"));
        switch (status.state) {
            case STATES.NAME:
                return (
                    <View style={GlobalStyles.infoSectionFilled}>
                        <Text style={GlobalStyles.subheaderText}>
                            Event Name <Text style={{ color: "red" }}>*</Text>
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventName}
                            value={eventName}
                            placeholder="e.g. John's Surprise Birthday Party"
                            autoCompleteType="off"
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Event Description
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setEventDetails}
                            value={eventDetails}
                            placeholder="Enter your event details here!"
                            autoCompleteType="off"
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
                            <BrowserView>
                                <DatePicker
                                    value={startDate}
                                    onChange={(date) =>
                                        onChangeDate(date, true)
                                    }
                                    inputReadOnly={true}
                                />
                                <TimePicker
                                    format={"HH:mm"}
                                    minuteStep={5}
                                    use12Hours={true}
                                    showNow={false}
                                    value={startDate}
                                    onChange={(date) =>
                                        onChangeDate(date, true)
                                    }
                                    inputReadOnly={true}
                                />
                            </BrowserView>
                            <MobileView>
                                <Flatpickr
                                    options={{
                                        enableTime: true,
                                        time_24hr: false,
                                        defaultDate:
                                            startDate.format(
                                                "YYYY-MM-DD HH:mm"
                                            ),
                                        minuteIncrement: 10,
                                        //minDate: moment().format('YYYY-MM-DD HH:mm'),
                                    }}
                                    minuteStep={5}
                                    //enableTime={true}
                                    /*onChange={(dates) =>
                                            onChangeDate(moment(dates,"ddd MMM DD YYYY HH:mm:ss ZZ "), true)
                                        }*/
                                    onChange={(dstr, dobjs, fp) =>
                                        setTimeout(function () {
                                            var i = fp.latestSelectedDateObj;
                                            const d = i ? i : new Date();
                                            const mins = d.getMinutes();

                                            if (mins % 5)
                                                d.setMinutes(
                                                    5 *
                                                        Math.round(
                                                            d.getMinutes() / 5
                                                        )
                                                );

                                            onChangeDate(
                                                moment(
                                                    d,
                                                    "ddd MMM DD YYYY HH:mm:ss ZZ "
                                                ),
                                                true
                                            );
                                        }, 1000)
                                    }

                                    //value={}
                                    //onChange={(dates) => onChangeDate(dates, true)}
                                ></Flatpickr>
                            </MobileView>
                        </View>

                        <View style={styles.endTimeSection}>
                            <Text style={GlobalStyles.subheaderText}>
                                End Time
                            </Text>
                            <Switch
                                /*value={showEndTime}
                                onValueChange={setShowEndTime}
                                trackColor={{
                                    false: "#767577",
                                    true: GlobalColors.shamrock,
                                }}
                                activeThumbColor={GlobalColors.shamrock}*/
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
                                <BrowserView>
                                    <DatePicker
                                        value={endDate}
                                        onChange={(date) =>
                                            onChangeDate(date, false)
                                        }
                                        disabledDate={disabledDates}
                                        inputReadOnly={true}
                                    />
                                    <TimePicker
                                        format={"HH:mm"}
                                        minuteStep={5}
                                        use12Hours={true}
                                        showNow={false}
                                        value={endDate}
                                        onChange={(date) =>
                                            onChangeDate(date, false)
                                        }
                                        inputReadOnly={true}
                                    />
                                </BrowserView>
                                <MobileView>
                                    <Flatpickr
                                        class="flatpickr-input"
                                        //onChange={(dates) => onChangeDate(dates, true)}
                                        options={{
                                            time_24hr: false,
                                            enableTime: true,
                                            defaultDate:
                                                endDate.format(
                                                    "YYYY-MM-DD HH:mm"
                                                ),
                                            //minDate: moment().format('YYYY-MM-DD HH:mm')
                                        }}
                                        onChange={(dstr, dobjs, fp) =>
                                            setTimeout(function () {
                                                var i =
                                                    fp.latestSelectedDateObj;
                                                const d = i ? i : new Date();
                                                const mins = d.getMinutes();

                                                if (mins % 5)
                                                    d.setMinutes(
                                                        5 *
                                                            Math.round(
                                                                d.getMinutes() /
                                                                    5
                                                            )
                                                    );

                                                onChangeDate(
                                                    moment(
                                                        d,
                                                        "ddd MMM DD YYYY HH:mm:ss ZZ "
                                                    ),
                                                    false
                                                );
                                            }, 1000)
                                        }
                                    />
                                </MobileView>
                            </View>
                        )}
                    </View>
                );
            case STATES.PLACE:
                return (
                    <View style={GlobalStyles.infoSectionFilled}>
                        <Text style={GlobalStyles.subheaderText}>Place</Text>
                        <AutocompleteSearch
                            onChangeOutputText={(text) => {
                                setEventLocation(text);
                            }}
                            value={eventLocation}
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Instructions
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setArrivalInstructions}
                            value={arrivalInstructions}
                            placeholder="There's guest parking in Lot B!"
                            autoCompleteType="off"
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
                            autoCompleteType="name"
                        />
                        <Text style={GlobalStyles.subheaderText}>
                            Phone Number
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="678-999-8212"
                            autoCompleteType="tel"
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
        <View style={GlobalStyles.container}>
            {showProgressBar()}
            <View style={GlobalStyles.topSection}>
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
