import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import Header from './Header';
import { COLORS, SIZES } from '../../assets/constants/theme';
import images from '../../assets/constants/images';
import icons from '../../assets/constants/icons';

const Layout = ({
    title,
    leftIcon,
    titleColor,
    subtitle,
    subtitleColor = "dark",
    subtitleIcon,
    logo,
    logoSize = "small",
    children,
}) => {

    const logoStyles = logoSize === 'big' ? styles.logoBig : styles.logoSmall;

    return (
        <SafeAreaView style={styles.container}>
            <Header title={title} icon={leftIcon} color={titleColor} />
            <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                <Image
                    source={logo}
                    resizeMode="contain"
                    style={logoStyles}
                />
                <View style={{ flexDirection: 'row', marginTop: SIZES.base, gap: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS[subtitleColor],
                            fontSize: 14
                        }}>
                        {subtitle}
                    </Text>
                    {
                        subtitleIcon && (
                            <Image
                                source={subtitleIcon}
                                resizeMode="contain"
                                style={{ height: 20, width: 20 }}
                            />
                        )
                    }
                </View>
            </View>

            {/* Content */}
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoSmall: {
        height: 100, // Small logo size
        width: 100,  // Small logo size
    },
    logoBig: {
        height: 130, // Big logo size
        width: 130,  // Big logo size
    },
});

export default Layout;