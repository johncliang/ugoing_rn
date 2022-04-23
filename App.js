import React from "react";
import { AppNavigator } from "./src/navigation/Navigation.js";
import { useFonts } from "expo-font";
import { NativeBaseProvider, extendTheme } from "native-base";
import Helmet from "react-helmet";

import previewImage from "./src/assets/UGoing-Link-Preview.png";
import logo180 from "./assets/icon180.png";
import logo from "./assets/icon.png";


function App() {
	const [loaded] = useFonts({
		Gilroy: require("./assets/fonts/Gilroy-Regular.ttf"),
		GilroyBold: require("./assets/fonts/Gilroy-Bold.ttf"),
		GilroyExtraBold: require("./assets/fonts/Gilroy-ExtraBold.ttf"),
		GilroySemiBold: require("./assets/fonts/Gilroy-SemiBold.ttf"),
		GilroyMedium: require("./assets/fonts/Gilroy-Medium.ttf"),
	});
	if (!loaded) {
		return null;
	}

	const siteTitle = 'UGoing.us'
	const siteDesc = "The world’s fastest event scheduler"
	
	

	const theme = extendTheme({
		fontConfig: {
			Gilroy: {
				400: {
					normal: "Gilroy",
					italic: "Gilroy",
					bold: "GilroyBold",
					semibold: "GilroySemiBold",
					medium: "GilroyMedium",
					extraBold: "GilroyExtraBold"
				},
				500: {
					normal: "Gilroy",
					italic: "Gilroy",
					bold: "GilroyBold",
					semibold: "GilroySemiBold",
					medium: "GilroyMedium",
					extraBold: "GilroyExtraBold"
				},
				600: {
					normal: "Gilroy",
					italic: "Gilroy",
					bold: "GilroyBold",
					semibold: "GilroySemiBold",
					medium: "GilroyMedium",
					extraBold: "GilroyExtraBold"
				},
				700: {
					normal: "Gilroy",
					italic: "Gilroy",
					bold: "GilroyBold",
					semibold: "GilroySemiBold",
					medium: "GilroyMedium",
					extraBold: "GilroyExtraBold"
				},

				// Add more variants
				//   700: {
				//     normal: 'Roboto-Bold',
				//   },
				//   800: {
				//     normal: 'Roboto-Bold',
				//     italic: 'Roboto-BoldItalic',
				//   },
				//   900: {
				//     normal: 'Roboto-Bold',
				//     italic: 'Roboto-BoldItalic',
				//   },
			},
		},

		// Make sure values below matches any of the keys in `fontConfig`
		fonts: {
			heading: "Gilroy",
			body: "Gilroy",
			mono: "Gilroy",
		},

		colors: {
			primary: {
				// 200: "#000000",
				// 180: "#111B33",
				600: "#FF4040",
				500: "#FF4040",
				400: "#FF4040",
				300: "#FE3D3C",
				200: "rgba(254, 61, 60, 0.07)",
				100: "#DCE6FC",
				50: "#F2F6FF",
			},
			neutral: {
				700: "#292C35", // 120
				600: "#3D4149", // 120
				500: "#3D424D", // 100
				400: "#6F7480", // 60
				300: "#C3CAD9", // 40
				200: "#E6EAF2", // 20
				100: "#F7F7F7", // 10
				50: "#FFFFFF", // 00
			},
		},

		components: {
			Button: {
				// Can simply pass default props to change default behaviour of components.
				baseStyle: {
					rounded: "md",
					colorScheme: "primary",
				},
				defaultProps: {
					_text: {
						fontFamily: "body",
						fontWeight: 400,
						fontStyle: "bold",
						color: "white",
					},
				},
			},
			Text: {
				baseStyle: {
					fontFamily: "body",
					fontWeight: 400,
					fontStyle: "normal",
				},
			},
			Heading: {
				// Can pass also function, giving you access theming tools
				baseStyle: {
					fontFamily: "heading",
					fontWeight: 700,
				},
			},
		},
	});

	return (
		
		<NativeBaseProvider theme={theme} r>
			<Helmet>
				<title>{'UGoing'}</title>
					<meta name="description" content={siteDesc}/>
					<meta name="image" content={previewImage}/>
					<meta itemProp="name" content={"Ugoing"}/>
					<meta itemProp="description" content={siteDesc}/>
					<meta itemProp="image" content={previewImage}/>

					<meta name="og:title" content={siteTitle}/>
					<meta name="og:description" content={siteDesc}/>
					<meta name="og:image" content={previewImage}/>
					<meta name="og:locale" content="en_US"/>
					<meta name="og:type" content="website"/>

					<link rel="apple-touch-icon" sizes="180x180" href={logo180}/>
					<link rel="mask-icon" href={logo} color="#5bbad5"/>
			</Helmet>
			
			<AppNavigator />
		</NativeBaseProvider>
	);
}
export default App;
