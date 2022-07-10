import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Image source={require('../../assets/images/airplane.png')}
                    style={styles.splashScreenImage}>

                </Image>
                {/* <Text>Splash Screen</Text> */}

            </View>
            <View style={[styles.footer, { backgroundColor: colors.backgroundColor }]}>
                <Text style={[styles.text]}>TRAVEL TO YOUR FUTURE!</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#AD40AF',
                        padding: 20,
                        width: '90%',
                        borderRadius: 10,
                        marginBottom: 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => {
                        console.log("clicked");
                        navigation.navigate('LoginScreen')
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontFamily: 'Roboto-MediumItalic',
                        }}>
                        Let's Begin
                    </Text>
                </TouchableOpacity>
                {/* <Button
                    onPress={() =>
                        navigation.navigate('LoginScreen')}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
            </View>

        </View>
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        //justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginTop: 5,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    splashScreenImage: {
        width: 100,
        height: 100,
    }
});