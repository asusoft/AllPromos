import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../assets/constants/theme";


const UserStats = ({ user }) => {
    const userStats = [
        {
            label: "Like",
            value: user.likesCount
        },
        {
            label: "Subscribers",
            value: user.subscribersCount
        },
        {
            label: "Views",
            value: user.viewsCount
        }
    ]

    const stats = userStats.map((stat, index) => (
        <View
            key={index}
            style={styles.stat}>
            <Text style={{
                fontSize: 18
            }}>{stat.label}</Text>
            <Text style={styles.digit}>{stat.value}</Text>
        </View>
    ))


    return (
        <View style={{
            ...styles.section,
            ...styles.statsContainer
        }}>
            {stats}
        </View>
    );
}

const styles = StyleSheet.create({
    digit: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.primary
    },
    section: {
        flexDirection: 'row',
        gap: 20,
        margin: SIZES.padding
    },
    stat: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    statsContainer: {
        marginTop: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        paddingVertical: SIZES.base
    }
});

export default UserStats