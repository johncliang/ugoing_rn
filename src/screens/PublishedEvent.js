import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { fs } from "../Firebase/firebase";
import { Ionicons } from "@expo/vector-icons";
import { ShareComponent } from "../components/ShareComponent";

// route.params - eventID to event
export const PublishedEvent = ({ route, navigation }) => {
	//console.log("passed info is " + JSON.stringify(route.params));
	const [eventDetails, setEventDetails] = useState({});
	const [url, setUrl] = useState("");

	const { eventID } = route?.params;

	useEffect(() => {
		console.log(route);
		if (eventID == "") {
			console.log("route params not found");
			return;
		}
		var docRef = fs.collection("events").doc(eventID);

		docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					setEventDetails(doc.data());
					setUrl(`ugoing.us/u/${eventID}`);
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

	const getTitleSection = () => {
		// check to make sure firebase data exists
		if (!eventDetails || !eventDetails.eventName) {
			return <View></View>;
		}

		return (
			<View style={styles.eventTitleSection}>
				<Text style={GlobalStyles.subheaderText}>{eventDetails.eventName}</Text>
			</View>
		);
	};

	const getCalendarSection = () => {
		<View
			style={[
				GlobalStyles.infoSectionFilledBlue,
				{ flexDirection: "row", marginVertical: 15 },
			]}
		>
			<View
				style={{
					width: "75%",
					borderColor: GlobalColors.blueOutline,
					borderRightWidth: 1,
				}}
			>
				<Text style={GlobalStyles.subheaderText_smaller}>
					Add to Calendar 📅
				</Text>
			</View>
			<View
				style={{
					width: "25%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Ionicons name="add-outline" size={32} color="black" />
			</View>
		</View>;
	};

	const getShareSection = () => {
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
						Share {eventDetails.eventName}
					</Text>
				</View>
				<View
					style={{
						width: "25%",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							console.log("pressed");
						}}
					>
						<Ionicons name="share-outline" size={32} color="black" />
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	return (
		<View style={[GlobalStyles.container, { justifyContent: "flex-start" }]}>
			<View style={{ justifyContent: "flex-start" }}>
				<View style={styles.eventField}>
					{getTitleSection()}

					<Text style={GlobalStyles.descriptionText}>
						{eventDetails.eventDetails}
					</Text>
				</View>
				<View style={styles.eventField}>
					<Text style={GlobalStyles.subheaderText}>When 🕐</Text>
					<Text style={GlobalStyles.descriptionText}>
						{eventDetails.startDate} to {eventDetails.endDate}
					</Text>
				</View>
				<View style={styles.eventField}>
					<Text style={GlobalStyles.subheaderText}>Where 🌎</Text>
					<Text style={GlobalStyles.descriptionText}>
						{eventDetails.eventLocation}
						{"\n\n"}
						{eventDetails.arrivalInstructions}
					</Text>
				</View>
				<View style={styles.eventField}>
					<Text style={GlobalStyles.subheaderText}>Who 📞</Text>
					<Text style={GlobalStyles.descriptionText}>
						{eventDetails.organizerName}
						{"\n"}
						{eventDetails.phoneNumber}
					</Text>
				</View>
			</View>
			{getCalendarSection()}
			<ShareComponent url={url} eventName={eventDetails.eventName} />
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
	eventField: {
		paddingVertical: 5,
	},
});
