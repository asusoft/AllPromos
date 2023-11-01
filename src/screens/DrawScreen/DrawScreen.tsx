import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Layout from '../../components/Layout';
import Timer from '../../components/Timer';
import Items from '../../components/Items';
import images from '../../../assets/constants/images';
import icons from '../../../assets/constants/icons';

import { COLORS, SIZES } from '../../../assets/constants/theme';
import { ITEMS } from '../../../assets/constants/dummyData';
import TextButton from '../../components/TextButton';

// create a component
const DrawScreen = () => {

    const [timer, setTimer] = React.useState<number>(70);

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

    return (
        <ImageBackground style={styles.container} source={images.background_image}>
            <Layout
                title="Розыгрыш"
                leftIcon={icons.Arrow_left_long}
                titleColor="WHITE"
                logoSource={images.logo_white}
                logoSize="big"
                subtitle="До начала розыгрыша"
                subtitleColor="WHITE"
                subtitleIcon={icons.question}
            >
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                    <Timer timer={timer} />
                    <View style={{ marginTop: SIZES.PADDING, gap: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: COLORS.WHITE,
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
                <View style={{ marginTop: "auto", marginBottom: 'auto' }}>
                    <TextButton text="Участвовать" color="PRIMARY" onPress={() => {}} />
                </View>
            </Layout>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.BASE
    }
});

//make this component available to the app
export default DrawScreen;
