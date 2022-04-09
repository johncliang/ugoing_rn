import React, { useEffect, useState, useRef } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { Radio, NativeBaseProvider, Center, Input, Box, extendTheme, TextArea } from 'native-base';
import { GlobalStyles, GlobalColors } from "../../styles/GlobalStyles";
import Footer from "../../components/Footer";
import { fs } from "../../Firebase/firebase";

export const FeedbackThankYou = ({ route, navigation}) => {

    const [eventDetails, setEventDetails] = useState({});
    const [value, setValue] = useState(0);
    const [email, setEmail] = useState('')

    const { eventID } = route?.params;
    const { issue } = route?.params;
    const { userRating } = route?.params;
    const { detail } = route?.params;
    
    const handleEmailInput = (email) => {
        setEmail(email)
    }

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
					//setURL(`ugoing.us/u/${eventID}`);
				} else {
					console.log(
						"ERROR: Document with eventID " + route.params + " not found!"
					);
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});

        console.log(eventDetails)
	}, [route.params?.eventID]);

    const submitData = () => {
		let feedbackData = {
            rating: userRating,
            issue: issue,
            email: email,
            openToChat: value,
            detail: detail,
		};

		fs.collection("feedback")
			.add(feedbackData)
			.then((value) => {
				console.log(value);
				navigation.navigate("Publish", {
					eventID: eventID,
					fromCreate: false,
				});
			});
	}

    return (
        <View style={[GlobalStyles.container]}>
            <View style={{ position: "absolute", top: -100, left: 0, height: 100, width: "100%", boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)" }}></View>

            <View style={GlobalStyles.topSection}>
                <View>
                    <Text style={[GlobalStyles.headerText, GlobalStyles.eventTitle, GlobalStyles.eventTextBig]}>
                        {"Thank You For Your Feedback!"}
                    </Text>
                    <View style={[GlobalStyles.greyLine, styles.lineStyling,]}> </View>
                </View>

                <View style={{ maxWidth: "30.3125rem", marginHorizontal: "auto" }}>
                    <Text style={[GlobalStyles.eventText, GlobalStyles.eventTitle, GlobalStyles.eventTextBig, GlobalStyles.commonHorizontalMargin]}>
                        Are you open to chatting with a member of our team about your experience?
                    </Text>
                    <View style={[GlobalStyles.commonMargin, { marginBottom: 0 }]}>
                        <NativeBaseProvider >
                            <Radio.Group defaultValue="" name="myRadioGroup" accessibilityLabel="Pick your favorite number" value={value} onChange={nextValue => {
                                setValue(nextValue);
                            }}>

                                <Radio value={1} my={1} fontFamily={"gilroy"} fontSize={"1.25rem"} style={{ alignItems: "center" }}>
                                    <Text style={[GlobalStyles.eventTextBig, GlobalStyles.commonHorizontalMargin, GlobalStyles.gilRoy]}>
                                        Yes
                                    </Text>

                                </Radio>
                                <Radio value={2} my={1} fontFamily={"gilroy"} fontSize={"1.25rem"} style={{ alignItems: "center" }}>
                                    <Text style={[GlobalStyles.eventTextBig, GlobalStyles.commonHorizontalMargin, GlobalStyles.gilRoy]}>
                                        No
                                    </Text>
                                </Radio>
                            </Radio.Group>
                            {(value == 1 ) ?
                                <View style={[GlobalStyles.commonMargin, { marginLeft: 0 }]}>
                                    <Box alignItems="center" >
                                        <Input value={email} onChangeText={handleEmailInput} mx="3" placeholder="Enter your email address" w="100%" fontFamily={"gilroy"} outline={GlobalColors.darkGrey} borderRadius={"0.375rem"} />
                                    </Box>
                                </View>
                                : <View style={{ marginTop: "5.375rem" }}></View>}

                        </NativeBaseProvider>
                    </View>
                    <View style={[GlobalStyles.columnContainer, GlobalStyles.commonHorizontalMargin]}>
                        <TouchableOpacity onPress={() => navigation.navigate("FeedbackHome", {eventID: eventID, fromCreate: false, })} style={{ width: "50%", maxWidth: "10.625rem" }}>
                            <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium, GlobalStyles.commonHorizontalMargin, GlobalStyles.underline, { textAlign: "center" }]}>
                                Back
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                                style={[GlobalStyles.submitButton, styles.buttonSpacing, value == 0 || (value == 1 && email == '') ? GlobalStyles.disabled_submitButton : "", { width: "50%", maxWidth: "10.625rem" }]}
                                onPress={() => submitData()}
                                disabled={value == 0 || (value == 1 && email == '')}
                            >
                                <Text style={GlobalStyles.buttonText}>Send</Text>
                            </TouchableOpacity>
                    </View>


                </View>



            </View>
            <View style={GlobalStyles.bottomSection}></View>
            <Footer homepage={false} publish={false}></Footer>
        </View>
    )
};


const styles = StyleSheet.create({
    lineStyling: {
        width: "15.875rem",
        marginHorizontal: "auto"
    },
});