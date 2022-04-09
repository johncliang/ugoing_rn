import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	TextInput,
	TouchableOpacity,
	FlatList,
	//Switch,
} from "react-native";
import {
	View,
	Text,
	TextArea,
	Input,
	Box,
	Progress,
	HStack,
	Center,
	Heading,
	Divider,
	FormControl,
	Button,
	Switch,
	VStack,
} from "native-base";
import { GlobalColors, GlobalStyles } from "../styles/GlobalStyles";
import { DatePicker, TimePicker, Space } from "antd";

import moment from "moment";
import { fs } from "../Firebase/firebase";

import AutocompleteSearch from "../components/AutocompleteSearch";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_red.css";
import { BrowserView, MobileView } from "react-device-detect";

const STATES = {
	NAME: 0,
	TIME: 1,
	PLACE: 2,
	PEOPLE: 3,
	FINISH: 4,
};

// Componentizing rendered sections outside main component to avoid re-render loop
// which causes keyboard to lose focus. This is a stylistic choice to avoid an overly
// lengthy return method
const NameSection = ({
	title,
	setTitle,
	description,
	setDescription,
	errorStatus,
	validateSection,
}) => {
	return (
		<Center>
			<Box
				borderRadius={"lg"}
				bg="primary.200"
				minW="20.313rem"
				minH="14.063rem"
				mt="1.563rem"
			>
				<Text
					mt="1.25rem"
					ml="1.25rem"
					mb="0.938rem"
					fontSize=".938rem"
					fontStyle={"semibold"}
				>
					Event Title
					<Text fontSize=".938rem" fontStyle={"semibold"} color="red.500">
						{" "}
						*
					</Text>
				</Text>
				<Input
					minW="17.813rem"
					minH="3.25rem"
					mx="1.25rem"
					bg="white"
					borderColor="neutral.400"
					placeholder="John's Surprise Party"
					value={title}
					onChangeText={setTitle}
				></Input>

				<Text
					mt=".938rem"
					ml="1.25rem"
					mb="0.938rem"
					fontSize=".938rem"
					fontStyle={"semibold"}
				>
					Event Details
				</Text>
				<TextArea
					minW="17.813rem"
					mx="1.25rem"
					mb="1.25rem"
					bg="white"
					borderColor="neutral.400"
					py="8px"
					pt="16px"
					placeholder="Enter your event details here!"
					value={description}
					onChangeText={setDescription}
				></TextArea>
			</Box>
			<Button h="3.25rem" w="11rem" mt="1.563rem" onPress={validateSection}>
				Next
			</Button>
			<Text
				mt=".938rem"
				ml="1.25rem"
				mb="0.938rem"
				fontSize=".938rem"
				color="error.500"
			>
				{errorStatus}
			</Text>
		</Center>
	);
};

const TimeSection = ({
	startDate,
	onChangeDate,
	endDate,
	showEndDate,
	setShowEndDate,
	validateSection,
	errorStatus,
	description,
	navigateToSection,
}) => {
	return (
		<View>
			<Center>
				<Box
					borderRadius={"lg"}
					bg="primary.200"
					minW="20.313rem"
					minH="14.063rem"
					mt="1.563rem"
					flex="1"
					justifyContent={"space-between"}
				>
					<View>
						<Text
							mt="1.25rem"
							ml="1.25rem"
							mb="0.938rem"
							fontSize=".938rem"
							fontStyle={"semibold"}
						>
							Start Time
							<Text fontSize=".938rem" fontStyle={"semibold"} color="red.500">
								{" "}
								*
							</Text>
						</Text>
						<View mx="1.25rem">
							<Flatpickr
								options={{
									enableTime: true,
									time_24hr: false,
									defaultDate: startDate.format("YYYY-MM-DD HH:mm"),
									minuteIncrement: 10,
									//minDate: moment().format('YYYY-MM-DD HH:mm'),
								}}
								//enableTime={true}
								/*onChange={(dates) =>
                                            onChangeDate(moment(dates,"ddd MMM DD YYYY HH:mm:ss ZZ "), true)
                                        }*/
								onChange={(dstr, dobjs, fp) =>
									setTimeout(function () {
										var i = fp.latestSelectedDateObj;
										const d = i ? i : new Date();
										const mins = d.getMinutes();

										if (mins % 5)
											d.setMinutes(5 * Math.round(d.getMinutes() / 5));

										d.setDate(onChangeDate(
											moment(d, "ddd MMM DD YYYY HH:mm ZZ "),
											true
										));
									}, 1000)
								}

								//value={}
								//onChange={(dates) => onChangeDate(dates, true)}
							/>
						</View>
					</View>

					{showEndDate && (
						<React.Fragment>
							<Text
								mt=".938rem"
								ml="1.25rem"
								mb="0.938rem"
								fontSize=".938rem"
								fontStyle={"semibold"}
							>
								End Time
								<Text fontSize=".938rem" fontStyle={"semibold"} color="red.500">
									{" "}
									*
								</Text>
							</Text>
							<View mx="1.25rem">
								<Flatpickr
									options={{
										enableTime: true,
										time_24hr: false,
										defaultDate: endDate.format("YYYY-MM-DD HH:mm"),
										minuteIncrement: 10,
										//minDate: startDate.format("YYYY-MM-DD HH:mm"),
									}}
									onChange={(dstr, dobjs, fp) =>
										setTimeout(function () {
											var i = fp.latestSelectedDateObj;
											const d = i ? i : new Date();
											const mins = d.getMinutes();

											if (mins % 5)
												d.setMinutes(5 * Math.round(d.getMinutes() / 5));

											let newDate = (onChangeDate(
												moment(d, "ddd MMM DD YYYY HH:mm ZZ "),
												false
											));

											console.log(newDate);

											const newD = new Date();
											newDate = moment(newDate);

											d.setDate(newDate);
										}, 1000)
									}
								/>
							</View>
						</React.Fragment>
					)}
					<HStack
						justifyContent={"space-between"}
						mt="2.125rem"
						mx="1.25rem"
						mb="1.25rem"
					>
						<Text fontSize=".938rem" fontStyle={"semibold"}>
							All Day
						</Text>
						<Switch
							value={!showEndDate}
							onToggle={() => setShowEndDate(!showEndDate)}
							offTrackColor="neutral.400"
							onTrackColor="primary.300"
							onThumbColor="primary.300"
							size="lg"
						></Switch>
					</HStack>
					{/* </MobileView> */}
				</Box>
				<Button h="3.25rem" w="11rem" mt="1.563rem" onPress={validateSection}>
					Next
				</Button>
				<HStack justifyContent="space-between" minW="20.313rem" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Event Description
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.NAME)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
			</Center>
			<Text
				textAlign={"flex-start"}
				mt="0.813rem"
				fontWeight={400}
				fontSize={".938rem"}
			>
				{description == "" ? "(No event description)" : description}
			</Text>
		</View>
	);
};

const PlaceSection = ({
	location,
	setLocation,
	instructions,
	setInstructions,
	validateSection,
	errorStatus,
	title,
	description,
	startDate,
	showEndDate,
	endDate,
	navigateToSection,
}) => {
	return (
		<View>
			<Center>
				<Box
					borderRadius={"lg"}
					bg="primary.200"
					minW="20.313rem"
					minH="14.063rem"
					mt="1.563rem"
				>
					<Text
						mt="1.25rem"
						ml="1.25rem"
						mb="0.938rem"
						fontSize=".938rem"
						fontStyle={"semibold"}
					>
						Location
					</Text>
					{/* <Input
						minW="17.813rem"
						minH="3.25rem"
						mx="1.25rem"
						bg="white"
						borderColor="neutral.400"
						placeholder="100 Moffett Blvd"
						value={location}
						onChangeText={setLocation}
					></Input> */}
					<AutocompleteSearch
						onChangeOutputText={(text) => {
							setLocation(text);
						}}
						value={location}
					/>

					<Text
						mt=".938rem"
						ml="1.25rem"
						mb="0.938rem"
						fontSize=".938rem"
						fontStyle={"semibold"}
					>
						Arrival Instructions
					</Text>
					<Input
						minW="17.813rem"
						minH="3.25rem"
						mx="1.25rem"
						mb="1.25rem"
						bg="white"
						borderColor="neutral.400"
						placeholder="There's guest parking in Lot B!"
						value={instructions}
						onChangeText={setInstructions}
					></Input>
				</Box>
				<Button h="3.25rem" w="11rem" mt="1.563rem" onPress={validateSection}>
					Next
				</Button>
				{errorStatus != "" && (
					<Text mt=".938rem" ml="1.25rem" fontSize=".938rem" color="error.500">
						{errorStatus}
					</Text>
				)}
			</Center>
			<VStack>
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Event Description
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.NAME)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{description == "" ? "(No event description)" : description}
				</Text>
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Date
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.TIME)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{startDate.format("M/D/YYYY, h:mm a").toString()}
					<Text>
						{showEndDate &&
							" to " + endDate.format("M/D/YYYY, h:mm a").toString()}
					</Text>
				</Text>
			</VStack>
		</View>
	);
};

const PeopleSection = ({
	organizerName,
	setOrganizerName,
	phoneNumber,
	setPhoneNumber,
	showPhoneNumber,
	setShowPhoneNumber,
	validateSection,
	errorStatus,
	title,
	description,
	startDate,
	showEndDate,
	endDate,
	location,
	instructions,
	navigateToSection,
}) => {
	return (
		<View>
			<Center>
				<Box
					borderRadius={"lg"}
					bg="primary.200"
					minW="20.313rem"
					minH="14.063rem"
					mt="1.563rem"
				>
					<Text
						mt="1.25rem"
						ml="1.25rem"
						mb="0.938rem"
						fontSize=".938rem"
						fontStyle={"semibold"}
					>
						Host Contact Information
					</Text>
					<Input
						minW="17.813rem"
						minH="3.25rem"
						mx="1.25rem"
						bg="white"
						borderColor="neutral.400"
						placeholder="Host Name"
						value={organizerName}
						onChangeText={setOrganizerName}
					></Input>
					{showPhoneNumber && (
						<Input
							mt="1rem"
							minW="17.813rem"
							minH="3.25rem"
							mx="1.25rem"
							bg="white"
							borderColor="neutral.400"
							placeholder="Host Phone Number"
							keyboardType={"phone-pad"}
							value={phoneNumber}
							onChangeText={setPhoneNumber}
							maxLength={10}
						></Input>
					)}
					<HStack
						justifyContent={"space-between"}
						mt="1.563rem"
						mx="1.25rem"
						mb="1.25rem"
					>
						<Text fontSize=".938rem" fontStyle={"semibold"}>
							Add a phone number for {"\n"} guests to call?
						</Text>
						<Switch
							value={showPhoneNumber}
							onToggle={() => setShowPhoneNumber(!showPhoneNumber)}
							offTrackColor="neutral.400"
							onTrackColor="primary.300"
							onThumbColor="primary.300"
							size="lg"
						></Switch>
					</HStack>
				</Box>
				<Button h="3.25rem" w="11rem" mt="1.563rem" onPress={validateSection}>
					Next
				</Button>
				{errorStatus != "" && (
					<Text mt=".938rem" ml="1.25rem" fontSize=".938rem" color="error.500">
						{errorStatus}
					</Text>
				)}
			</Center>
			{/* Editable Fields Below */}
			<VStack>
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Event Description
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.NAME)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{description == "" ? "(No event description)" : description}
				</Text>
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Date
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.TIME)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{startDate.format("M/D/YYYY, h:mm a").toString()}
					<Text>
						{showEndDate &&
							" to " + endDate.format("M/D/YYYY, h:mm a").toString()}
					</Text>
				</Text>
				{/* Location */}
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Location
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.PLACE)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{location == "" ? "(No location info)" : location}
				</Text>
			</VStack>
		</View>
	);
};

const FinishSection = ({
	validateSection,
	errorStatus,
	title,
	description,
	startDate,
	showEndDate,
	endDate,
	location,
	instructions,
	organizerName,
	phoneNumber,
	showPhoneNumber,
	navigateToSection,
}) => {
	return (
		<View>
			<VStack>
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Event Description
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.NAME)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{description == "" ? "(No event description)" : description}
				</Text>
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Date
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.NAME)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{startDate.format("M/D/YYYY, h:mm a").toString()}
					<Text>
						{showEndDate &&
							" to " + endDate.format("M/D/YYYY, h:mm a").toString()}
					</Text>
				</Text>
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Location
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.PLACE)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{location == "" ? "(No location info)" : location}
				</Text>
				<HStack justifyContent="space-between" mt="1.625rem">
					<Text color="neutral.400" fontStyle="semibold">
						Host
					</Text>
					<TouchableOpacity onPress={() => navigateToSection(STATES.PEOPLE)}>
						<Text color="primary.500" fontStyle="bold">
							Edit
						</Text>
					</TouchableOpacity>
				</HStack>
				<Text
					textAlign={"flex-start"}
					mt="0.813rem"
					fontWeight={400}
					fontSize={".938rem"}
				>
					{organizerName == "" ? "(No host info)" : organizerName}
				</Text>
				{phoneNumber != "" && (
					<Text
						textAlign={"flex-start"}
						mt="0.813rem"
						fontWeight={400}
						fontSize={".938rem"}
					>
						{phoneNumber}
					</Text>
				)}
				<Center>
					<Button
						h="3.25rem"
						w="11rem"
						my="1.563rem"
						onPress={() => validateSection()}
					>
						Publish
					</Button>
					<Text textAlign={"center"}>
						Publishing your event will make it {"\n"}
						viewable to the public or anyone with the link. {"\n"} You’re almost
						done!
					</Text>
				</Center>
			</VStack>
		</View>
	);
};

export const CreateEvent = ({ navigation }) => {
	const [status, setStatus] = useState({
		state: STATES.NAME,
	});

	const [eventName, setEventName] = useState("");
	const [eventDetails, setEventDetails] = useState("");

	const [startDate, setStartDate] = useState(
		moment().startOf("hour").add(1, "hours")
	);
	const [endDate, setEndDate] = useState(
		moment().startOf("hour").add(2, "hours")
	);

	const [dateEntryError, setDateEntryError] = useState("");

	const [showEndDate, setShowEndDate] = useState(true);

	// TODO: Change to be based on position / Google Maps
	const [eventLocation, setEventLocation] = useState("");
	const [arrivalInstructions, setArrivalInstructions] = useState("");

	const [phoneNumber, setPhoneNumber] = useState("");
	const [organizerName, setOrganizerName] = useState("");
	const [showPhoneNumber, setShowPhoneNumber] = useState(true);

	const [errorStatus, setErrorStatus] = useState("");

	const datepickerRef = React.createRef();

	function navigateToSection(section) {
		if (status.state > section) {
			setStatus({ state: section });
		}
	}

	const showProgressBar = () => {
		var progress = status.state;
		return (
			<Box
				flex="1"
				flexDir={"row"}
				px="5"
				justifyContent={"space-around"}
				bg="white"
				py="3"
				borderBottomStyle={{ shadow: "1" }}
			>
				<TouchableOpacity
					onPress={() => navigateToSection(STATES.NAME)}
					style={{ width: "22%" }}
					disabled={status.state <= STATES.NAME}
				>
					<Progress
						colorScheme="primary"
						value={progress > STATES.NAME ? 100 : 0}
						width="100%"
						size="xs"
						bg="neutral.300"
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigateToSection(STATES.TIME)}
					style={{ width: "22%" }}
					disabled={status.state <= STATES.TIME}
				>
					<Progress
						colorScheme="primary"
						value={progress > STATES.TIME ? 100 : 0}
						size="xs"
						bg="neutral.300"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigateToSection(STATES.PLACE)}
					style={{ width: "22%" }}
					disabled={status.state <= STATES.PLACE}
				>
					<Progress
						colorScheme="primary"
						value={progress > STATES.PLACE ? 100 : 0}
						size="xs"
						bg="neutral.300"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigateToSection(STATES.PEOPLE)}
					style={{ width: "22%" }}
					disabled={status.state <= STATES.PEOPLE}
				>
					<Progress
						colorScheme="primary"
						value={progress > STATES.PEOPLE ? 100 : 0}
						size="xs"
						bg="neutral.300"
					/>
				</TouchableOpacity>
			</Box>
		);
	};

	const onChangeDate = (date, isStartTime) => {
		console.log(date);
		if (isStartTime) {
			//console.log(date.add(1, "hours"));
			let adjustedDate = startDate;
			adjustedDate.add(1, "hours");
			setStartDate(date);
			setEndDate(adjustedDate);
			if (endDate.isBefore(date)) {
				console.log("is before");
				console.log("StartDate: ", startDate);
				setEndDate(adjustedDate);
				return adjustedDate;
			}
			return date;
		} else {
			console.log("date: ", date);
			if (date.isBefore(startDate)) {
				console.log("is before");
				console.log("StartDate: ", startDate);
				
				let adjustedDate = startDate;
				adjustedDate.add(1, "hours");
				console.log("adjustedDate: ", adjustedDate)
				setEndDate(adjustedDate);
				return adjustedDate;
			} else {
				setEndDate(date);
				return date;
			}
			
		}
	};

	function disabledDates(current) {
		return current < startDate;
	}

	function incrementStatus() {
		setErrorStatus("");
		setStatus({ state: status.state + 1 });
	}

	function validateSection() {
		switch (status.state) {
			case STATES.NAME:
				if (eventName === "")
					setErrorStatus("Please enter a valid event name!");
				else incrementStatus();
				return;
			case STATES.TIME:
				if (startDate === null)
					setErrorStatus("Please input a valid start date!");
				else if (endDate.isBefore(startDate))
					setErrorStatus("Cannot have an event end before the start time!");
				else if (startDate.isBefore(moment()))
					setErrorStatus("Cannot set events in the past");
				else incrementStatus();
				return;
			case STATES.PLACE:
				/*if (eventLocation === "")
					setErrorStatus("Please enter a valid location!");
				else incrementStatus();*/
				incrementStatus();
				return;
			case STATES.PEOPLE:
				incrementStatus();
				return;
			case STATES.FINISH:
				submitData();
				return;
		}
	}

	// TODO: Pass in optional user field to tether events to a uid
	function submitData() {
		let eventData = {};
		if (showEndDate) {
			eventData = {
				eventName: eventName,
				eventDetails: eventDetails,
				startDate: startDate.format("M/D/YYYY, h:mm a").toString(),
				endDate: endDate.format("M/D/YYYY, h:mm a").toString(),
				eventLocation: eventLocation,
				arrivalInstructions: arrivalInstructions,
				phoneNumber: phoneNumber,
				organizerName: organizerName,
			};
		} else {
			eventData = {
				eventName: eventName,
				eventDetails: eventDetails,
				startDate: startDate.format("M/D/YYYY, h:mm a").toString(),
				eventLocation: eventLocation,
				arrivalInstructions: arrivalInstructions,
				phoneNumber: phoneNumber,
				organizerName: organizerName,
			};
		}

		console.log(eventData);

		fs.collection("events")
			.add(eventData)
			.then((value) => {
				console.log(value.id);
				navigation.navigate("Publish", {
					eventID: value.id,
					fromCreate: true,
				});
			});
	}

	function getSection() {
		switch (status.state) {
			case STATES.NAME:
				return (
					<NameSection
						title={eventName}
						setTitle={setEventName}
						description={eventDetails}
						setDescription={setEventDetails}
						errorStatus={errorStatus}
						validateSection={validateSection}
						navigateToSection={navigateToSection}
					/>
				);
			case STATES.TIME:
				return (
					<TimeSection
						startDate={startDate}
						onChangeDate={onChangeDate}
						endDate={endDate}
						showEndDate={showEndDate}
						setShowEndDate={setShowEndDate}
						validateSection={validateSection}
						errorStatus={errorStatus}
						description={eventDetails}
						navigateToSection={navigateToSection}
					/>
				);
			case STATES.PLACE:
				return (
					<PlaceSection
						location={eventLocation}
						setLocation={setEventLocation}
						instructions={arrivalInstructions}
						setInstructions={setArrivalInstructions}
						validateSection={validateSection}
						errorStatus={errorStatus}
						title={eventName}
						description={eventDetails}
						startDate={startDate}
						showEndDate={showEndDate}
						endDate={endDate}
						navigateToSection={navigateToSection}
					/>
				);
			case STATES.PEOPLE:
				return (
					<PeopleSection
						organizerName={organizerName}
						setOrganizerName={setOrganizerName}
						phoneNumber={phoneNumber}
						setPhoneNumber={setPhoneNumber}
						showPhoneNumber={showPhoneNumber}
						setShowPhoneNumber={setShowPhoneNumber}
						validateSection={validateSection}
						errorStatus={errorStatus}
						title={eventName}
						description={eventDetails}
						startDate={startDate}
						showEndDate={showEndDate}
						endDate={endDate}
						location={eventLocation}
						instructions={arrivalInstructions}
						navigateToSection={navigateToSection}
					/>
				);
			case STATES.FINISH:
				return (
					<FinishSection
						validateSection={validateSection}
						errorStatus={errorStatus}
						title={eventName}
						description={eventDetails}
						startDate={startDate}
						showEndDate={showEndDate}
						endDate={endDate}
						location={eventLocation}
						instructions={arrivalInstructions}
						organizerName={organizerName}
						phoneNumber={phoneNumber}
						showPhoneNumber={showPhoneNumber}
						navigateToSection={navigateToSection}
					/>
				);
		}
	}

	return (
		<View w="100%" bg="neutral.50" flex="1" justifyContent="flex-start">
			<View px={25}>
				{showProgressBar()}
				<Center>
					<Heading mt="5" mb="2" fontSize={"1.25rem"} fontStyle={"semibold"}>
						{eventName == "" ? "Your Event" : eventName}
					</Heading>
					<Divider bg="neutral.400" w="75%" />
					{getSection()}
				</Center>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	minimizedSection: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	endTimeSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingRight: 20,
	},
});
