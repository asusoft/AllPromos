import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, Image } from 'react-native';
import Layout from '../../components/Layout';
import Timer from './../../components/Timer';
import Items from './../../components/Items';
import images from '../../../assets/constants/images';
import icons from '../../../assets/constants/icons';
import { COLORS, SIZES } from '../../../assets/constants/theme';
import { ITEMS } from '../../../assets/constants/dummyData';

// create a component
const DrawScreen = () => {

    const [timer, setTimer] = React.useState(70);

    React.useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const formattedTime = `${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(
        (timer % 60) < 10 ? '0' + (timer % 60) : timer % 60
    ).padStart(2, '0')}`;

    return (
        <ImageBackground style={styles.container} source={images.background_image}>
            <Layout
                title="Авторизация"
                leftIcon={icons.Arrow_left_long}
                titleColor="white"
                logo={images.logo_white}
                logoSize="big"
                subtitle="До начала розыгрыша"
                subtitleColor="white"
                subtitleIcon={icons.question}
            >
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                    <Timer timer={timer} />

                    <View style={{ marginTop: SIZES.padding, gap: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: COLORS.white,
                                    fontSize: 14
                                }}>
                                Разыгрываем сегодня
                            </Text>
                            <Image
                                source={icons.question}
                                resizeMode="contain"
                                style={{ height: 20, width: 20 }}
                            />
                        </View>
                        <Items items={ITEMS} />
                    </View>
                </View>
            </Layout>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.base
    },
    logo: {
        height: 130,
        width: 130,
    },
});

//make this component available to the app
export default DrawScreen;
