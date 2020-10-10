import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';
import { interpolateColor } from 'react-native-redash/lib/module/v1';

import { LOGIN_VIEW_HEIGHT, SCREEN_HEIGHT } from '../../util/Constants';

const OverlayBg = ({ isOpenAnimation }) => {

    const translateY = interpolate(isOpenAnimation, {
        inputRange: [0, 1],
        outputRange: [SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, -LOGIN_VIEW_HEIGHT]
    });

    const backgroundColor = interpolateColor(isOpenAnimation, {
        inputRange: [0, 0.1, 1],
        outputRange: ['#32a852', '#FFF', '#FFF']
    });

    return (
        <Animated.View style={{ ...styles.overlayView, height: LOGIN_VIEW_HEIGHT, backgroundColor, transform: [{ translateY }] }} />
    );
}

export default OverlayBg;

const styles = StyleSheet.create({
    overlayView: {
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
});