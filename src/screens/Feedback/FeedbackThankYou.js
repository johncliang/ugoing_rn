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
import Footer from "../../components/Footer"

export const FeedbackThankYou = ({ navigation }) => {


    const [value, setValue] = useState(0);
    const [email, setEmail] = useState('')

    const handleEmailInput = (email) => {
        setEmail(email)
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
                        <TouchableOpacity onPress={() => navigation.navigate("FeedbackHome")} style={{ width: "50%", maxWidth: "10.625rem" }}>
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