import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from "../../assets/constants/theme";
import { ItemsProps } from "../../types";


const Items: React.FC<ItemsProps> = ({ items }) => {
    return (
        <View style={{
            flexDirection: 'row',
            gap: 15
        }}>
            {
                items.map((item) => (
                    <View key={item.id} style={styles.itemCard}>
                        <View style={styles.quantity}>
                            <Text style={{
                                color: COLORS.WHITE
                            }}>{item.quantity}</Text>
                        </View>
                        <Image source={item.image} resizeMode='contain' style={{
                            height: 80,
                            width: 60
                        }} />
                    </View>
                ))
            }
        </View>
    );
}


const styles = StyleSheet.create({
    itemCard: {
        height: 94,
        width: 94,
        backgroundColor: COLORS.WHITE,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quantity: {
        position: "absolute",
        top: -5,
        right: -5,
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default Items