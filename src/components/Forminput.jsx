//import liraries
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../assets/constants/theme';

const Forminput = ({
    placeholder,
    secureTextEntry,
    keyboardType,
    autoComplete,
    autoCapitalize,
    value,
    onChange,
    appendComponent,
}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={{
                flex: 1
            }}
                placeholder={placeholder}
                placeholderTextColor={COLORS.light}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoComplete={autoComplete}
                autoCapitalize={autoCapitalize}
                onChangeText={text => onChange(text)}
                value={value}
            />
            {appendComponent}
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 45,
        borderRadius: 8,
        padding: 10,
        backgroundColor: COLORS.lightGray
    },
});


export default Forminput