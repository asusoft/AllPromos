import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from "../../assets/constants/theme";


const TextButton = ({ icon, text, color, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={{ backgroundColor: color, ...styles.button }}>
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
                fontSize: SIZES.body
            }}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        height: 45,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: COLORS.light,
        tintColor: COLORS.white
    }
});


export default TextButton
