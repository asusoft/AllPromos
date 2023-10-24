//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Layout from './Layout';
import { COLORS, SIZES } from '../../../assets/constants/theme';
import icons from '../../../assets/constants/icons';
import Forminput from '../../components/Forminput';
import TextButton from './../../components/TextButton';

// create a component
const SignIn = () => {

    function RenderForm() {
        return (
            <View style={{ marginVertical: 20 }}>
                <Forminput
                    placeholder="Логин или телефон"
                />
                <Forminput
                    placeholder="Пароль"
                    secureTextEntry={true}
                    appendComponent={
                        <TouchableOpacity
                            style={styles.appendComponentPassword}>
                            <Image
                                source={icons.eye}
                                style={{
                                    height: 20, width: 20, tintColor: COLORS.light,
                                    tintColor: COLORS.light
                                }}
                            />
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Layout
                title="Авторизация"
                subtitle="Войти"
                titleContainerStyle={{
                    marginTop: SIZES.padding,
                }}
            >
                {RenderForm()}
                <TextButton text="Войти" color={COLORS.primary} />

            </Layout>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SIZES.base
    },
    appendComponentPassword: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//make this component available to the app
export default SignIn;
