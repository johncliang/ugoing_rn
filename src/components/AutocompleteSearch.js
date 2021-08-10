import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    Text,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { useDebounce } from "../hooks/useDebounce";

const GOOGLE_API_KEY = "AIzaSyAYMwjUPXCoPloFIfuWhLDRWVmKb2G8PwM";
import { Loader } from "@googlemaps/js-api-loader";

const AutocompleteSearch = (props) => {
    const { onChangeOutputText, value } = props;
    const [search, setSearch] = useState({ term: "", fetchPredictions: false });
    const [showPredictions, setShowPredictions] = useState(false);
    const [predictions, setPredictions] = useState([]);
    const [inputSize, setInputSize] = useState({ width: 0, height: 0 });

    const [acLoaded, setACLoaded] = useState(false);
    const [acService, setACService] = useState(null);

    const loader = new Loader({
        apiKey: GOOGLE_API_KEY,
        version: "weekly",
        libraries: ["places"],
    });

    useEffect(() => {
        setSearch({ term: value });
        loader.load().then(() => {
            setACService(new google.maps.places.AutocompleteService());
            setACLoaded(true);
        });
    }, []);

    function setSuggestions(data, status) {
        if (status != google.maps.places.PlacesServiceStatus.OK || !data) {
            alert(status);
            return;
        }
        setPredictions(data);
        setShowPredictions(true);
    }

    const onChangeText = async () => {
        if (search.term.trim() === "") return;
        if (!search.fetchPredictions) return;

        acService.getQueryPredictions({ input: search.term }, setSuggestions);
    };

    useDebounce(onChangeText, 1000, [search.term]);

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
                                console.log(item);
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
                nativeID="autocomplete"
                returnKeyType="search"
                onLayout={(event) => {
                    const { height, width } = event.nativeEvent.layout;
                    setInputSize({ height, width });
                }}
                selectTextOnFocus={true}
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
