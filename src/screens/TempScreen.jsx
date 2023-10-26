//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../assets/constants/theme';

// create a component
const TempScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TempScreen</Text>
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
export default TempScreen;
