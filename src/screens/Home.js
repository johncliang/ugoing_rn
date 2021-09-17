import React from "react";
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import LinearGradient from "react-native-web-linear-gradient";
import Grid from "antd/lib/card/Grid";

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[GlobalStyles.topSection, {backgroundColor: '#FFFFFF'}]}>
                {/*<LinearGradient
                    useAngle={true}
                    angle={180.0}
                    locations={[0, 0.2521, 1.0]}
                    colors={["#FFFFFF", "#9CDBFF", "rgba(137, 255, 255, 0.06)"]}
                    styles="styles.linearGradient"
                >*/}
                <View style={[GlobalStyles.cardSection, {backgroundColor: "#F7F7F7", zIndex: 1}]}>
                    <View style={styles.titleSection}>
                        <Text
                            style={[
                                GlobalStyles.headerText,
                                {
                                    paddingTop: 115,
                                    paddingBottom: 186,
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
                                { marginBottom: 192, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"},
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
                {/*</LinearGradient>*/}
                {/*<Image
                    style={styles.calendarImage}
                    source={require("../assets/Hands_Calendar_1.png")}
                />*/}
                <View style={[GlobalStyles.cardSection, {backgroundColor: "#7B7B7B", zIndex: 2, marginTop: -60}]}>
                    <View
                        style={{
                            flexDirection: "column",
                            paddingHorizontal: 30,
                            paddingBottom: 23,
                        }}
                    >
                        {/*<View style={styles.columnContainer}>*/}
                            <Text
                                style={[
                                    GlobalStyles.headerText,
                                    {
                                        fontSize: 24,
                                        marginTop: 50,
                                        textAlign: 'left',
                                        paddingHorizontal: 0,
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                        color: '#FFFFFF'
                                    },
                                ]}
                            >
                                Let’s throw a party! 🎉{" "}
                            </Text>
                        {/*</View>*/}
                        {/*<View style={styles.columnContainer}>*/}
                            <Text
                                style={[
                                    GlobalStyles.bodyText,
                                    { textAlign: "center", fontSize: 18, lineHeight: 36, color: '#FFFFFF', marginTop: 28, marginBottom: 100, paddingLeft: 0},
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
                            <View style={{justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: 179}}>
                                <Image
                                    style={{ height: 172, width: 172, margin: '0 auto 0 auto'}}
                                    source={require("../assets/Hands_Party.png")}
                                />

                            </View>
                            
                            
                        {/*</View>*/}
                    </View>
                </View>
                <View style={[GlobalStyles.cardSection, {backgroundColor: "#F7F7F7", zIndex: 3, marginTop: -60}]}>
                    <Text
                        style={[
                            GlobalStyles.headerText,
                            {
                                fontSize: 24,
                                marginTop: 50,
                                textAlign: 'left',
                                paddingHorizontal: 30,
                                fontWeight: 700,
                                letterSpacing: 1,
                            },
                        ]}
                    >
                        It's as easy as...
                    </Text>
                    <View
                        style={[
                            GlobalStyles.bodyText,
                            { fontSize: 18, lineHeight: 36, marginTop: 32, marginBottom: 40, paddingHorizontal: 30},
                        ]}
                    >
                        <ol>
                            <li>Create Your Event</li>
                            <li>Send the link to your friends</li>
                            <li>View the details online or add them to your calendar with a single tap</li>
                        </ol>
                        
                    </View>
                    <Image
                        style={{ height: 316, width: 283, marginBottom: 47, marginLeft: 'auto', marginRight: 'auto'}}
                        source={require("../assets/Google_Calendar_Event.png")}>
                    </Image>
                </View>

                {/*<View
                    style={{
                        flexDirection: "column",
                        paddingHorizontal: 20,
                        paddingBottom: 12,
                        paddingTop: 26,
                        backgroundColor: "#FFFFFF",
                    }}
                >*/}
                    <View >
                        {/*<View style={[styles.rowContainer, { width: "55%" }]}>*/}
                            <Text
                                style={[
                                    GlobalStyles.headerText,
                                    {
                                        fontSize: 24,
                                        marginTop: 38,
                                        textAlign: "center",
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                    },
                                ]}
                            >
                                1 Link to Rule Them All 🔗
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.bodyText,
                                    { textAlign: "center", fontSize: 18, lineHeight: 36, marginTop: 32, marginBottom: 23, paddingLeft: 30, paddingRight: 30},
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
                        {/*</View>*/}
                        <Image
                            style={{ height: 441, width: 315, marginLeft: 'auto', marginRight: 'auto', marginBottom: 69}}
                            source={require("../assets/Messenger_Chat.png")}
                        />
                    </View>
                {/*</View>*/}

                <View style={[GlobalStyles.cardSection, {backgroundColor: "#FAFDF2", zIndex: 1, marginTop: -60}]}>
                    <Text
                        style={[
                            GlobalStyles.headerText,
                            {
                                fontSize: 24,
                                marginTop: 38,
                                marginBottom: 74,
                                textAlign: "center",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: 1,
                            },
                        ]}
                    >
                        Right into their Calendar 📅
                    </Text>
                    <View style={[styles.columnContainer, {marginBottom: 188, paddingRight: 30}]}>
                        <Image
                            style={{ height: 96, width: 96, marginLeft: 30, marginTop: 'auto', marginBottom: 'auto' }}
                            source={require("../assets/Icon_Calendar.png")}
                        />
                        <Text
                            style={[
                                GlobalStyles.bodyText,
                                { textAlign: "right", fontSize: 18, lineHeight: 36, paddingLeft: 10},
                            ]}
                        >
                            UGoing lets friends add your event directly into
                            their preferred calendar{"\n"}
                            {"\n"}
                            No more digging through messages or forgotten reminders - Everything you need to know front and center where you expect it
                        </Text>
                    </View>
                </View>

                <View style={[GlobalStyles.cardSection, {backgroundColor: "#7B7B7B", zIndex: 2, marginTop: -60}]}>
                    <Text
                        style={[
                            GlobalStyles.headerText,
                            {
                                fontSize: 24,
                                marginTop: 38,
                                marginBottom: 74,
                                marginLeft: 30,
                                textAlign: "center",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: 1,
                                color: '#FFFFFF'
                            },
                        ]}
                    >
                        And it’s all Free!  👏
                    </Text>
                    <Text
                        style={[
                            GlobalStyles.bodyText,
                            { textAlign: "center", color: '#FFFFFF', fontSize: 18, lineHeight: 36, paddingLeft: 0, marginHorizontal: 80},
                        ]}
                    >
                        Create as many events as you want{"\n"}
                        {"\n"}
                        Free to create events{"\n"}
                        {"\n"}
                        Free for your guests{"\n"}
                        {"\n"}
                    </Text>
                    <Image
                        style={{ height: 64, width: 64, marginLeft: 'auto', marginRight: 'auto', marginBottom: 101}}
                        source={require("../assets/Icon_FreeEvent.png")}
                    />
                </View>

                {/*}
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
                                        fontStyle: "normal",
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
                                    {
                                        textAlign: "right",
                                        fontSize: 18,
                                        paddingHorizontal: 0,
                                    },
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
                {*/}
                {/*}

                <View
                    style={{
                        flexDirection: "column",
                        paddingHorizontal: 20,
                        marginBottom: 40,
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
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                },
                            ]}
                        >
                            and it’s Free! 👏
                        </Text>
                    </View>
                    <View style={styles.columnContainer}>
                        <Text
                            style={[
                                GlobalStyles.bodyText,
                                {
                                    textAlign: "right",
                                    paddingHorizontal: 17,
                                    fontSize: 18,
                                    paddingTop: 38,
                                },
                            ]}
                        >
                            Does it get any better?
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
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: 1,
                            },
                        ]}
                    >
                        Create your first event in seconds
                    </Text>
                    
                    {/*<Text
                            style={[
                                GlobalStyles.subheaderText,
                                { paddingVertical: 35, color: "black" },
                            ]}
                        >
                            Share events with a single link
                        </Text>*/}
                    {/*<Image
                        style={{ height: 95, width: 57 }}
                        source={require("../assets/Hands_Arrow.png")}
                    />*/}

                    <TouchableOpacity
                        style={[
                            GlobalStyles.submitButton,
                            { marginTop: 54, marginBottom: 64, marginLeft: 'auto', marginRight: 'auto' },
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
            {/*</View>*/}
            <View style={[styles.columnContainer, {justifyContent: 'center', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderColor: '#D5D5D5'}]}>
                <TouchableOpacity onPress = {() => navigation.navigate("About")} style={{width: '35%', paddingTop: 30, paddingBottom: 40 }}>
                    <Text style={[styles.footerText, {textAlign: "center"}]}>
                        About
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate("TOS")} style={{width: '30%', paddingTop: 30, paddingBottom: 40 }}>
                    <Text style={[styles.footerText, {textAlign: "center"}]}>
                        Terms Of Use
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate("PrivacyPolicy")} style={{width: '35%', paddingTop: 30, paddingBottom: 40 }}>
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
});
