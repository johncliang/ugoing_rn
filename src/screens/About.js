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

export const AboutScreen = ({ navigation }) => {

    const AboutContent = () => {
        return (
            <Box bg="white" px={"1.563rem"}>
                <Center justifyContent={"flex-start"} flex="1">
                    <Heading textAlign={"center"} fontStyle={"bold"} fontSize={20} lineHeight={50} my={"1.563rem"}>
                        About Us
                    </Heading>
                    <Heading textAlign={"left"} fontStyle={"medium"} fontSize={18} lineHeight={33}>
                        UGoing was first developed in 2021 by the collective brain trust of mastermind geniuses known as{' '}
                        <Heading fontStyle={"medium"} fontSize={18} lineHeight={33} underline>
                            ‘the boyz’
                        </Heading> in San Francisco and Atlanta
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
            <AboutContent />
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
