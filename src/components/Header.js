import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return(
        <View style = {styles.headerStyle}>
            <Text style={styles.textStyle}>Albums</Text>
        </View>      
    );
};

const styles = StyleSheet.create({
    headerStyle:{
        backgroundcolor:"#F8F8F8",
        justifyContent:"center",
        alignItems:"center",
        height:40,
        shadowColor:"#000",
        shadowOffest:{ width:0, height:2 },
        shadowOpacity: 0.1,
        elevation:4
    },
    textStyle:{
        fontSize: 20,
        fontWeight:"bold",
        color:"#FFFFFF"
    },
});

export default Header;