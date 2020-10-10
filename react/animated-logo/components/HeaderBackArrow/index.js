import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';

import { Ionicons as Icon } from '@expo/vector-icons';

const HeaderBackArrow = ({ isOpenAnimation }) => {

    const opacity = interpolate(isOpenAnimation, {
        inputRange: [0, 0.7, 1],
        outputRange: [0, 0, 1]
    });

    return (
        <Animated.View style={{ ...styles.backArrow, opacity }}>
            <Icon name="md-arrow-back" size={24} />
        </Animated.View>
    );
}

export default HeaderBackArrow;

const styles = StyleSheet.create({
    backArrow: {
        top: 60,
        left: 25,
        width: 60,
        height: 60,
        zIndex: 100,
        position: 'absolute',
    },
});
