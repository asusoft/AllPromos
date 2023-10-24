import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES } from "../../assets/constants/theme";


const TextButton = ({ icon, text, color }) => {
    return (
        <View style={{ backgroundColor: color, ...styles.button }}>
            {
                icon ? (
                    <Image
                        source={icon}
                        style={styles.icon}
                        resizeMode='contain'
                    />)
                    : null
            }
            <Text style={{
                color: COLORS.white,
                fontWeight: "600"
            }}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 45,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },
    icon: {
        height: 25,
        width: 25,
        tintColor: COLORS.light,
        tintColor: COLORS.white
    }
});


export default TextButton
