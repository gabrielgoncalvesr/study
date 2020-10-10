import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { withTimingTransition, onGestureEvent, withSpringTransition } from "react-native-redash/lib/module/v1";
import Animated, { cond, eq, set, useCode, interpolate, SpringUtils } from 'react-native-reanimated';
import { State, TapGestureHandler } from 'react-native-gesture-handler';

import Logo from './components/Logo';
import OverlayBg from './components/OverlayBg';
import HeaderBackArrow from './components/HeaderBackArrow';

import { LOGIN_VIEW_HEIGHT, SCREEN_HEIGHT } from './util/Constants';

const App = () => {

    const scale = useRef(new Animated.Value(0));
    const scaleAnimation = withTimingTransition(scale.current);

    const isOpen = useRef(new Animated.Value(0));
    const isOpenAnimation = withSpringTransition(isOpen.current, {
        ...SpringUtils.makeDefaultConfig(),
        overshootCampling: true,
        damping: new Animated.Value(20)
    });

    const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
    const gestureHandler = onGestureEvent({ state: gestureState.current });

    const innerLoginY = interpolate(scaleAnimation, {
        inputRange: [0, 1],
        outputRange: [LOGIN_VIEW_HEIGHT, 0]
    });

    const outerLoginY = interpolate(isOpenAnimation, {
        inputRange: [0, 1],
        outputRange: [SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, LOGIN_VIEW_HEIGHT]
    });

    useCode(() =>
        cond(eq(gestureState.current, State.END), [
            cond(eq(isOpen.current, 0), set(isOpen.current, 1)),
        ]),
    );
    useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

    return (
        <View style={styles.container}>
            <View style={{ ...styles.logoContainer }}>
                <Logo scale={scaleAnimation} />
            </View>

            <HeaderBackArrow isOpenAnimation={isOpenAnimation} />

            <Animated.View style={{ backgroundColor: '#FFF', ...StyleSheet.absoluteFill, transform: [{ translateY: outerLoginY }] }}>
                <OverlayBg isOpenAnimation={isOpenAnimation} />

                <Animated.View>
                    <Animated.View style={{ height: LOGIN_VIEW_HEIGHT, transform: [{ translateY: innerLoginY }], ...styles.loginView }}>
                        <Animated.View style={{ ...styles.heading }}>
                            <Text style={{ ...styles.textTitle }}>Get moving with Uber</Text>
                        </Animated.View>

                        <TapGestureHandler {...gestureHandler}>
                            <Animated.View>
                                <Animated.View pointerEvents="none" style={{ ...styles.textInputContainer }}>
                                    <Image source={require('./assets/brasil-logo.png')} style={{ ...styles.image }} />

                                    <Text style={{ ...styles.prefix }}>+55</Text>

                                    <TextInput
                                        keyboardType="number-pad"
                                        style={{ ...styles.textInput }}
                                        placeholder="Enter your mobile number"
                                    />
                                </Animated.View>
                            </Animated.View>
                        </TapGestureHandler>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32a852',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginView: {
        backgroundColor: '#FFF',
    },
    heading: {
        alignItems: 'flex-start',
        marginHorizontal: 25,
        marginTop: 50
    },
    image: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    prefix: {
        fontSize: 20,
        paddingHorizontal: 10
    },
    textInput: {
        flex: 1,
        fontSize: 20
    },
    textInputContainer: {
        flexDirection: 'row',
        margin: 25
    },
    textTitle: {
        fontSize: 24
    }
});