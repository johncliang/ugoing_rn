import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";

export const AboutScreen = ({ navigation }) => {

    return (
        <View style={[styles.mainContainer, {height: "100%", backgroundColor: 'white'}]}>
            <View style={[GlobalStyles.topSection, {backgroundColor: "white"}]}>
                <View >
                    <Text style={[styles.textSection, {fontFamily: "Limelight", color: "#292929"}]}>
                        About Us
                    </Text>
                    <Text style={[styles.textSection, {fontFamily: `Mako`, color: "#292929"}]}>
                        UGoing was first developed in 2021 by the collective brain trust of mastermind geniuses known as ‘the boyz’ in San Francisco and Atlanta
                    </Text>
                    
                </View>
            </View>
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
