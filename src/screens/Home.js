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
		<Box bg="white" minH={"38.502rem"} px={"1.563rem"} pt={"1rem"} pb={"4.688rem"}>
			<Center justifyContent={"flex-start"} flex="1">
				<Image source={ugoingIcon} h={44} w={137} mb={"1rem"}></Image>
				<Heading textAlign={"center"} fontSize={32} lineHeight={50}>
					The world’s fastest{"\n"}
					<Heading fontStyle={"extraBold"} size={32}>
						Event Scheduler
					</Heading>
				</Heading>
				<Image source={homeIcon1} width="17.625rem" height="10.574rem" mt={"3.625rem"} mb={"5.75rem"}></Image>
				<Button
					onPress={() => {
						navigation.navigate("Create");
					}}
					minW="200"
					minH="52"
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
			minH={"33.563rem"}
			px={"1.563rem"}
			pt={"4.375rem"}
			pb={"4.75rem"}
			overflow="hidden"
		>
			<Center justifyContent={"flex-start"} flex="1">
				<Box>
					<Heading textAlign={"center"} fontStyle={"semibold"} fontSize={28} letterSpacing={"0.02em"}>
						Let's throw a party!
					</Heading>
					<Heading textAlign={"center"} fontSize={15} lineHeight={25} color={"neutral.400"} mt={"0.938rem"} mx={"1.375rem"}>
						UGoing creates a free shareable link to your next event that friends
						can add directly to their calendars
					</Heading>
				</Box>

				<Image source={scheduleIcon1} size={48} mt={"4.75rem"}></Image>
			</Center>
		</Box>
	);
};

const CardThree = () => {
	return (
		<Box 
			bg="white"
			minH={"46rem"}
			px={"1.563rem"}
			pt={"4.375rem"}
			pb={"5.438rem"}
		>
			<Center justifyContent={"flex-start"} flex="1">
				<Heading textAlign={"center"} fontStyle={"semibold"} fontSize={28} letterSpacing={"0.02em"}>
					It's as easy as...
				</Heading>
				<Box bg="primary.200" borderRadius={"lg"} p="3.5" mt={"3.438rem"} mb={"1.625rem"}>
					<Image source={plusIcon} size={"31px"} />
				</Box>
				<Heading textAlign={"center"} fontStyle={"medium"} fontSize={18} lineHeight={33}>
					1. Create your event
				</Heading>
				<Box bg="primary.200" borderRadius={"lg"} p="3.5" mt={"3.438rem"} mb={"1.625rem"}>
					<Image source={linkIcon} size={"31px"} />
				</Box>
				<Heading textAlign={"center"} fontStyle={"medium"} fontSize={18} lineHeight={33}>
					2. Send the link to your friends
				</Heading>
				<Box bg="primary.200" borderRadius={"lg"} p="3.5" mt={"3.438rem"} mb={"1.625rem"}>
					<Image source={calendarIcon} size={"31px"} />
				</Box>
				<Heading textAlign={"center"} fontStyle={"medium"} fontSize={18} lineHeight={33}>
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
			minH={"45.563rem"}
			justifyContent={"flex-start"}
			px={"1.563rem"}
			pt={"4.375rem"}
		>
			<Center justifyContent={"flex-end"} overflow="hidden" flex="1">
				<Heading
					color={"white"}
					fontStyle={"bold"}
					textAlign={"center"}
					fontSize={28}
					letterSpacing={"0.02em"}
					mx={"3rem"}
					mb={"0.938rem"}
				>
					One link to rule them all
				</Heading>
				<Heading color={"white"} fontSize={15} lineHeight={25} textAlign={"center"} mb={"1.875rem"} mx={"1.5rem"}>
					Details get buried easily in the group chat. Instead of re-typing your
					event details each time, send a link
				</Heading>
				<HStack space={5} alignItems={"center"} mb={"2.23rem"}>
					<Image source={calendarSmallIcon} size={"27.24px"} opacity={"50%"} />
					<Image source={mailSmallIcon} height={24.21} width={30.27} opacity={"50%"} />
					<Image source={smsSmallIcon} height={28} width={30} opacity={"50%"} />
					<Image source={facebookSmallIcon} size={"27.24px"} opacity={"50%"} />
				</HStack>
				<Image
					flex="1"
					alignSelf={"center"}
					source={textConvo}
					resizeMode="contain"
					// size="2xl"
					style={{
						width: "100%",
						height: "100%",
						margin: "0 auto 0 auto",
					}}
				/>
			</Center>
		</Box>
	);
};

const CardFive = () => {
	return (
		<Box
			bg="white"
			minH={"29.875rem"}
			justifyContent={"flex-start"}
			px={"1.563rem"}
			pt={"4.375rem"}
			mb={"19.375rem"}
		>
			<Center
				justifyContent={"flex-start"}
				overflow="hidden"
				flex="1"
				//mt="10%"
				//pb="10%"
			>
				<Heading fontStyle={"bold"} textAlign={"center"} fontSize={28} mx={"2rem"} letterSpacing={"0.02em"}>
					Right into their calendar
				</Heading>
				<Image
					source={calendarMultiple}
					flex="1"
					alignSelf={"center"}
					resizeMode="contain"
					my={"1.875rem"}
					// size="2xl"
					style={{
						width: "100%",
						maxWidth: 147,
						height: "100%",
						maxHeight: 107,
						margin: "0 auto 0 auto",
					}}
				/>
				<Heading fontSize={15} lineHeight={25} textAlign={"center"} mx={"2rem"} color={"neutral.400"}>
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
		<Box bg="neutral.600" px={"1.563rem"}>
			<Box
				bg="white"
				w="100%"
				minH={"24.875rem"}
				style={{ boxShadow: "0px -6px 50px #ABBAC2" }}
				borderRadius={"2xl"}
				alignSelf={"center"}
				mt="-14.688rem"
				mb="3.375rem"
			>
				<Center justifyContent={"flex-start"} overflow="hidden">
					<Heading fontStyle={"bold"} fontSize={28} letterSpacing={"0.02em"} textAlign={"center"} mt={"4.375rem"}>
						And it's all free!
					</Heading>
					<Heading  fontSize={15} lineHeight={25}  textAlign={"center"} mx={"1.375rem"} mt={"3rem"} mb={"4.563rem"}>
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

const Footer = (props) => {
	return (
		<Box
			//h={Dimensions.get("window").height * 0.25}
			bg="neutral.600"
			alignItems={"center"}
			justifyContent={"flex-start"}
		>
			<Image source={uGoingWhiteLogo} w={165} h={52} mb={"5.438rem"} tintColor={"white"}/>
			<Text onPress={() => props.navigation.navigate("About")} color="white" fontStyle={"semibold"} fontSize={15} letterSpacing={"0.02em"} mb={"0.75rem"}>
				About Us
			</Text>
			<Text onPress={() => props.navigation.navigate("TOS")} color="white" fontStyle={"semibold"} fontSize={15} letterSpacing={"0.02em"} mb={"0.75rem"}>
				Terms of Use
			</Text>
			<Text onPress={() => props.navigation.navigate("PrivacyPolicy")} color="white" fontStyle={"semibold"} fontSize={15} letterSpacing={"0.02em"} mb={"1.5rem"}>
				Privacy Policy
			</Text>
			<Divider w="100%" color="white" />
			<Text color="white" fontStyle={"semibold"} fontSize={12} letterSpacing={"0.02em"} my={"0.938rem"}>
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
			<Footer navigation = {navigation}/>
			{/* <Box w="100%" h="4/5" bg="white" overflow="hidden"></Box>
			<Box w="100%" h="4/5" bg="primary.200" overflow={"hidden"}></Box>
			<Box w="100%" h="4/5" bg="white"></Box>
			<Box w="100%" h="4/5" bg="neutral.600"></Box> */}
		</View>
	);
};
