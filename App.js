import React from "react";
import { AppNavigator } from "./src/navigation/Navigation.js";
import { useFonts } from "expo-font";

function App() {
    const [loaded] = useFonts({
        SFPro: require("./assets/fonts/SF-Pro.ttf"),
    });
    if (!loaded) {
        return null;
    }
    return <AppNavigator />;
}
export default App;
