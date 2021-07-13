import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { fs } from "../Firebase/firebase";


// route.params - uid to event
export const PublishPost = ({ route, navigation }) => {
    console.log("passed info is " + route.params);
    const [eventDetails, setEventDetails] = useState({});

    useEffect(() => {
        var docRef = fs.collection('events').doc(route.params);
        //var docRef = fs.collection('events').doc("cks0i7SlWYGD8Vy4Cr8z");
        
        docRef.get().then((doc) => {
            if(doc.exists) {
                console.log("document data: " + JSON.stringify(doc.data()));
                console.log("Event name is " + doc.data().eventName);
                setEventDetails(doc.data());
            } else {
                console.log("ERROR: Document with uid " + route.params + " not found!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); 
    }, []);

    const getTitleSection = () => {
        return (
            <View style={styles.minimizedSection}>
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


    return (
        <View style={styles.mainContainer}>
            <View style={GlobalStyles.topSection}>
                {getTitleSection()}
            </View>
            <View style={GlobalStyles.bottomSection}>
                <TouchableOpacity
                    style={GlobalStyles.submitButton}
                    onPress={() => {
                        console.log(navigation);
                        navigation.navigate("Create");
                    }}
                >
                    <Text style={GlobalStyles.buttonText}>Create Event</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        flex: 1,
    },
    titleSection: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    createSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
