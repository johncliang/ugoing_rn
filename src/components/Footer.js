import React from "react";
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";

var logoimg = document.createElement("logo-img");
logoimg.src = "../assets/UGoing_Logo.png"

class Footer extends React.Component {
    render() {
        return (
            /*Footer Container for Event Creation (i.e. condensed) */
            <View style={[GlobalStyles.cardSection, styles.footerContainer, {backgroundColor: this.props.homepage ? GlobalColors.darkGrey : "white"}]}>
               <View style={[GlobalStyles.cardSection, styles.footerContainer, {backgroundColor: this.props.homepage ? GlobalColors.darkGrey : "white", /*borderWidth: 1, borderColor: this.props.homepage == true ? GlobalColors.darkGrey: GlobalColors.standardRed, borderTopWidth: 0, borderLeftColor: 'white', borderRightColor: 'white', borderBottomColor:'white'*/}]}>         
                    
                    {this.props.publish &&
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate("About")} style={{paddingTop: "2.5rem", paddingBottom: "2.5rem"}}>
                        <Text style={[GlobalStyles.bodyText, {textAlign: "center", color: "lightBlack", fontSize: "0.9375rem"}]}>
                            About Us
                        </Text>
                    </TouchableOpacity>
                    }

                    {this.props.homepage &&
                    <View>
                        <Image
                            style={
                                { width: "10.313rem", height: "3.25rem", marginHorizontal: "auto", tintColor: "white"}
                            }
                            source={require("../assets/UGoing_Logo.png")}
                        />
                        <View style={{marginBottom: "1.125rem", marginTop: "5.125rem"}}>
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate("About")} style={{paddingTop: "0.375rem", paddingBottom: "0.375rem"}}>
                                <Text style={[GlobalStyles.bodyText, {textAlign: "center", color: "white", fontSize: "0.9375rem"}]}>
                                    About Us
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress = {() => this.props.navigation.navigate("TOS")} style={{paddingTop: "0.375rem", paddingBottom: "0.375rem"}}>
                                <Text style={[GlobalStyles.bodyText, {textAlign: "center", color: "white", fontSize: "0.9375rem"}]}>
                                    Terms Of Use
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress = {() => this.props.navigation.navigate("PrivacyPolicy")} style={{paddingTop: "0.375rem", paddingBottom: "0.375rem"}}>
                                <Text style={[GlobalStyles.bodyText, {textAlign: "center", color: "white", fontSize: "0.9375rem"}]}>
                                    Privacy Policy
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    }

                    <View style={[GlobalStyles.columnContainer, {backgroundColor: this.props.homepage ? GlobalColors.darkGrey: GlobalColors.standardRed, borderTopColor: "white", borderTopWidth: 1, paddingTop: "0.9375rem", paddingBottom: "0.9375rem", }]}>

                        <View></View>
                        {!this.props.homepage &&
                        <Image
                            style={{width:"5.25rem", height:"1.6875rem", marginLeft: "1.5625rem"}}
                            source={require("../assets/UGoing_Logo_w.png")}
                            > 
                        </Image>
                        }
                        <Text style={[GlobalStyles.bodyText, {marginRight: this.props.homepage ? 0 : "1.5625rem", textAlign: "center", color: "white", fontSize: "0.75rem"}]}>
                             UGoing™ 2022. All rights reserved.
                        </Text>   
                        <View></View>

                    </View>   

                </View>

            </View>
        )
    }
    
}


export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: "center", 
        backgroundColor: "white", 
    },
    buttonLayout: {
        width: "35%",
        paddingTop: "1.875rem",
        paddingBottom: "2.5rem" 
    }
});



/*

class Footer extends React.Component {
    render() {
        return (
            /*Footer Container*
            <View style={[GlobalStyles.columnContainer, styles.footerContainer]}>
                    {/*About Button*}
                    <TouchableOpacity onPress = {() => navigation.navigate("About")} style={styles.buttonLayout}>
                        <Text style={[ {textAlign: "center"}]}>
                            About
                        </Text>
                    </TouchableOpacity>
                    {/*TOS Button*}
                    <TouchableOpacity onPress = {() => navigation.navigate("TOS")} style={styles.buttonLayout}>
                        <Text style={[ {textAlign: "center"}]}>
                            Terms Of Use
                        </Text>
                    </TouchableOpacity>
                    {/*Privacy Policy Button*}
                    <TouchableOpacity onPress = {() => navigation.navigate("PrivacyPolicy")} style={styles.buttonLayout}>
                        <Text style={[ {textAlign: "center"}]}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
            </View>
        )
    }
    
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: "center", 
        backgroundColor: "#FFF", 
        borderTopWidth: 1, 
        borderColor: "#D5D5D5"
    },
    buttonLayout: {
        width: "35%",
        paddingTop: "1.875rem",
        paddingBottom: "2.5rem" 
    }
});


*/