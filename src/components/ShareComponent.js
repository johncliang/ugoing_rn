import React from "react";
import { Text, View, TouchableOpacity, Share } from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

export const ShareComponent = (props) => {
    const { url, eventName } = props;

    const onShare = async () => {
        console.log(url);
        try {
            const result = await Share.share({
                message: `U going? Click the link below to accept the invitation \n ${url}`,
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View
            style={[
                GlobalStyles.infoSectionFilledGreen,
                { flexDirection: "row", marginTop: 10 },
            ]}
        >
            <View
                style={{
                    width: "75%",
                    borderColor: GlobalColors.greenOutline,
                    borderRightWidth: 1,
                    justifyContent: "center",
                }}
            >
                <Text style={GlobalStyles.subheaderText_smaller}>
                    Share {eventName}
                </Text>
            </View>
            <View
                style={{
                    width: "25%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity onPress={onShare}>
                    <Ionicons name="share-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};
