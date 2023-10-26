//import liraries
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../assets/constants/theme';

const Forminput = ({
    placeholder,
    secureTextEntry,
    keyboardType,
    autoComplete,
    value,
    onChange,
    appendComponent,
    errorMsg = '',
}) => {
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput style={{
                    flex: 1
                }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.light}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoComplete={autoComplete}
                    autoCapitalize='none'
                    onChangeText={text => onChange(text)}
                    value={value}
                />
                {appendComponent}
            </View>
            {
                errorMsg && (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ color: COLORS.red, marginEnd: 10 }}>{errorMsg}</Text>
                    </View>)
            }
        </>
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