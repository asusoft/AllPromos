import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { COLORS } from "../../assets/constants/theme";

const Header = ({ title, icon, color }) => {
    return (
        <View style={styles.Header}>
            <Image
                source={icon}
                resizeMode='contain'
                style={{ tintColor: COLORS[color], ...styles.icon }}
            />
            <Text
                style={{ color: COLORS[color], ...styles.title }}
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
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        left: 10,
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 18,
    }
});


export default Header;
