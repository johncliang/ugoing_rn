import React, { useEffect, useState, useRef } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import { Radio, NativeBaseProvider, Center, Input, Box, extendTheme, TextArea } from 'native-base';
import { GlobalStyles, GlobalColors } from "../../styles/GlobalStyles";
import Footer from "../../components/Footer";



export const FeedbackHome = ({ navigation }) => {

    const [feedbackButtonPressed, setFeedbackButtonPressed] = useState(false)
    const [issueButtonPressed, setIssueButtonPressed] = useState(false)
    const [issue, setIssue] = useState(0)
    const [userRating, setUserRating] = useState(false)
    const [value, setValue] = useState(0)
    const [email, setEmail] = useState('')
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    const handleEmailInput = (email) => {
        setEmail(email)
    }

    const toggleFeedbackButton = (rating) => {
        if (feedbackButtonPressed == false) {
            setFeedbackButtonPressed(true)
        }
        setUserRating(rating)

    }

    const toggleIssueButton = (issue) => {
        if (issueButtonPressed == false) {
            setIssueButtonPressed(true)
        }
        setIssue(issue)

    }

    const theme = extendTheme({
        components: {
            Input: {

            }

        }
    })

    return (
        <View style={[GlobalStyles.container]}>
            <View style={{ position: "absolute", top: -100, left: 0, height: 100, width: "100%", boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)" }}></View>

            <View style={GlobalStyles.topSection}>
                <View>
                    <Text style={[GlobalStyles.headerText, GlobalStyles.eventTitle, GlobalStyles.eventTextBig]}>
                        {"Event Feedback"}
                    </Text>
                    <View style={[GlobalStyles.greyLine, styles.lineStyling,]}> </View>
                </View>
                <View>
                    <Text style={[GlobalStyles.eventText, GlobalStyles.eventTitle, GlobalStyles.eventTextBig, GlobalStyles.commonHorizontalMargin]}>
                        "How was your experience creating an event?"
                    </Text>
                </View>
                <View style={[GlobalStyles.columnContainer, GlobalStyles.commonMargin]}>
                    <View></View>
                    <View style={GlobalStyles.columnContainer}>
                        <TouchableOpacity onPress={() => toggleFeedbackButton(false)} style={[GlobalStyles.feedbackButton, feedbackButtonPressed && !userRating ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed, { marginRight: "2rem", marginLeft: 0, }]}>
                            <Image
                                style={{ width: "2.813rem", height: "2.813rem", margin: "0 auto 0 auto", transform: [{ rotate: '180deg' }] }}
                                source={require("../../assets/ThumbsUp-Icon.svg")}
                            >
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleFeedbackButton(true)} style={[GlobalStyles.feedbackButton, feedbackButtonPressed && userRating ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed]}>
                            <Image
                                style={{ width: "2.813rem", height: "2.813rem", margin: "0 auto 0 auto" }}
                                source={require("../../assets/ThumbsUp-Icon.svg")}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View></View>
                </View>
                
                {(feedbackButtonPressed && !userRating) &&
                    <View>
                        <Text style={[GlobalStyles.eventText, GlobalStyles.eventTitle, GlobalStyles.eventTextBig, GlobalStyles.commonHorizontalMargin, {marginTop: 0}]}>
                            Please select one or more issues
                        </Text>
                        {width >= 390 ? 
                            <View>
                                <View style={[GlobalStyles.columnContainer, GlobalStyles.commonMargin]}>
                                    <View></View>
                                    <View style={GlobalStyles.columnContainer}>
                                        <TouchableOpacity onPress={() => toggleIssueButton(1)} style={[GlobalStyles.feedbackButton2, issueButtonPressed && issue == 1 ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed, { marginRight: "2rem", marginLeft: 0, }]}>
                                            <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium]}>
                                                Missing Features
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => toggleIssueButton(2)} style={[GlobalStyles.feedbackButton3, feedbackButtonPressed && issue == 2 ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed]}>
                                            <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium]}>
                                                Laggy
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View></View>
                                </View>
                                <View style={[GlobalStyles.columnContainer]}>
                                    <View></View>
                                    <View style={GlobalStyles.columnContainer}>
                                        <TouchableOpacity onPress={() => toggleIssueButton(3)} style={[GlobalStyles.feedbackButton2, issueButtonPressed && issue == 3 ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed, { marginRight: "2rem", marginLeft: 0, }]}>
                                            <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium]}>
                                                Not Work As Expected
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => toggleIssueButton(4)} style={[GlobalStyles.feedbackButton3, feedbackButtonPressed && issue == 4 ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed]}>
                                            <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium]}>
                                                Other
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View></View>
                                </View>
                            </View>
                        : 
                            <View>
                                <View style={[styles.smallScreen_buttonMargin]}>
                                    <TouchableOpacity onPress={() => toggleIssueButton(1)} style={[GlobalStyles.feedbackButton2, issueButtonPressed && issue == 1 ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed, { marginLeft: 0, }]}>
                                        <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium]}>
                                            Missing Features
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.smallScreen_buttonMargin]}>
                                    <TouchableOpacity onPress={() => toggleIssueButton(2)} style={[GlobalStyles.feedbackButton2, feedbackButtonPressed && issue == 2 ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed]}>
                                        <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium]}>
                                            Laggy
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.smallScreen_buttonMargin]}>
                                    <TouchableOpacity onPress={() => toggleIssueButton(3)} style={[GlobalStyles.feedbackButton2, issueButtonPressed && issue == 3 ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed, { marginLeft: 0, }]}>
                                        <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium]}>
                                            Not Work As Expected
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.smallScreen_buttonMargin]}>
                                    <TouchableOpacity onPress={() => toggleIssueButton(4)} style={[GlobalStyles.feedbackButton2, feedbackButtonPressed && issue == 4 ? GlobalStyles.feedbackButton_Pressed : GlobalStyles.feedbackButton_UnPressed]}>
                                        <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium]}>
                                            Other
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        {issueButtonPressed && 
                            <View>
                                <View style={[GlobalStyles.commonMargin]}>
                                    <View style={[GlobalStyles.tileSection2]}>
                                        <Text style={[GlobalStyles.eventText, GlobalStyles.eventTitle, GlobalStyles.eventTextMedium, GlobalStyles.commonMargin, GlobalStyles.semiBold, { textAlign: "left", marginBottom: "0.9375rem" }]}>
                                            Additional Feedback: (optional)
                                        </Text>
                                        <View style={[GlobalStyles.commonMargin, { marginTop: 0 }]}>
                                            <NativeBaseProvider>
                                                <Box alignItems="center" >
                                                    <TextArea mx="3" height="10rem" placeholder="Please specify your issues" w="100%" fontFamily={"gilroy"} outline={GlobalColors.darkGrey} borderRadius={"0.375rem"} backgroundColor={"white"} />
                                                </Box>
                                            </NativeBaseProvider>
                                        </View>
                                    </View>
                                    
                                </View>

                                <View style={{ maxWidth: "30.3125rem", marginHorizontal: "auto", width: "100%" }}>
                                    <View style={[GlobalStyles.columnContainer, GlobalStyles.commonHorizontalMargin]}>
                                        <TouchableOpacity onPress={() => navigation.navigate("Publish")} style={{ width: "50%", maxWidth: "10.625rem" }}>
                                            <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium, GlobalStyles.commonHorizontalMargin, GlobalStyles.underline, { textAlign: "center" }]}>
                                                Back
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[GlobalStyles.submitButton, styles.buttonSpacing, { width: "50%", maxWidth: "10.625rem" }]}
                                            onPress={() => navigation.navigate("FeedbackThankYou")}
                                        >
                                            <Text style={GlobalStyles.buttonText}>Send</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        }
                        

                    </View>

                }

                {(!feedbackButtonPressed || (!userRating && !issueButtonPressed)) &&
                    <View style={{ marginTop: feedbackButtonPressed ? "1.563rem": "11.396rem"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Publish")}>
                            <Text style={[GlobalStyles.eventText, GlobalStyles.eventTitle, GlobalStyles.eventTextMedium, GlobalStyles.commonHorizontalMargin, GlobalStyles.underline]}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    </View>
                }

                {(feedbackButtonPressed && userRating) &&
                    <View style={{ maxWidth: "30.3125rem", marginHorizontal: "auto" }}>
                        <Text style={[GlobalStyles.eventText, GlobalStyles.eventTitle, GlobalStyles.eventTextBig, GlobalStyles.commonHorizontalMargin, {marginTop: 0}]}>
                            Are you open to chatting with a member of our team about your experience?
                        </Text>
                        <View style={[GlobalStyles.commonMargin, { marginBottom: 0 }]}>
                            <NativeBaseProvider >
                                <Radio.Group defaultValue={0} name="myRadioGroup" accessibilityLabel="Pick your favorite number" value={value} onChange={nextValue => {
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
                                {(value == 1 && userRating) ?
                                    <View style={[GlobalStyles.commonMargin, { marginLeft: 0 }]}>
                                        <Box alignItems="center" >
                                            <Input value={email} onChangeText={handleEmailInput} mx="3" placeholder="Enter your email address" w="100%" fontFamily={"gilroy"} outline={GlobalColors.darkGrey} borderRadius={"0.375rem"} />
                                        </Box>
                                    </View>
                                    : <View style={{ marginTop: "5.375rem" }}></View>}

                            </NativeBaseProvider>
                        </View>
                        <View style={[GlobalStyles.columnContainer, GlobalStyles.commonHorizontalMargin]}>
                            <TouchableOpacity onPress={() => navigation.navigate("Publish")} style={{ width: "50%", maxWidth: "10.625rem" }}>
                                <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextMedium, GlobalStyles.commonHorizontalMargin, GlobalStyles.underline, { textAlign: "center" }]}>
                                    Back
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[GlobalStyles.submitButton, styles.buttonSpacing, value == 0 || (value == 1 && email == '') ? GlobalStyles.disabled_submitButton : "", { width: "50%", maxWidth: "10.625rem" }]}
                                onPress={() => navigation.navigate("Publish")}
                                disabled={value == 0 || (value == 1 && email == '')}
                            >
                                <Text style={GlobalStyles.buttonText}>Send</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                }



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
    smallScreen_buttonMargin: {
        marginHorizontal: "auto", 
        marginBottom: 0,
        marginTop: "0.9375rem"
    }
});