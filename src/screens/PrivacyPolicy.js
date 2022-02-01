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

export const PrivacyPolicy = ({ navigation }) => {

    const PrivacyPolicyContent = () => {
        return (
            <Box bg="white" px={"1.563rem"} pb={"1.563rem"}>
                <Center justifyContent={"flex-start"} flex="1">
                    <Heading textAlign={"center"} fontStyle={"bold"} fontSize={20} lineHeight={50} my={"1.563rem"}>
                        Privacy Policy
                    </Heading>
                    <Heading textAlign={"left"} fontStyle={"medium"} fontSize={18} lineHeight={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tortor est. Fusce ullamcorper velit massa, pellentesque pellentesque odio consequat vitae. Mauris sed vehicula eros. Aliquam vel tellus sagittis, scelerisque sem blandit, dapibus nibh. Sed consequat aliquam hendrerit. Nunc auctor facilisis nisl non volutpat. Suspendisse pharetra vestibulum facilisis. Duis aliquam fringilla rhoncus.

Nulla bibendum a felis in consequat. Nulla vitae enim turpis. Aliquam consectetur odio volutpat lacus varius, sit amet gravida diam mattis. Sed eu ipsum lectus. Sed tincidunt mi et leo sodales, eu tincidunt leo venenatis. Aenean varius consectetur est in vestibulum. Donec eu sagittis arcu, sit amet fringilla lorem.

Phasellus laoreet interdum lectus eget suscipit. Cras vehicula ornare justo, sit amet posuere odio sodales sit amet. Aliquam mi dolor, dapibus imperdiet tortor at, congue venenatis velit. Quisque neque dui, rhoncus nec convallis sed, ullamcorper nec magna. Vivamus arcu sapien, hendrerit non dapibus vel, dignissim vitae mi. Fusce quis quam nec sapien tempus blandit. Nullam faucibus nulla a odio scelerisque rhoncus. Suspendisse fermentum sodales nulla, vitae placerat orci consectetur sit amet.
                    </Heading>
                </Center>
            </Box>
        );
    };

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
            <PrivacyPolicyContent />
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
