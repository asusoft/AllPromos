import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from "../../assets/constants/theme";


export type ColorKey = keyof typeof COLORS;

type TextButtonProps = {
    icon?: any, 
    text: string, 
    color: ColorKey, 
    onPress: () => void, 
    textColor?: ColorKey
}

const TextButton:React.FC<TextButtonProps> = ({ 
    icon, 
    text, 
    color, 
    onPress, 
    textColor = 'WHITE' 
}) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={{ backgroundColor: COLORS[color], ...styles.button }}>
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
                color: COLORS[textColor],
                fontSize: SIZES.BODY
            }}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        height: 45,
        borderRadius: SIZES.RADIUS,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: COLORS.WHITE
    }
});


export default TextButton
