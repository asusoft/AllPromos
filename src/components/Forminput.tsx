//import liraries
import React from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';
import { COLORS } from '../../assets/constants/theme';



type FormInputProps =  TextInputProps & {
    placeholder: string,
    secureTextEntry?: boolean,
    appendComponent?: any;
    errorMsg: string;
    onTextChange: (text: string) => void;
  };

const Forminput:React.FC<FormInputProps> = ({
    placeholder,
    secureTextEntry,
    autoComplete = 'off',
    autoCapitalize = 'none',
    onTextChange,
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
                    placeholderTextColor={COLORS.LIGHT}
                    secureTextEntry={secureTextEntry}
                    autoComplete={autoComplete}
                    autoCapitalize={autoCapitalize}
                    onChangeText={text => onTextChange(text)}
                />
                {appendComponent}
            </View>
            {
                errorMsg && (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ color: COLORS.RED, marginEnd: 10 }}>{errorMsg}</Text>
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
        backgroundColor: COLORS.LIGHT_GRAY
    },
});


export default Forminput