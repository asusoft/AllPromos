import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, SIZES } from "../../assets/constants/theme";
import icons from "../../assets/constants/icons";
import { TimerCardProp, TimerProps } from "../../types";


const Timer: React.FC<TimerProps> = ({ timer }) => {

    const TimerDigitCard: React.FC<TimerCardProp> = ({ digit, color }) => {
        return (
            <View style={{ ...styles.timer, backgroundColor: COLORS[color] }}>
                <Text style={{ fontSize: 40, color: color === "PRIMARY" ? COLORS.WHITE : COLORS.BLACK, fontWeight: '600' }}>{digit}</Text>
            </View>
        );
    };

    return (
        <View style={{
            flexDirection: 'row'
        }}>
            <TimerDigitCard digit={String(Math.floor(timer / 60)).padStart(2, '0').charAt(0)} color={"WHITE"} />
            <TimerDigitCard digit={String(Math.floor(timer / 60)).padStart(2, '0').charAt(1)} color={"WHITE"} />
            <Image source={icons.dots} resizeMode="contain" style={{ height: 40, width: 10, alignSelf: 'center' }} />
            <TimerDigitCard digit={String(timer % 60).padStart(2, '0').charAt(0)} color={"PRIMARY"} />
            <TimerDigitCard digit={String(timer % 60).padStart(2, '0').charAt(1)} color={"PRIMARY"} />
        </View>
    );
}


const styles = StyleSheet.create({
    timer: {
        width: 70,
        height: 106,
        borderRadius: 55,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    digit: {
        fontSize: 40,
        fontWeight: '600'
    },
});

export default Timer