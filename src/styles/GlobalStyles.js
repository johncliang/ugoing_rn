import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

// Getting a bit carried away here but I love the names of these analagous colors
// for our logo color
export const GlobalColors = {
    // complementary
    valencia: "#DB3B3B",

    bradyPunch: "#DB8B3B",

    wattle: "#DBDB3B",

    atlantis: "#8BDB3B",

    emerald: "#3BDB3B",

    shamrock: "#3BDB8B",

    lightCoral: "#ff7477",
    pastelPink: "#e69597",
    silverPink: "#ceb5b7",
    powderBlue: "#b5d6d6",
    celeste: "#9cf6f6",

    // tints
    light: "#E46C6C",
    lighter: "#ED9D9D",
    lightest: "#F6CECE",
};
export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    topSection: {
        flex: 1,
    },
    bottomSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 40,
    },
    headerText: {
        fontSize: 36,
        fontWeight: "bold",
        fontFamily: "SFPro",
        textAlign: "center",
    },
    descriptionText: {
        fontSize: 22,
    },
    subheaderText: {
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "SFPro",
        paddingLeft: 20,
        paddingVertical: 10,
    },
    subheaderText_smaller: {
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "SFPro",
        paddingLeft: 20,
        paddingVertical: 10,
    },
    bodyText: {
        fontFamily: "SFPro",
        fontSize: 16,
    },
    buttonText: {
        color: "white",
        fontSize: 22,
    },
    submitButton: {
        borderRadius: 7,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: GlobalColors.shamrock,
    },
    timeButton: {
        width: 150,
        alignSelf: "center",
    },
    textInput: {
        fontSize: 15,
        fontFamily: "SFPro",
        paddingLeft: 10,
        paddingVertical: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 7,
        placeholderTextColor: "lightgrey",
    },
    errorText: {
        fontSize: 15,
        fontFamily: "SFPro",
        color: "red",
        textAlign: "center",
    },
});
