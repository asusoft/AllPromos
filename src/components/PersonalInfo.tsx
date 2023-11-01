import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../assets/constants/theme";


type User = {
    __typename: 'User';
    id: string;
    login: string;
    email: string;
    dateOfBirth: string;
    description: string;
    name: string;
    phone: string;
    sex: string;
    address: {
        city: string;
    };
    subscribersCount: number;
    website: string;
    shortDescription: string;
    avatar: {
        path: string;
    };
    likesCount: number;
    viewsCount: number;
};

type UserProps = {
    user: User | null;
};

const PersonalInfo:React.FC<UserProps> = ({ user }) => {

    const userInfo = [
        {
            label: "Почта",
            value: user?.email
        },
        {
            label: "Телефон",
            value: user?.phone
        },
        {
            label: "Дата рождения",
            value: user?.dateOfBirth.split('T')[0]
        },
        {
            label: "Пол",
            value: user?.sex
        },
        {
            label: "Сайт",
            value: user?.website
        }
    ]

    return (
        <View style={{
            margin: SIZES.PADDING,
            borderTopWidth: 1,
            borderColor: COLORS.GREY,
            paddingVertical: SIZES.BASE
        }}>
            <Text style={{
                fontSize: 14,
                fontWeight: "600",
                alignSelf: 'center',
                marginBottom: SIZES.PADDING
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
        borderBottomWidth: 1, borderColor: COLORS.GREY,
        paddingVertical: 5
    },
    info: {
        fontWeight: 'bold',
        marginRight: 10,
        color: COLORS.DARK,
    },
});


export default PersonalInfo
