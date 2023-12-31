//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Layout from '../../components/Layout';
import { COLORS, SIZES } from '../../../assets/constants/theme';
import icons from '../../../assets/constants/icons';
import Forminput from '../../components/Forminput';
import TextButton from '../../components/TextButton';
import images from '../../../assets/constants/images';

import { useAuth } from '../../contexts/authContext/AuthContext';
import { handleSignInError } from '../../utils/errorHandler';

// create a component
const SignIn = () => {

    const [login, setLogin] = React.useState('');
    const [loginError, setLoginError] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [signInError, setSignInError] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(true)

    const { signInUser, authToken } = useAuth()

    const isEnableSignIn = () => {
        return (
            login.trim() !== "" &&
            password.trim() !== ""
        );
    };

    const handlSignIn = async () => {
        if (isEnableSignIn()) {
            try {
                await signInUser(login, password)
            } catch (error) {
                handleSignInError(error, setLoginError, setPasswordError);
            }
        } else {
            setSignInError("Поля не могут быть пустыми")
        }
    }

    function RenderForm() {
        return (
            <View style={{ marginVertical: 20 }}>
                <Forminput
                    placeholder="Логин или телефон"
                    onTextChange={(value: string) => {
                        setLoginError('');
                        setPasswordError("");
                        setSignInError("");
                        setLogin(value);
                    }}
                    errorMsg={loginError}
                />
                <Forminput
                    placeholder="Пароль"
                    secureTextEntry={showPassword}
                    onTextChange={value => {
                        setLoginError('');
                        setPasswordError("");
                        setSignInError("");
                        setPassword(value);
                    }}
                    appendComponent={
                        <TouchableOpacity
                            style={styles.appendComponentPassword}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Image
                                source={icons.eye}
                                style={{
                                    height: 20, width: 20, tintColor: COLORS.LIGHT,
                                }}
                            />
                        </TouchableOpacity>
                    }
                    errorMsg={passwordError}
                />
                {signInError && (
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ color: COLORS.RED, marginEnd: 10 }}>{signInError}</Text>
                    </View>
                )}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Layout
                title="Авторизация"
                leftIcon={icons.back}
                titleColor="BLACK"
                logoSource={images.logo_black}
                subtitle="Войти"
            >
                {RenderForm()}
                <TextButton text="Войти" color={'PRIMARY'} onPress={handlSignIn} />
                <Text style={styles.recover}>Не помню пароль</Text>
                <View style={{ marginTop: "auto" }}>
                    <TextButton icon={icons.vk} text="Войти через Вконтакте" color={'BLUE'} onPress={() => { }} />
                    <TextButton icon={icons.yandex} text="Войти через Яндекс" color={'ORANGE'} onPress={() => { }} />
                </View>
                <Text style={styles.register}>Регистрация</Text>
            </Layout>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SIZES.BASE
    },
    appendComponentPassword: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    register: {
        marginBottom: 'auto',
        alignSelf: 'center',
        marginTop: 'auto',
        color: COLORS.BLACK,
        fontSize: SIZES.BODY
    },
    recover: {
        alignSelf: 'center',
        marginTop: 15,
        color: COLORS.LIGHT,
        fontSize: SIZES.FONT
    }
});

//make this component available to the app
export default SignIn;
