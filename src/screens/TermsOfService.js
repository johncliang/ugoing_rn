import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";

export const TOS = ({ navigation }) => {

    return (
        <View style={[styles.mainContainer, {height: "100%", backgroundColor: 'white'}]}>
            <View style={[GlobalStyles.topSection, {backgroundColor: "white"}]}>
                <View >
                    <Text style={[styles.textSection, {fontFamily: "Mako", fontWeight: "bold", color: "#292929"}]}>
                        Terms of Service
                    </Text>
                    <Text style={[styles.textSection, {fontFamily: `Mako`, color: "#292929"}]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tortor est. Fusce ullamcorper velit massa, pellentesque pellentesque odio consequat vitae. Mauris sed vehicula eros. Aliquam vel tellus sagittis, scelerisque sem blandit, dapibus nibh. Sed consequat aliquam hendrerit. Nunc auctor facilisis nisl non volutpat. Suspendisse pharetra vestibulum facilisis. Duis aliquam fringilla rhoncus.

Nulla bibendum a felis in consequat. Nulla vitae enim turpis. Aliquam consectetur odio volutpat lacus varius, sit amet gravida diam mattis. Sed eu ipsum lectus. Sed tincidunt mi et leo sodales, eu tincidunt leo venenatis. Aenean varius consectetur est in vestibulum. Donec eu sagittis arcu, sit amet fringilla lorem.

Phasellus laoreet interdum lectus eget suscipit. Cras vehicula ornare justo, sit amet posuere odio sodales sit amet. Aliquam mi dolor, dapibus imperdiet tortor at, congue venenatis velit. Quisque neque dui, rhoncus nec convallis sed, ullamcorper nec magna. Vivamus arcu sapien, hendrerit non dapibus vel, dignissim vitae mi. Fusce quis quam nec sapien tempus blandit. Nullam faucibus nulla a odio scelerisque rhoncus. Suspendisse fermentum sodales nulla, vitae placerat orci consectetur sit amet.


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
