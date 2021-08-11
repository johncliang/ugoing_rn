import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { fs } from "../Firebase/firebase";
import { Ionicons } from '@expo/vector-icons';


// route.params - uid to event
export const PublishPost = ({ route, navigation }) => {
    //console.log("passed info is " + JSON.stringify(route.params));
    const [eventDetails, setEventDetails] = useState({});

    const { uid } = route.params;

    useEffect(() => {
        if (uid == "") {
            console.log("route params not found");
            return;
        }
        var docRef = fs.collection('events').doc(uid);
        //var docRef = fs.collection('events').doc("cks0i7SlWYGD8Vy4Cr8z");
        
        docRef.get().then((doc) => {
            if(doc.exists) {
                setEventDetails(doc.data());
            } else {
                console.log("ERROR: Document with uid " + route.params + " not found!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); 
    }, [route.params?.uid]);

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
                <Text style={GlobalStyles.subheaderText_smaller}>Congratulations 👏🎉</Text>
                <Text style={GlobalStyles.bodyText}> 
                    You’ve just published {" "}
                    <Text style={[GlobalStyles.bodyText, {fontWeight:"bold", paddingLeft: 0, textAlign:"center"}]}>{eventDetails.eventName}!</Text>
                </Text>
                       
                <Text style={GlobalStyles.bodyText}>Click below to share your event with friends </Text>
                
            </View>
            ); 
    }


    return (
        <View style={GlobalStyles.container}>
            <View style={{justifyContent:"flex-start"}}>
                {getTitleSection()}
                {getCongratsSection()}
                <Text style={GlobalStyles.subheaderText}>
                    Add To Your Calendar 📅
                </Text>
            </View>
            <View style={[GlobalStyles.infoSectionFilledBlue, {flexDirection: "row"}]}>
                <View style={{width: "75%", borderColor: GlobalColors.blueOutline, borderRightWidth: 1}}>
                    <Text style={GlobalStyles.subheaderText_smaller}>Add to Calendar</Text>
                </View> 
                <View style={{width: "25%", alignItems:"center", justifyContent:"center"}}> 
                    <Ionicons name="add-outline" size={32} color="black" />
                </View>
            </View>
            <Text style={GlobalStyles.subheaderText}>
                Share Graduation Party
            </Text>
            <View style={[GlobalStyles.infoSectionFilledGreen, {flexDirection: "row"}]}>
                <View style={{width: "75%", borderColor: GlobalColors.greenOutline, borderRightWidth: 1, justifyContent: "center"}}>
                    <Text style={[GlobalStyles.bodyText, {textDecorationLine:"underline"}]}>ugoing.us/cks0i7SlWYGD8Vy4Cr8z</Text>
                </View> 
                <View style={{width: "25%", alignItems:"center", justifyContent:"center"}}> 
                    <Text style={GlobalStyles.greenCopyButtonText}>
                        COPY
                    </Text>
                </View>
            </View>
            <View style={[GlobalStyles.infoSectionFilledGreen, {flexDirection: "row", marginTop: 14}]}>
                <View style={{width: "75%", borderColor: GlobalColors.greenOutline, borderRightWidth: 1, justifyContent: "center"}}>
                    <Text style={GlobalStyles.subheaderText_smaller}>Share {eventDetails.eventName}</Text>
                </View> 
                <View style={{width: "25%", alignItems:"center", justifyContent:"center"}}> 
                    <Ionicons name="share-outline" size={32} color="black" />
                </View>
            </View>
            <View style={GlobalStyles.bottomSection}>
                <View style={{width: "90%", marginBottom: 14}}>                    
                    <Text style={[GlobalStyles.bodyText, {textAlign: "center", paddingLeft: 0}]}>To edit this event in the future {"\n"} create an account </Text>
                </View>
                <TouchableOpacity
                    style={[GlobalStyles.submitButton, {width: "14.28em", height: "4.57em", paddingVertical: 0, fontSize: 15}]}
                    onPress={() => {
                        console.log(navigation);
                        navigation.navigate("Signup");
                    }}
                >
                    <Text style={[GlobalStyles.buttonText, {marginVertical: "auto"}]}>Create Account</Text>
                </TouchableOpacity>
                <View style={{width: "90%", marginTop: 12}}>                    
                    <Text style={[GlobalStyles.bodyText, {textAlign: "center", paddingLeft: 0, fontSize: 15}]}>(it only takes 30 seconds 😁)</Text>
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
