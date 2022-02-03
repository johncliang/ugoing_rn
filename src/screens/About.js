import React from "react";
import {
    // Image,
    // Text,
    // View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import {
    View,
    Text,
    Image,
    Heading,
    Box,
    Center,
    Button,
    ScrollView,
    HStack,
    FlatList,
    Divider,
} from "native-base";
import ugoingIcon from "../assets/UGoing_Logo.png";

export const AboutScreen = ({ navigation }) => {

    const Title = () => {
        return (
            <Box bg="white" px={"1.563rem"}>
                <Center justifyContent={"flex-start"} flex="1">
                    <Heading textAlign={"center"} fontStyle={"bold"} fontSize={20} lineHeight={50} mt={"1.563rem"}>
                        About Us
                    </Heading>
                </Center>
            </Box>
        );
    };

    const Logo = () => {
        return (
            <Box bg="white" px={"1.563rem"} py={"1.563rem"} >
                <Image source={ugoingIcon} h={44} w={137} mb={"1rem"} mx={"auto"}></Image>
            </Box>
        )
    }

    const Content = () => {
        return (
            <Box mx={"1.563rem"}>
                <Box fontFamily={"Gilroy"} maxW={"60rem"} mx={"auto"} alignItems="center" textAlign={"center"}>
                    <br />
                    <h2 >
                        <b>
                            We want to make inviting your friends to parties easier
                        </b>
                    </h2>
                    <p style={{color: "#6F7480"}} dir="ltr">
                        UGoing was created to make the process of inviting guests to events easier
                        for hosts and more enjoyable for guests. Hosts can create a unique link to
                        their event in seconds without needing to sign up; guests can see every
                        detail about the event in one view where they can add the event directly to
                        their calendar.
                    </p>
                    <br />
                    <h2 >
                        <b>
                            Hosting events today is disorganized and time consuming
                        </b>
                    </h2>
                    <p style={{color: "#6F7480"}} dir="ltr">
                        For hosts, planning an event today is a challenging ordeal of inviting
                        guests across different platforms. Within a group chat, newly added members
                        don’t have access to earlier messages and not everyone is on the same
                        social media platforms. On the day of the events, hosts need to answer
                        individual messages about guest parking, door access codes, apartment units
                        etc. while also entertaining guests; this leads to a negative experience
                        for both host and guest.
                    </p>
                    <br />
                    <h2 >
                        <b>
                            Guests must dig up event details day-of or message the host
                        </b>
                    </h2>
                    <p style={{color: "#6F7480"}} dir="ltr">
                        For guests, event information is usually received at the initial invitation
                        and then lost or forgotten about until the day of the event. If you are not
                        active on the social network that the host sent the invitation on, you may
                        never even see an invite! In a group chat, we found ourselves scrolling up
                        past days of messages to find the host’s original post; +1’s may not even
                        have the host’s contact information.
                    </p>
                    <br />
                    <h2 >
                        <b>
                            UGoing improves the experience for hosts and guests
                        </b>
                    </h2>
                    <p style={{color: "#6F7480"}} dir="ltr">
                        We envision a better way to organize small group events that solves
                        problems for both hosts and guests.
                    </p>
                    <br />
                    <p style={{color: "#6F7480"}} dir="ltr">
                        Hosts create an event in seconds and get a unique UGoing link that can be
                        pinned to a group chat or sent around on any platform. Hosts can add a
                        description, Google Maps link, arrival instructions, and contact phone
                        number directly on the platform.
                    </p>
                    <br />
                    <p style={{color: "#6F7480"}} dir="ltr">
                        Guests are presented with all the information for an event and have the
                        option to add the event directly into their calendar.
                    </p>
                    <br />
                    <h2 >
                        <b>
                            Let us know what we can do better
                        </b>
                    </h2>
                    <p style={{color: "#6F7480"}} dir="ltr">
                        Email us at <a href="mailto:ugoingapp@gmail.com">ugoingapp@gmail.com</a>
                    </p>
                    <p style={{color: "#6F7480"}} dir="ltr">
                        Or Instagram at{' '}
                        <a href="https://www.instagram.com/ugoing_app/">
                            https://www.instagram.com/ugoing_app/
                        </a>
                    </p>
                    <br />
                    <h2 >
                        <b>
                            About the team:
                        </b>
                    </h2>
                    <p style={{color: "#6F7480"}} dir="ltr">
                        UGoing was created by a team of recent Stanford and Emory graduates.
                    </p>
                </Box>
            </Box>
        )
    }

    const Footer = () => {
        return (
            <Box
                //h={Dimensions.get("window").height * 0.25}
                bg="primary.300"
                alignItems={"center"}
                justifyContent={"flex-start"}
            >
                <Text color="white" fontStyle={"semibold"} fontSize={12} letterSpacing={"0.02em"} my={"0.938rem"}>
                    UGoing™ 2022. All rights reserved.
                </Text>
            </Box>
        );
    };


    return (
        <View h="100%" overflowY={"scroll"} bg={"white"} justifyContent={"space-between"}>
            <Title />
            <Content />
            <Logo />
            <Footer />
        </View>
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        backgroundColor: "white"
    },
    textSection: {
        fontSize: 18,
        marginTop: 28,
        marginLeft: 20,
    }
});
