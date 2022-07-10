import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>

        </View>
    );
};

export default HomeScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
});