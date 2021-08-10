import React, { useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    FlatList,
    ViewStyle,
    TouchableOpacity,
    Text,
} from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";
import { GlobalColors } from "../styles/GlobalStyles";

//const GOOGLE_PLACES_API_BASE_URL =
//    "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place";
const GOOGLE_PLACES_API_BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place";

const GOOGLE_API_KEY = "AIzaSyAYMwjUPXCoPloFIfuWhLDRWVmKb2G8PwM";

/*
export type PredictionType = {
  description: string
  place_id: string
  reference: string
  matched_substrings: any[]
  tructured_formatting: Object
  terms: Object[]
  types: string[]
}
*/

const AutocompleteSearch = (props) => {
    const { onChangeOutputText } = props;
    const [search, setSearch] = useState({ term: "", fetchPredictions: false });
    const [showPredictions, setShowPredictions] = useState(false);
    const [predictions, setPredictions] = useState([]);
    const [inputSize, setInputSize] = useState({ width: 0, height: 0 });

    const onChangeText = async () => {
        if (search.term.trim() === "") return;
        if (!search.fetchPredictions) return;

        const apiUrl = `${GOOGLE_PLACES_API_BASE_URL}/autocomplete/json?types=geocode&key=${GOOGLE_API_KEY}&input=${search.term}`;
        try {
            const result = await axios.request({
                method: "post",
                url: apiUrl,
            });
            if (result) {
                const {
                    data: { predictions },
                } = result;
                setPredictions(predictions);
                setShowPredictions(true);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useDebounce(onChangeText, 1000, [search.term]);

    // TODO -- FIX API MAP CALLS
    // const onPredictionTapped = async (placeId, description) => {
    //     const apiUrl = `${GOOGLE_PLACES_API_BASE_URL}/autocomplete/json?types=geocode&key=${GOOGLE_API_KEY}&place_id=${placeId}`;
    //     try {
    //         const result = await axios.request({
    //             method: "post",
    //             url: apiUrl,
    //         });
    //         if (result) {
    //             console.log(result);
    //             const {
    //                 data: {
    //                     result: {
    //                         geometry: { location },
    //                     },
    //                 },
    //             } = result;
    //             const { lat, lng } = location;
    //             setShowPredictions(false);
    //             setSearch({ term: description, fetchPredictions: false });
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    const _renderPredictions = () => {
        const calculatedStyle = {
            width: inputSize.width,
        };
        return (
            <FlatList
                data={predictions}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={styles.predictionRow}
                            onPress={() => {
                                // onPredictionTapped(
                                //     item.place_id,
                                //     item.description
                                // );
                                onChangeOutputText(item.description);
                                setSearch({
                                    term: item.description,
                                    fetchPredictions: false,
                                });
                                setShowPredictions((showPredictions) => false);
                            }}
                        >
                            <Text numberOfLines={1}>{item.description}</Text>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.place_id}
                keyboardShouldPersistTaps="handled"
                style={[styles.predictionsContainer, calculatedStyle]}
            />
        );
    };

    return (
        <View>
            <TextInput
                style={GlobalStyles.textInput}
                placeholder="Search for location"
                value={search.term}
                onChangeText={(text) => {
                    setSearch({ term: text, fetchPredictions: true });
                    onChangeText();
                    onChangeOutputText(text);
                }}
                returnKeyType="search"
                onLayout={(event) => {
                    const { height, width } = event.nativeEvent.layout;
                    console.log(height);
                    console.log(width);
                    setInputSize({ height, width });
                }}
            />

            {showPredictions && _renderPredictions()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    inputStyle: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: "#cfcfcf",
        borderRadius: 20,
        color: "black",
        fontSize: 16,
    },
    predictionsContainer: {
        backgroundColor: "white",
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 15,
    },
    predictionRow: {
        paddingBottom: 5,
        marginBottom: 5,
        borderBottomColor: GlobalColors.veryLightGrey,
        borderBottomWidth: 2,
    },
});

export default AutocompleteSearch;
