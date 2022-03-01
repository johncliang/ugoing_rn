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

	white: "#FFF",

	// tints
	light: "#E46C6C",
	lighter: "#ED9D9D",
	lightest: "#F6CECE",

	// Button color
	lightBlack: "#292C35",
	veryLightGrey: "#F4F4F4",
	lightestGrey: "#D5D5D5",
	blueOutline: "#2C69F6",
	lightBlue: "#EFF5FE",
	greenOutline: "#96C746",
	lightGreen: "#FAFDF2",
	darkGrey: "#3D4149",
	standardRed: "#FF4040",
	lightRed: "rgba(254, 61, 60, 0.07)",
	lightGrey: "#6F7480",
	standardBlue: "#3F52E4",
};
export const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	commonHorizontalMargin: {
		marginHorizontal: "1.5625rem",
	},
	commonMargin: {
		marginHorizontal: "1.5625rem",
		marginVertical: "1.5625rem",
	},
	eventTopSpacing: {
		marginTop: "1.563rem",
	},
	topSection: {
		flex: 1,
	},
	cardSection: {
		//borderRadius: 30,
		overflow: "hidden",
	},
	columnContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	imageContainer: {
		height: "2.25rem",
		width: "2.25rem",
		alignItems: "center",
		justifyContent: "center",
	},
	bottomSection: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 100,
		zIndex: -1,
	},
	headerText: {
		fontSize: "1.75rem",
		lineHeight: "2.0625rem",
		letterSpacing: "0.04rem",
		color: "#292C35",
		fontWeight: 500,
		fontFamily: "GilroySemiBold",
		textAlign: "center",
		marginHorizontal: "2.906rem",
		marginTop: "4.375rem",
	},
	maxWidth: {
		width: "86.66%",
		maxWidth: "20.3125rem",
	},
	//bolden text
	extraBold: {
		fontFamily: "GilroyExtraBold",
		fontWeight: 500,
	},
	semiBold: {
		fontWeight: 500,
		fontFamily: "GilroySemiBold",
	},
	//for tiles
	tileSection: {
		borderRadius: 15,
		justifyContent: "center",
		textAlign: "center",
	},
	tileSection2: {
		borderRadius: 8,
		justifyContent: "center",
		textAlign: "center",
		maxWidth: "40rem",
		width: "100%",
		marginHorizontal: "auto",
		backgroundColor: GlobalColors.lightRed,
	},
	gilRoy: {
		paddingTop: "0.25rem",
		fontFamily: "Gilroy",
	},
	tileShadow: {
		boxShadow: "0px -6px 50px #ABBAC2",
	},
	eventTileShadow: {
		boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
	},
	eventText: {
		lineHeight: "1.563rem",
		letterSpacing: "0.02rem",
		color: "#292C35",
		fontWeight: 500,
		fontFamily: "Gilroy",
	},
	eventTextBig: {
		fontSize: "1.25rem",
	},
	eventTextMedium: {
		fontSize: "0.938rem",
	},
	eventTextSmall: {
		fontSize: "0.813rem",
	},
	eventTitle: {
		marginTop: "1.5rem",
		textAlign: "center",
	},
	underline: {
		textDecorationLine: "underline",
	},
	//center objects and keep it contained in the middle of the screen
	centerObjectsInMiddle: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	descriptionText: {
		fontFamily: "SFPro",
		fontWeight: "bold",
		fontSize: 16,
		color: GlobalColors.darkGrey,
		paddingLeft: 20,
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
		fontFamily: "GilroyMedium",
		fontSize: "0.9375rem",
		fontWeight: "500",
		letterSpacing: "0.04rem",
		lineHeight: "1.563rem",
	},
	buttonText: {
		color: "white",
		fontSize: "0.9375rem",
		fontFamily: "GilroyExtraBold",
		letterSpacing: "0.04rem",
	},
	buttonText2: {
		color: GlobalColors.standardRed,
		fontSize: "0.9375rem",
		fontFamily: "GilroyExtraBold",
		letterSpacing: "0.04rem",
	},
	iconBox: {
		height: "3.75rem",
		width: "3.75rem",
		backgroundColor: GlobalColors.lightRed,
		borderRadius: "0.734rem",
		alignItems: "center",
		justifyContent: "center",
	},
	//red button with white text
	submitButton: {
		borderRadius: "0.5rem",
		width: "13.5rem",
		height: "3.25rem",
		backgroundColor: GlobalColors.standardRed,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	//disabled submit button color
	disabled_submitButton: {
		backgroundColor: GlobalColors.lightestGrey,
	},
	//white button with red outlines and text
	submitButton2: {
		borderRadius: "0.5rem",
		width: "13.5rem",
		height: "3.25rem",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		borderColor: GlobalColors.standardRed,
		borderWidth: 1,
	},
	//white button with black outlines and text
	feedbackButton: {
		width: "6.25rem",
		height: "3.25rem",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		borderColor: GlobalColors.lightestGrey,
		borderWidth: 1,
		borderRadius: "0.625rem",
	},
	feedbackButton2: {
		width: "12.125rem",
		height: "1.813rem",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		borderColor: GlobalColors.lightestGrey,
		borderWidth: 1,
		borderRadius: "0.9375rem",
	},
	feedbackButton3: {
		width: "7rem",
		height: "1.813rem",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		borderColor: GlobalColors.lightestGrey,
		borderWidth: 1,
		borderRadius: "0.9375rem",
	},
	feedbackButton_Pressed: {
		borderColor: GlobalColors.darkGrey,
		backgroundColor: GlobalColors.lightestGrey,
	},
	feedbackButton_UnPressed: {},
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
		borderRadius: 8,
		placeholderTextColor: "lightgrey",
		backgroundColor: "white",
	},
	errorText: {
		fontSize: 15,
		fontFamily: "SFPro",
		color: "red",
		textAlign: "center",
	},

	infoSection: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: GlobalColors.lightestGrey,
		borderRadius: 7,
		marginHorizontal: 20,
		paddingVertical: 15,
	},

	infoSectionFilled: {
		backgroundColor: GlobalColors.veryLightGrey,
		borderRadius: 7,
		marginHorizontal: 20,
		paddingVertical: 15,
	},
	infoSectionFilledGreen: {
		backgroundColor: GlobalColors.lightGreen,
		borderWidth: 1,
		borderColor: GlobalColors.greenOutline,
		borderRadius: 7,
		marginHorizontal: 20,
		paddingVertical: 15,
	},

	infoSectionFilledBlue: {
		backgroundColor: GlobalColors.lightBlue,
		borderWidth: 1,
		borderColor: GlobalColors.blueOutline,
		borderRadius: 7,
		borderRadius: 7,
		marginHorizontal: 20,
		paddingVertical: 15,
	},
	toggleSwitch: {
		height: 31,
		width: 51,
	},
	greyLine: {
		borderBottomColor: GlobalColors.lightBlack,
		borderBottomWidth: 1,
		opacity: 0.15,
	},
});
