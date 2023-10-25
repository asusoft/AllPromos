//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import Header from './../../components/Header';
import { COLORS, SIZES } from '../../../assets/constants/theme';
import images from '../../../assets/constants/images';
import icons from '../../../assets/constants/icons';

// create a component
const Layout = ({
    title,
    subtitle,
    titleContainerStyle,
    children,
}) => {

    function RenderHeader() {
        return (
            <Header title={title} icon={icons.back} />
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {RenderHeader()}
            <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    style={styles.logo}
                />
            </View>
            <View style={{ ...titleContainerStyle }}>
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
            {/* Content */}
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    Header: {
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        height: 104,
        width: 104,
    },
});

//make this component available to the app
export default Layout;