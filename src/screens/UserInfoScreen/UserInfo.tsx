//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import icons from '../../../assets/constants/icons';
import { COLORS, SIZES } from '../../../assets/constants/theme';
import { useAuth } from '../../contexts/authContext/AuthContext';
import UserStats from '../../components/UserStats';
import PersonalInfo from '../../components/PersonalInfo';


// create a component
const UserInfoScreen = () => {
    const { authUser, signOut } = useAuth()

    const handleSignOut = () => {
        Alert.alert('', 'Выйти из аккаунта?', [
            {
                text: 'Нет',
                style: 'cancel'
            },
            {
                text: 'Да',
                onPress: () => signOut(),
            },
        ]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <Image source={{ uri: authUser?.avatar.path }} style={styles.avatar} resizeMode='contain' />
                    <View style={{ gap: 8 }}>
                        <Text style={styles.name}>{authUser?.name}</Text>
                        <Text style={styles.title}>@{authUser?.login}</Text>
                        <Text style={styles.info}>{authUser?.shortDescription}</Text>
                        <Text style={styles.info}>{authUser?.address.city}</Text>
                    </View>
                    <TouchableOpacity onPress={() => handleSignOut()} style={{ marginLeft: 'auto' }}>
                        <Image source={icons.logout} style={{ height: 30, width: 30 }} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <UserStats user={authUser} />
                <View style={{ alignItems: 'center', gap: 12, }}>
                    <Text style={{ fontSize: 14, fontWeight: "600" }}>BIO</Text>
                    <Text style={styles.info}>{authUser?.description}</Text>
                </View>
                <PersonalInfo user={authUser} />
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.PADDING,
    },
    avatar: {
        height: 110,
        width: 110,
        borderRadius: 25,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.DARK
    },
    title: {
        color: COLORS.DARK
    },
    section: {
        flexDirection: 'row',
        gap: 20,
        margin: SIZES.PADDING
    },
    info: {
        fontWeight: 'bold',
        marginRight: 10,
        color: COLORS.DARK,
    },
});

//make this component available to the app
export default UserInfoScreen;
