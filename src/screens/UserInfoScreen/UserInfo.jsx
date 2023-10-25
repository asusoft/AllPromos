//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../../assets/constants/theme';
import { useAuth } from '../../../contexts/authContext/AuthContext';

// create a component
const UserInfoScreen = () => {
    const { authUser } = useAuth()

    return (
        <View style={styles.container}>
            <Image source={{ uri: authUser.avatar.path }} style={{ height: 150, width: 150 }} resizeMode='contain' />
            <Text>User Name: {authUser.login}</Text>
            <Text>Name: {authUser.name}</Text>
            <Text>Title: {authUser.shortDescription}</Text>
            <Text>City: {authUser.address.city}</Text>
            <Text>Email adress: {authUser.email}</Text>
            <Text>Phone: {authUser.phone}</Text>
            <Text>Sex: {authUser.sex}</Text>
            <Text>Date of Birt: {authUser.dateOfBirth.split('T')[0]}</Text>
            <Text>Description: {authUser.description}</Text>
            <Text>Subscriber: {authUser.subscribersCount}</Text>
            <Text>Website: {authUser.website}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
});

//make this component available to the app
export default UserInfoScreen;
