//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import images from '../../../assets/constants/images';

// create a component
const DrawScreen = () => {
    return (
        <ImageBackground style={styles.container} source={images.background_image}>
            <SafeAreaView>
                <Text>DrawScreen</Text>
            </SafeAreaView>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default DrawScreen;
