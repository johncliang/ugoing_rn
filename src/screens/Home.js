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

import homeIcon1 from "../assets/HomeIcon-1.png";
import ugoingIcon from "../assets/UGoing_Logo.png";
import scheduleIcon1 from "../assets/Schedule-1.png";
import plusIcon from "../assets/Plus-Icon.svg";
import linkIcon from "../assets/Link-Icon.svg";
import calendarIcon from "../assets/Calendar-Icon.svg";
import calendarSmallIcon from "../assets/Calendar-small.svg";
import mailSmallIcon from "../assets/Mail-small.svg";
import smsSmallIcon from "../assets/SMS-small.svg";
import facebookSmallIcon from "../assets/Facebook-small.svg";
import textConvo from "../assets/text-convo.png";
import calendarMultiple from "../assets/calendar-multiple.png";
import uGoingWhiteLogo from "../assets/UGoing_Logo_w.png";

// Usually one would use h="80%" to get 80% screen height, but there's some bug
// or styling workaround that I'm unaware of that is causing the height to expand
// past our provided percentage when enough content is being loaded
const CardOne = () => {
	return (
		<Box bg="white" h={Dimensions.get("window").height * 0.8}>
			<Center justifyContent={"space-around"} flex="1">
				<Image source={ugoingIcon} h={44} w={137}></Image>
				<Heading textAlign={"center"} fontSize={48}>
					The world’s fastest{"\n"}
					<Heading bold={true} size={32}>
						Event Scheduler
					</Heading>
				</Heading>
				<Image source={homeIcon1} width="17.625rem" height="10.574rem"></Image>
				<Button
					onPress={() => {
						navigation.navigate("Create");
					}}
					minW="200"
					minH="50"
				>
					Create Event
				</Button>
			</Center>
		</Box>
	);
};

const CardTwo = () => {
	return (
		<Box
			bg="primary.200"
			h={Dimensions.get("window").height * 0.8}
			overflow="hidden"
		>
			<Center justifyContent={"space-around"} flex="1">
				<Box>
					<Heading textAlign={"center"} fontStyle={"semibold"} fontSize={48}>
						Let's throw a party!
					</Heading>
					<Heading textAlign={"center"} size={"md"} color={"neutral.500"}>
						UGoing creates a free shareable link to your next event that friends
						can add directly to their calendars
					</Heading>
				</Box>

				<Image source={scheduleIcon1} size={48}></Image>
			</Center>
		</Box>
	);
};

const CardThree = () => {
	return (
		<Box bg="white" h={Dimensions.get("window").height * 0.8}>
			<Center justifyContent={"space-around"} flex="1">
				<Heading textAlign={"center"} fontStyle={"semibold"} fontSize={48}>
					It's as easy as...
				</Heading>
				<Box bg="primary.200" borderRadius={"lg"} p="5">
					<Image source={plusIcon} size={"sm"} />
				</Box>
				<Heading textAlign={"center"} fontStyle={"medium"} size={"md"}>
					1. Create your event
				</Heading>
				<Box bg="primary.200" borderRadius={"lg"} p="5">
					<Image source={linkIcon} size={"sm"} />
				</Box>
				<Heading textAlign={"center"} fontStyle={"medium"} size={"md"} w="75%">
					2. Send the link to your friends
				</Heading>
				<Box bg="primary.200" borderRadius={"lg"} p="5">
					<Image source={calendarIcon} size={"sm"} />
				</Box>
				<Heading textAlign={"center"} fontStyle={"medium"} size={"md"} w="75%">
					3. View the details online or add them to your calendar with a single
					tap
				</Heading>
			</Center>
		</Box>
	);
};

const CardFour = () => {
	return (
		<Box
			bg="neutral.600"
			h={Dimensions.get("window").height * 0.8}
			justifyContent={"space-between"}
		>
			<Center justifyContent={"space-around"} overflow="hidden" flex="1">
				<Heading
					color={"white"}
					fontStyle={"bold"}
					textAlign={"center"}
					fontSize={48}
				>
					One link to rule them all
				</Heading>
				<Heading color={"white"} size={"md"} textAlign={"center"} w="75%">
					Details get buried easily in the group chat. Instead of re-typing your
					event details each time, send a link
				</Heading>
				<HStack space={10}>
					<Image source={calendarSmallIcon} size={"xs"} opacity={"50%"} />
					<Image source={mailSmallIcon} size={"xs"} opacity={"50%"} />
					<Image source={smsSmallIcon} size={"xs"} opacity={"50%"} />
					<Image source={facebookSmallIcon} size={"xs"} opacity={"50%"} />
				</HStack>
			</Center>
			<Box flex="1" justifyContent={"flex-end"}>
				<Image
					flex="1"
					alignSelf={"center"}
					source={textConvo}
					resizeMode="contain"
					// size="2xl"
					style={{
						width: "20.3125rem",
						height: "25.0625rem",
						margin: "0 auto 0 auto",
					}}
				/>
			</Box>
		</Box>
	);
};

const CardFive = () => {
	return (
		<Box
			bg="white"
			h={Dimensions.get("window").height * 0.8}
			justifyContent={"flex-start"}
		>
			<Center
				justifyContent={"flex-start"}
				overflow="hidden"
				h="60%"
				mt="10%"
				pb="10%"
			>
				<Heading fontStyle={"bold"} textAlign={"center"} fontSize={48}>
					Right into their calendar
				</Heading>
				<Image
					alignSelf={"center"}
					source={calendarMultiple}
					resizeMode="contain"
					size="xl"
				/>
				<Heading size={"md"} textAlign={"center"} mx={20} width="75%">
					UGoing lets you add events directly into your preferred calendar{" "}
					{"\n"} {"\n"}No more digging through messages or forgotten reminders -
					Everything you need to know front and center where you expect it
				</Heading>
			</Center>
		</Box>
	);
};

const CardSix = () => {
	return (
		<Box bg="neutral.600" pb="10%">
			<Box
				bg="white"
				w="90%"
				h={Dimensions.get("window").height * 0.6}
				style={{ boxShadow: "0px -6px 50px #ABBAC2" }}
				borderRadius={"2xl"}
				justifyContent={"space-around"}
				alignSelf={"center"}
				mt="-20%"
				pb="10%"
			>
				<Center justifyContent={"space-around"} overflow="hidden" h="60%">
					<Heading fontStyle={"bold"} fontSize={48} textAlign={"center"}>
						And it's all free!
					</Heading>
					<Heading size={"md"} textAlign={"center"} width="75%">
						Create as many events as you want{"\n"}
						Free to create events{"\n"}
						Free for your guests
					</Heading>
				</Center>
				<Center justifyContent={"flex-end"}>
					<Button
						onPress={() => {
							navigation.navigate("Create");
						}}
						minW="200"
						minH="50"
					>
						Create Event
					</Button>
				</Center>
			</Box>
		</Box>
	);
};

const Footer = () => {
	return (
		<Box
			h={Dimensions.get("window").height * 0.25}
			bg="neutral.600"
			alignItems={"center"}
			justifyContent={"space-around"}
			py="15%"
		>
			<Image source={uGoingWhiteLogo} w={165} h={52} />
			<Text color="white" fontStyle={"semibold"} fontSize={15}>
				About Us
			</Text>
			<Text color="white" fontStyle={"semibold"} fontSize={15}>
				Terms of Use
			</Text>
			<Text color="white" fontStyle={"semibold"} fontSize={15}>
				Privacy Policy
			</Text>
			<Divider w="100%" color="white" my="4" />
			<Text color="white" fontStyle={"semibold"} fontSize={12}>
				UGoing™ 2022. All rights reserved.
			</Text>
		</Box>
	);
};

export const HomeScreen = ({ navigation }) => {
	return (
		<View h="100%" overflowY={"scroll"}>
			<CardOne />
			<CardTwo />
			<CardThree />
			<CardFour />
			<CardFive />
			<CardSix />
			<Footer />
			{/* <Box w="100%" h="4/5" bg="white" overflow="hidden"></Box>
			<Box w="100%" h="4/5" bg="primary.200" overflow={"hidden"}></Box>
			<Box w="100%" h="4/5" bg="white"></Box>
			<Box w="100%" h="4/5" bg="neutral.600"></Box> */}
		</View>
	);
};
