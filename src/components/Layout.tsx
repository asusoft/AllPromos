import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import Header from './Header';
import { COLORS, SIZES } from '../../assets/constants/theme';
import { LayoutProps } from '../../types';


const Layout: React.FC<LayoutProps> = ({
    title,
    leftIcon,
    titleColor,
    subtitle,
    subtitleColor = "DARK",
    subtitleIcon,
    logoSource,
    logoSize = "small",
    children,
}) => {

    const logoStyles = logoSize === 'big' ? styles.logoBig : styles.logoSmall;

    return (
        <SafeAreaView style={styles.container}>
            <Header title={title} icon={leftIcon} color={titleColor} />
            <View style={{ alignItems: 'center', marginTop: SIZES.BASE }}>
                <Image
                    source={logoSource}
                    resizeMode="contain"
                    style={logoStyles}
                />
                <View style={{ flexDirection: 'row', marginTop: SIZES.BASE, gap: 15, alignItems: 'center', justifyContent: 'center' }}>
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
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoSmall: {
        height: 100,
        width: 100,
    },
    logoBig: {
        height: 130,
        width: 130,
    },
});

export default Layout;