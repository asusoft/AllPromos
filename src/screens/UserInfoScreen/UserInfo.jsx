//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS } from '../../../assets/constants/theme';
import { useAuth } from '../../../contexts/authContext/AuthContext';
import TextButton from '../../components/TextButton';

// create a component
const UserInfoScreen = () => {
    const { authUser, signOut } = useAuth()

    return (
        <View style={styles.container}>

            <Image source={{ uri: authUser.avatar.path }} style={styles.avatar} resizeMode='contain' />
            <Text style={styles.title}>User Profile</Text>
            <View style={styles.userInfo}>
                <Text style={styles.label}>User Name:</Text>
                <Text style={styles.info}>{authUser.login}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.info}>{authUser.name}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Title:</Text>
                <Text style={styles.info}>{authUser.shortDescription}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>City:</Text>
                <Text style={styles.info}>{authUser.address.city}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Email address:</Text>
                <Text style={styles.info}>{authUser.email}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.info}>{authUser.phone}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Sex:</Text>
                <Text style={styles.info}>{authUser.sex}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Date of Birth:</Text>
                <Text style={styles.info}>{authUser.dateOfBirth.split('T')[0]}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.info}>{authUser.description}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Subscribers:</Text>
                <Text style={styles.info}>{authUser.subscribersCount}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Website:</Text>
                <Text style={styles.info}>{authUser.website}</Text>
            </View>
            <TextButton text="Log out" onPress={() => signOut()} color={COLORS.primary} />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        flex: 1,
        fontWeight: 'bold',
        marginRight: 10,
    },
    info: {
        flex: 2,
    },
});

//make this component available to the app
export default UserInfoScreen;
