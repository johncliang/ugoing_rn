import React from "react";
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    ScrollView,
    FlatList
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import LinearGradient from "react-native-web-linear-gradient";
import Grid from "antd/lib/card/Grid";



export const HomeScreen = ({ navigation }) => {
    var [ isPress, setIsPress] = React.useState(false);

    var touchProps = {
        keyboardShouldPersistTaps: 'handled',
        activeOpacity: 1,
        underlayColor: '#D5D5D5',
        style: isPress ? styles.btnPress : styles.btnNormal,
        onPress: () => { 
            setIsPress(true)
            navigation.navigate("Create")
        },
    };

    return (
        <View style={styles.mainContainer}>
            <View style={GlobalStyles.topSection}>
                    <LinearGradient
                        useAngle={true}
                        angle={180.0}
                        locations={[0, 0.2521, 1.0]}
                        colors={["#FFFFFF", "#9CDBFF", "rgba(137, 255, 255, 0.06)"]}
                        styles="styles.linearGradient"
                    >
                        <View style={styles.titleSection}>
                            <Text
                                style={[
                                    GlobalStyles.headerText,
                                    {
                                        paddingVertical: 90,
                                        paddingHorizontal: 35,
                                        color: "#292929",
                                        fontWeight: "normal",
                                        letterSpacing: 1,
                                    },
                                ]}
                            >
                                The 🌎’s Fastest {"\n"}
                                <Text
                                    style={{ textDecorationLine: "underline" }}
                                    onPress={() => navigation.navigate("Create")}
                                >
                                    Event
                                </Text>{" "}
                                Organizer
                            </Text>
                            <TouchableOpacity
                                style={[
                                    GlobalStyles.submitButton,
                                    { marginBottom: 112 },
                                ]}
                                onPress={() => {
                                    navigation.navigate("Create");
                                }}
                            >
                                <Text style={GlobalStyles.buttonText}>
                                    Create Event
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <Image
                        style={styles.calendarImage}
                        source={require("../assets/Hands_Calendar_1.png")}
                    />
                    <View
                        style={{
                            flexDirection: "column",
                            paddingHorizontal: 20,
                            paddingBottom: 23,
                        }}
                    >
                        <View style={styles.columnContainer}>
                            <Text
                                style={[
                                    GlobalStyles.headerText,
                                    {
                                        fontSize: 24,
                                        marginTop: 5,
                                        justifyContent: "left",
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                    },
                                ]}
                            >
                                Let’s throw a party! 🎉{" "}
                            </Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                style={{ height: 172, width: 172 }}
                                source={require("../assets/Hands_Party.png")}
                            />
                            <Text
                                style={[
                                    GlobalStyles.bodyText,
                                    { textAlign: "right", fontSize: 18 },
                                ]}
                            >
                                UGoing creates a{" "}
                                <Text
                                    style={{ textDecorationLine: "underline" }}
                                    onPress={() => navigation.navigate("Create")}
                                >
                                    unique link
                                </Text>{" "}
                                to your next event that friends can add directly to
                                their calendars
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            paddingHorizontal: 20,
                            paddingBottom: 12,
                            paddingTop: 26,
                            backgroundColor: "#EFF5FE",
                        }}
                    >
                        <View style={[styles.columnContainer, { marginBottom: 12, alignItems: 'flex-start'}]}>
                            <View style={[styles.rowContainer, { width: "55%", marginTop: 7 }]}>
                                <Text
                                    style={[
                                        GlobalStyles.headerText,
                                        {
                                            fontSize: 24,
                                            textAlign: "left",
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            letterSpacing: 1,
                                            paddingBottom: 5
                                        },
                                    ]}
                                >
                                    1 Link to Rule Them All 🔗
                                </Text>
                                <Text
                                    style={[
                                        GlobalStyles.bodyText,
                                        { paddingHorizontal: 0, fontSize: 18 },
                                    ]}
                                >
                                    Details get burried often in the group chat.
                                    Instead of re-typing each time, send a{" "}
                                    <Text
                                        style={{ textDecorationLine: "underline" }}
                                        onPress={() =>
                                            navigation.navigate("Create")
                                        }
                                    >
                                        link
                                    </Text>
                                </Text>
                            </View>
                            <Image
                                style={{ height: 205, width: 121 }}
                                source={require("../assets/Hands_Chat.png")}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            paddingHorizontal: 20,
                            paddingBottom: 34,
                            paddingTop: 28,
                            backgroundColor: "#FAFDF2",
                        }}
                    >
                        <View style={styles.columnContainer}>
                            <Image
                                style={{ height: 134, width: 134 }}
                                source={require("../assets/Hands_Calendar_2.png")}
                            />
                            <View style={[styles.rowContainer, { width: "60%" }]}>
                                <Text
                                    style={[
                                        GlobalStyles.headerText,
                                        {
                                            fontSize: 24,
                                            marginVertical: 5,
                                            textAlign: "right",
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            letterSpacing: 1,
                                        },
                                    ]}
                                >
                                    Right into their Calendar 📅
                                </Text>
                                <Text
                                    style={[
                                        GlobalStyles.bodyText,
                                        { textAlign: "right", fontSize: 18, paddingHorizontal: 0 },
                                    ]}
                                >
                                    UGoing lets friends add your event directly into
                                    their preferred calendar{"\n"}
                                    {"\n"}
                                    All your guests add your event...
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            paddingHorizontal: 20,
                            marginBottom: 70,
                            marginTop: 18,
                            backgroundColor: "#F4F4F4",
                        }}
                    >
                        <View style={styles.columnContainer}>
                            <Text
                                style={[
                                    GlobalStyles.headerText,
                                    {
                                        fontSize: 24,
                                        marginTop: 5,
                                        justifyContent: "left",
                                        paddingHorizontal: 17,
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                    },
                                ]}
                            >
                                and it’s Free! {" "}👏
                            </Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <Text
                                style={[
                                    GlobalStyles.bodyText,
                                    { textAlign: "left", paddingHorizontal: 17, fontSize: 18, paddingTop: 38 },
                                ]}
                            >
                                Does it get any{"\n"}
                                better?
                            </Text>
                            <Image
                                style={{ height: 110, width: 103 }}
                                source={require("../assets/Hands_Balloons.png")}
                            />
                        </View>
                    </View>
                    <View
                        style={[
                            styles.titleSection,
                            { backgroundColor: "#FFFFFF" },
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyles.headerText,
                                {
                                    paddingTop: 36,
                                    paddingBottom: 21,
                                    paddingHorizontal: 35,
                                    color: "#292929",
                                    fontSize: 24,
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                },
                            ]}
                        >
                            Create your first event {"\n"} in{" "}
                            <Text style={{fontStyle: 'italic'}}>seconds</Text>
                        </Text>
                        {/*<Text
                                style={[
                                    GlobalStyles.subheaderText,
                                    { paddingVertical: 35, color: "black" },
                                ]}
                            >
                                Share events with a single link
                            </Text>*/}
                        <Image
                            style={{ height: 95, width: 57 }}
                            source={require("../assets/Hands_Arrow.png")}
                        />

                        <TouchableOpacity
                            style={[
                                GlobalStyles.submitButton,
                                { marginTop: 25, marginBottom: 64 },
                            ]}
                            onPress={() => {
                                navigation.navigate("Create");
                            }}
                        >
                            <Text style={GlobalStyles.buttonText}>
                                Create Event
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.columnContainer, {justifyContent: 'center', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderColor: '#D5D5D5'}]}>
                    <TouchableOpacity onPress = {() => navigation.navigate("Create")} style={{width: '35%', paddingTop: 17, paddingBottom: 40 }}>
                        <Text style={[styles.footerText, {textAlign: "center"}]}>
                            About
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => navigation.navigate("Create")} style={{width: '30%', paddingTop: 17, paddingBottom: 40 }}>
                        <Text style={[styles.footerText, {textAlign: "center"}]}>
                            Terms Of Use
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => navigation.navigate("Create")} style={{width: '35%', paddingTop: 17, paddingBottom: 40 }}>
                        <Text style={[styles.footerText, {textAlign: "center"}]}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
    },
    titleSection: {
        justifyContent: "center",
        alignItems: "center",

        /*background: `linear-gradient(180deg, #FFFFFF 11.25%, #9CDBFF 30.21%, rgba(137, 255, 255, 0) 100%)`*/
    },
    createSection: {
        alignItems: "center",
        justifyContent: "center",
    },
    createEventSection: {
        alignItems: "center",
        justifyContent: "center",
    },
    linearGradient: {
        height: "40%",
    },
    calendarImage: {
        position: "absolute",
        right: 0,
        top: 261,

        height: 198,
        width: 126,
    },
    columnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rowContainer: {
        justifyContent: "space-evenly",
    },
    footerText: {
        color: "#292929",
        fontFamily: "SFPro",
        fontSize: 15,
        letterSpacing: 1,
    }
});
