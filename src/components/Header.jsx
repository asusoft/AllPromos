import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { COLORS } from "../../assets/constants/theme";


const Header = ({ title, icon }) => {
    return (
        <View style={styles.Header}>
            <Image
                source={icon}
                resizeMode='contain'
                style={styles.icon}
            />
            <Text
                style={styles.title}
            >
                {title}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    Header: {
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: 40,
        height: 40,
        tintColor: COLORS
    },
    title: {
        fontSize: 18,
        color: COLORS.black,
        marginLeft: "22%"
    }
});


export default Header;
