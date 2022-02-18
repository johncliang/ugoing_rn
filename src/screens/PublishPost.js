import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	Clipboard,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { fs } from "../Firebase/firebase";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
// The below import isn't working for me -- setString fails
//import Clipboard from "@react-native-community/clipboard";
import { ShareComponent } from "../components/ShareComponent";
import Footer from "../components/Footer";

// route.params - eventID to event
export const PublishPost = ({ route, navigation }) => {
	//console.log("passed info is " + JSON.stringify(route.params));
	const [eventDetails, setEventDetails] = useState({});
	const [url, setURL] = useState("");

	const { eventID } = route.params;

	const [toggleAboutText, setToggleAboutText] = useState({});

	useEffect(() => {
		if (eventID == "") {
			console.log("route params not found");
			return;
		}
		var docRef = fs.collection("events").doc(eventID);
		//var docRef = fs.collection('events').doc("cks0i7SlWYGD8Vy4Cr8z");

		docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					setEventDetails(doc.data());
					setURL(`ugoing.us/u/${eventID}`);
				} else {
					console.log(
						"ERROR: Document with eventID " + route.params + " not found!"
					);
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}, [route.params?.eventID]);

	//Event Info
	const eventCard = () => {
		return (
			//Event card layout
			<View
				style={[
					GlobalStyles.tileSection,
					GlobalStyles.eventTileShadow,
					GlobalStyles.commonHorizontalMargin,
					{ backgroundColor: "white" },
				]}
			>
				{/*Setting Margins*/}
				<View style={GlobalStyles.commonMargin}>
					{/*Event Title + Host Name + Host Phone Number Section*/}
					<View>
						{/*Event Title*/}
						<Text
							style={[
								GlobalStyles.eventText,
								GlobalStyles.eventTextBig,
								GlobalStyles.extraBold,
								{ marginBottom: "0.934rem" },
							]}
						>
							{eventDetails.eventName}
						</Text>
						{/* Event Host */}
						<View
							style={[styles.eventTextAndIcons, { marginBottom: "0.5rem" }]}
						>
							<Image
								style={{
									width: "0.8125rem",
									height: "0.8125rem",
									margin: "auto auto auto auto",
								}}
								source={require("../assets/EventOrganizer-Icon.svg")}
							/>
							<Text
								style={[
									GlobalStyles.bodyText,
									GlobalStyles.eventTextMedium,
									GlobalStyles.semiBold,
									{ color: GlobalColors.standardRed, alignItems: "center" },
								]}
							>
								{" "}
								{eventDetails.organizerName}
							</Text>
						</View>
						{/* Event Phone Number */}
						<View
							style={[styles.eventTextAndIcons, { marginBottom: "0.5rem" }]}
						>
							<Image
								style={{
									width: "0.8125rem",
									height: "0.8125rem",
									margin: "auto auto auto auto",
								}}
								source={require("../assets/EventPhone-Icon.svg")}
							/>
							<Text
								style={[
									GlobalStyles.bodyText,
									GlobalStyles.eventTextMedium,
									GlobalStyles.semiBold,
									{ color: GlobalColors.standardRed, alignItems: "center" },
								]}
							>
								{" "}
								{eventDetails.phoneNumber}
							</Text>
						</View>
					</View>
					{/*Grey Line*/}
					<View style={[GlobalStyles.greyLine, styles.lineStyling]}> </View>

					{/* Date Section */}
					<View>
						{/*Date Title */}
						<View
							style={[styles.eventTextAndIcons, { marginBottom: "0.75rem" }]}
						>
							<Image
								style={{
									width: "0.8125rem",
									height: "0.8125rem",
									margin: "auto auto auto auto",
								}}
								source={require("../assets/EventCalendar-Icon.svg")}
							/>
							<Text
								style={[
									GlobalStyles.bodyText,
									GlobalStyles.eventTextMedium,
									GlobalStyles.semiBold,
									{
										color: GlobalColors.lightGrey,
										alignItems: "center",
										paddingTop: "0.17rem",
									},
								]}
							>
								{" "}
								{"Date"}
							</Text>
						</View>
						{/*Start and End time*/}
						<View
							style={[
								GlobalStyles.centerObjectsInMiddle,
								{ marginBottom: "0.75rem" },
							]}
						>
							<View></View>
							<View style={GlobalStyles.columnContainer}>
								<Text
									style={[
										GlobalStyles.bodyText,
										GlobalStyles.eventTextMedium,
										GlobalStyles.semiBold,
										{ color: GlobalColors.standardRed, alignItems: "center" },
									]}
								>
									{moment(eventDetails.startDate).format("MMM DD hh:mm a") +
										"   "}
								</Text>
								<Text
									style={[
										GlobalStyles.bodyText,
										GlobalStyles.eventTextMedium,
										{ alignItems: "center" },
									]}
								>
									{"To"}
								</Text>
								<Text
									style={[
										GlobalStyles.bodyText,
										GlobalStyles.eventTextMedium,
										GlobalStyles.semiBold,
										{ color: GlobalColors.standardRed, alignItems: "center" },
									]}
								>
									{"   " +
										moment(eventDetails.endDate).format("MMM DD hh:mm a")}
								</Text>
							</View>
							<View></View>
						</View>
					</View>

					{/*Grey Line*/}
					<View style={[GlobalStyles.greyLine, styles.lineStyling]}> </View>

					{/*Event Location Section*/}
					<View>
						{/*Event Location Title*/}
						<View
							style={[styles.eventTextAndIcons, { marginBottom: "0.75rem" }]}
						>
							<Image
								style={{
									width: "0.8125rem",
									height: "0.8125rem",
									margin: "auto auto auto auto",
								}}
								source={require("../assets/EventLocation-Icon.svg")}
							/>
							<Text
								style={[
									GlobalStyles.bodyText,
									GlobalStyles.eventTextMedium,
									GlobalStyles.semiBold,
									{
										color: GlobalColors.lightGrey,
										alignItems: "center",
										paddingTop: "0.17rem",
									},
								]}
							>
								{" "}
								{"Location"}
							</Text>
						</View>

						{/*Event Address */}
						<Text
							style={[
								GlobalStyles.bodyText,
								GlobalStyles.eventTextMedium,
								,
								{
									color: GlobalColors.lightBlack,
									alignItems: "center",
									marginBottom: "0.625rem",
									textDecorationLine: "underline",
								},
							]}
						>
							{eventDetails.eventLocation == ""
								? "Event Location"
								: eventDetails.eventLocation}
						</Text>

						{/*Arrival Instructions*/}
						<Text
							style={[
								GlobalStyles.bodyText,
								GlobalStyles.eventTextSmall,
								,
								{
									color: GlobalColors.standardBlue,
									alignItems: "center",
									marginBottom: "0.625rem",
								},
							]}
						>
							{eventDetails.arrivalInstructions == ""
								? "Arrival Instructions"
								: eventDetails.arrivalInstructions}
						</Text>
					</View>

					{/*Grey Line*/}
					<View style={[GlobalStyles.greyLine, styles.lineStyling]}> </View>

					{/*About Section*/}
					<View>
						{/*About Title*/}
						<View
							style={[styles.eventTextAndIcons, { marginBottom: "0.75rem" }]}
						>
							<Image
								style={{
									width: "0.8125rem",
									height: "0.8125rem",
									margin: "auto auto auto auto",
								}}
								source={require("../assets/EventAbout-Icon.svg")}
							/>
							<Text
								style={[
									GlobalStyles.bodyText,
									GlobalStyles.eventTextMedium,
									GlobalStyles.semiBold,
									{
										color: GlobalColors.lightGrey,
										alignItems: "center",
										paddingTop: "0.17rem",
									},
								]}
							>
								{" "}
								{"About"}
							</Text>
						</View>
						{/*Event Details*/}
						<Text
							style={[
								GlobalStyles.bodyText,
								GlobalStyles.eventTextSmall,
								{ color: GlobalColors.lightBlack, alignItems: "center" },
							]}
						>
							{eventDetails.eventDetails}

							{/*(typeof(eventDetails.eventDetails) !== undefined && eventDetails.eventDetails != null) 
                                (eventDetails.eventDetails == '') ? 'Event Details' : eventDetails.eventDetails.length <= 50 ? eventDetails.eventDetails.length : !toggleAboutText ? eventDetails.eventDetails.substring(0, 50) : eventDetails.eventDetails}
                                {eventDetails.eventDetails.length > 50 &&
                                    <Text onPress = {toggleAboutTextLength} style={[GlobalStyles.bodyText, GlobalStyles.eventTextSmall, {color: GlobalColors.standardRed, alignItems: "center", textDecorationLine: 'underline'}]}>
                                        {!toggleAboutText ? "View More" : "View Less"}
                                    </Text>
                                
                                */}
						</Text>
					</View>
				</View>
			</View>
		);
	};

	const addCalendarButton = () => {
		return (
			<TouchableOpacity
				style={[
					GlobalStyles.submitButton,
					GlobalStyles.commonHorizontalMargin,
					GlobalStyles.eventTopSpacing,
					styles.buttonSpacing,
					{ width: "auto", marginBottom: "1.113em", position: "sticky" },
				]}
				onPress={() => {
					console.log(navigation);
					navigation.navigate("Signup");
				}}
			>
				<Text style={GlobalStyles.buttonText}>Add to Calendar</Text>
			</TouchableOpacity>
		);
	};

	const copyEventButton = () => {
		return (
			<TouchableOpacity
				style={[
					GlobalStyles.submitButton2,
					GlobalStyles.commonHorizontalMargin,
					styles.buttonSpacing,
					{ width: "auto", marginTop: "1.25em" },
				]}
				onPress={() => {
					Clipboard.setString('' + eventDetails.arrivalInstructions + '\' from ' + eventDetails.startDate + ' at ' + eventDetails.eventLocation + '. \n \nSee more details: ' + url);
					
				}}
			>
				<View style={[styles.eventTextAndIcons]}>
					<Image
						style={{
							width: "1.281rem",
							height: "1.281rem",
							margin: "auto auto auto auto",
						}}
						source={require("../assets/Copy-Icon.svg")}
					/>
					<Text style={[GlobalStyles.buttonText2]}>Copy Event Link</Text>
				</View>
			</TouchableOpacity>
		);
	};

	const feedbackButton = () => {
		return (
			<TouchableOpacity
				style={[
					GlobalStyles.submitButton2,
					GlobalStyles.commonHorizontalMargin,
					styles.buttonSpacing,
					{ width: "auto", marginTop: "1.25em" },
				]}
				onPress={() => navigation.navigate("FeedbackHome")}
			>
				<Text style={[GlobalStyles.buttonText2]}>Feedback on UGoing</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View
			style={[
				GlobalStyles.container,
				{ backgroundColor: GlobalColors.lightRed },
			]}
		>
			{addCalendarButton()}
			{eventCard()}
			{copyEventButton()}
			{feedbackButton()}
			<View style={GlobalStyles.bottomSection}></View>
			<Footer homepage={false} publish={true} navigation={navigation}></Footer>
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
	buttonSpacing: {},
	eventTextAndIcons: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	eventDateText: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	lineStyling: {
		marginVertical: "1.25rem",
		width: "auto",
	},
	standardHoriMargin: {
		marginHorizontal: "1.25rem",
	},
	sticky: {
		position: "fixed",
		top: 0,
		width: "100%",
	},
});
