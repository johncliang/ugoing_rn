import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Clipboard,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { fs } from "../Firebase/firebase";
import { Ionicons } from "@expo/vector-icons";
const ics = require("ics");
// The below import isn't working for me -- setString fails
//import Clipboard from "@react-native-community/clipboard";
import { ShareComponent } from "../components/ShareComponent";
import { PublishedEvent } from "./PublishedEvent";

// route.params - eventID to event
export const PublishPost = ({ route, navigation }) => {
    //console.log("passed info is " + JSON.stringify(route.params));
    const [eventDetails, setEventDetails] = useState({});
    const [url, setURL] = useState("");

    const { eventID, fromCreate } = route.params;

    useEffect(() => {
        if (eventID == "") {
            console.log("route params not found");
            return;
        }

        console.log("Coming from created -> " + fromCreate);
        var docRef = fs.collection("events").doc(eventID);
        //var docRef = fs.collection('events').doc("cks0i7SlWYGD8Vy4Cr8z");

        docRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setEventDetails(doc.data());
                    setURL(`ugoing.us/u/${eventID}`);
                } else {
                    console.log(
                        "ERROR: Document with eventID " +
                            route.params +
                            " not found!"
                    );
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [route.params?.eventID]);

    const shareCalendar = () => {
        console.log("clicked");
        console.log(eventDetails);

        var startDate = new Date(Date.parse(eventDetails.startDate));
        var start = [
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDay(),
            startDate.getHours(),
            startDate.getMinutes(),
        ];
        console.log(start);

        // let event = {
        //     start: start,
        // };
        const event = {
            start: [2018, 5, 30, 6, 30],
            duration: { hours: 6, minutes: 30 },
            title: "Bolder Boulder",
            description: "Annual 10-kilometer run in Boulder, Colorado",
            location: "Folsom Field, University of Colorado (finish line)",
            url: "http://www.bolderboulder.com/",
            geo: { lat: 40.0095, lon: 105.2669 },
            categories: ["10k races", "Memorial Day Weekend", "Boulder CO"],
            status: "CONFIRMED",
            busyStatus: "BUSY",
            organizer: { name: "Admin", email: "Race@BolderBOULDER.com" },
            attendees: [
                {
                    name: "Adam Gibbons",
                    email: "adam@example.com",
                    rsvp: true,
                    partstat: "ACCEPTED",
                    role: "REQ-PARTICIPANT",
                },
                {
                    name: "Brittany Seaton",
                    email: "brittany@example2.org",
                    dir: "https://linkedin.com/in/brittanyseaton",
                    role: "OPT-PARTICIPANT",
                },
            ],
        };

        ics.createEvent(event, (error, value) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(value);
        });
    };

    const getTitleSection = () => {
        // check to make sure firebase data exists
        if (!eventDetails || !eventDetails.eventName) {
            return <View></View>;
        }

        return (
            <View style={styles.eventTitleSection}>
                <Text style={GlobalStyles.subheaderText}>
                    {eventDetails.eventName}
                </Text>

                <TouchableOpacity
                    style={{
                        paddingRight: 20,
                        justifyContent: "center",
                    }}
                    onPress={() => {
                        // navigate to actual event
                    }}
                >
                    <Text
                        style={{
                            textDecorationLine: "underline",
                            fontSize: 15,
                        }}
                    >
                        view event
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const getCongratsSection = () => {
        return (
            <View style={GlobalStyles.infoSection}>
                <Text style={GlobalStyles.subheaderText_smaller}>
                    Congratulations 👏🎉
                </Text>
                <Text style={GlobalStyles.bodyText}>
                    You’ve just published{" "}
                    <Text
                        style={[
                            GlobalStyles.bodyText,
                            {
                                fontWeight: "bold",
                                paddingLeft: 0,
                            },
                        ]}
                    >
                        {eventDetails.eventName}!
                    </Text>
                </Text>
                <Text style={GlobalStyles.bodyText}>
                    Click below to share details with friends:{" "}
                </Text>
            </View>
        );
    };

    const getShareSection = () => {
        return (
            <View>
                <View
                    style={[
                        GlobalStyles.infoSectionFilledBlue,
                        { flexDirection: "row" },
                    ]}
                >
                    <View
                        style={{
                            width: "75%",
                            borderColor: GlobalColors.blueOutline,
                            borderRightWidth: 1,
                        }}
                    >
                        <Text style={GlobalStyles.subheaderText_smaller}>
                            Add to Calendar
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity onPress={shareCalendar}>
                            <Ionicons
                                name="add-outline"
                                size={32}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={GlobalStyles.subheaderText}>Share It 📤</Text>
                <View
                    style={[
                        GlobalStyles.infoSectionFilledGreen,
                        { flexDirection: "row" },
                    ]}
                >
                    <View
                        style={{
                            width: "75%",
                            borderColor: GlobalColors.greenOutline,
                            borderRightWidth: 1,
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={[
                                GlobalStyles.bodyText,
                                { textDecorationLine: "underline" },
                            ]}
                        >
                            {url}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                Clipboard.setString(url);
                            }}
                        >
                            <Text
                                style={[
                                    GlobalStyles.bodyText,
                                    {
                                        color: GlobalColors.greenOutline,
                                        paddingLeft: 0,
                                    },
                                ]}
                            >
                                COPY
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ShareComponent url={url} eventName={eventDetails.eventName} />
            </View>
        );
    };

    const PublishScreen = () => {
        return (
            <View style={GlobalStyles.container}>
                <View style={{ justifyContent: "flex-start" }}>
                    {getTitleSection()}
                    {getCongratsSection()}
                    <Text style={GlobalStyles.subheaderText}>Plan It 📅</Text>
                </View>
                {getShareSection()}
                <View style={GlobalStyles.bottomSection}>
                    {/* <View style={{ width: "90%", marginBottom: 10 }}>
                        <Text
                            style={[
                                GlobalStyles.bodyText,
                                { textAlign: "center" },
                            ]}
                        >
                            To edit this event in the future {"\n"} create an
                            account{" "}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={GlobalStyles.submitButton}
                        onPress={() => {
                            console.log(navigation);
                            navigation.navigate("Signup");
                        }}
                    >
                        <Text style={GlobalStyles.buttonText}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                    <View style={{ width: "90%", marginBottom: 10 }}>
                        <Text
                            style={[
                                GlobalStyles.bodyText,
                                { textAlign: "center" },
                            ]}
                        >
                            (it only takes 30 seconds 😁)
                        </Text>
                    </View> */}
                </View>
            </View>
        );
    };

    return (
        <View style={{ height: "100%", width: "100%" }}>
            {fromCreate ? (
                <PublishScreen />
            ) : (
                <PublishedEvent eventID={eventID} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    eventTitleSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
});
