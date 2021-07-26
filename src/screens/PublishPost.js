import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { fs } from "../Firebase/firebase";
import { Ionicons } from "@expo/vector-icons";

// route.params - eventID to event
export const PublishPost = ({ route, navigation }) => {
    //console.log("passed info is " + JSON.stringify(route.params));
    const [eventDetails, setEventDetails] = useState({});

    const { eventID } = route.params;

    useEffect(() => {
        if (eventID == "") {
            console.log("route params not found");
            return;
        }
        var docRef = fs.collection("events").doc(eventID);
        //var docRef = fs.collection('events').doc("cks0i7SlWYGD8Vy4Cr8z");

        docRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setEventDetails(doc.data());
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
                    You’ve just published{" \n"}
                </Text>
                <Text
                    style={[
                        GlobalStyles.bodyText,
                        {
                            fontWeight: "bold",
                            paddingLeft: 0,
                            textAlign: "center",
                        },
                    ]}
                >
                    {eventDetails.eventName}!
                </Text>
                <Text style={GlobalStyles.bodyText}>
                    Click below to share details with friends:{" "}
                </Text>
            </View>
        );
    };

    return (
        <View style={GlobalStyles.container}>
            <View style={{ justifyContent: "flex-start" }}>
                {getTitleSection()}
                {getCongratsSection()}
                <Text style={GlobalStyles.subheaderText}>Plan It 📅</Text>
            </View>
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
                    <Ionicons name="add-outline" size={32} color="black" />
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
                        ugoing.us/u/{eventID}
                    </Text>
                </View>
                <View
                    style={{
                        width: "25%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Ionicons name="add-outline" size={32} color="black" />
                </View>
            </View>
            <View
                style={[
                    GlobalStyles.infoSectionFilledGreen,
                    { flexDirection: "row", marginTop: 10 },
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
                    <Text style={GlobalStyles.subheaderText_smaller}>
                        Share {eventDetails.eventName}
                    </Text>
                </View>
                <View
                    style={{
                        width: "25%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Ionicons name="share-outline" size={32} color="black" />
                </View>
            </View>
            <View style={GlobalStyles.bottomSection}>
                <View style={{ width: "90%", marginBottom: 10 }}>
                    <Text
                        style={[GlobalStyles.bodyText, { textAlign: "center" }]}
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
                    <Text style={GlobalStyles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <View style={{ width: "90%", marginBottom: 10 }}>
                    <Text
                        style={[GlobalStyles.bodyText, { textAlign: "center" }]}
                    >
                        (it only takes 30 seconds 😁)
                    </Text>
                </View>
            </View>
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
