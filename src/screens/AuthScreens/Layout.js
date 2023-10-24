//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { COLORS, SIZES } from '../../../assets/constants/theme';
import images from '../../../assets/constants/images';

// create a component
const Layout = ({
    title,
    subtitle,
    titleContainerStyle,
    children,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    style={styles.logo}
                />
            </View>
            {/* Title & Subtitle */}
            <View style={{ ...titleContainerStyle }}>
                <Text style={{ textAlign: 'center', color: COLORS.dark, fontSize: 20, fontWeight: '700' }}>
                    {title}
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.dark,
                        marginTop: SIZES.base,
                        fontSize: 14
                    }}>
                    {subtitle}
                </Text>
            </View>
            {/* Content / Children */}
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    logo: {
        height: 100,
        width: 200,
    },
});

//make this component available to the app
export default Layout;