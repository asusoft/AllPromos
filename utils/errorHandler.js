export const handleSignInError = (error, setLoginError, setPasswordError) => {
    const errorMessage = error.message.trim();
    if (errorMessage.includes("NOT_FOUND")) {
        setLoginError("Логин не найден");
    } else if (errorMessage.includes("INVALID_INPUT_DATA")) {
        setPasswordError("Неверный пароль");
    } else {
        setPasswordError("Неверный логин или пароль");
    }
};