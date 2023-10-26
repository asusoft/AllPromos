import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../assets/constants/theme";


const PersonalInfo = ({ user }) => {

    const userInfo = [
        {
            label: "Почта",
            value: user.email
        },
        {
            label: "Телефон",
            value: user.phone
        },
        {
            label: "Дата рождения",
            value: user.dateOfBirth.split('T')[0]
        },
        {
            label: "Пол",
            value: user.sex
        },
        {
            label: "Сайт",
            value: user.website
        }
    ]

    return (
        <View style={{
            margin: SIZES.padding,
            borderTopWidth: 1,
            borderColor: COLORS.grey,
            paddingVertical: SIZES.base
        }}>
            <Text style={{
                fontSize: 14,
                fontWeight: "600",
                alignSelf: 'center',
                marginBottom: SIZES.padding
            }}>
                PERSONAL INFO
            </Text>
            {
                userInfo.map((info, index) => (
                    <View key={index} style={styles.userInfo}>
                        <Text>{info.label}</Text>
                        <Text style={styles.info}>{info.value}</Text>
                    </View>
                ))
            }

        </View>
    );
}


const styles = StyleSheet.create({
    userInfo: {
        marginBottom: 10,
        gap: 5,
        justifyContent: 'space-between',
        borderBottomWidth: 1, borderColor: COLORS.grey,
        paddingVertical: 5
    },
    info: {
        fontWeight: 'bold',
        marginRight: 10,
        color: COLORS.dark,
    },
});


export default PersonalInfo
