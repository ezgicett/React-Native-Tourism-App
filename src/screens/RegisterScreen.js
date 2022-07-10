import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
var validator = require('validator');


const RegisterScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        match_passwords: true,
        isValidUser: true
    });

    const handleValidUser = (val) => {

        if (validator.isEmail(val)) {
            setData({
                ...data,
                email: val,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        if (data.confirm_password == data.password) {
            setData({
                ...data,
                confirm_password: val,
                match_passwords: true
            });
        } else {
            setData({
                ...data,
                match_passwords: false
            });
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={[styles.footer, {
                backgroundColor: colors.background
            }]}>

                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Email</Text>
                <View style={styles.action}>
                    <TextInput
                        underlineColorAndroid='#000000'
                        placeholder="Username"
                        placeholderTextColor="#666666"

                        style={[styles.textInput, {
                            color: 'black'
                        }]}
                        autoCapitalize="none"
                        // onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                </View>
                {data.isValidUser ? null :
                    <Text style={[styles.errorMsg]}>Invalid Email!</Text>}
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Password</Text>
                <View style={styles.action}>
                    <TextInput
                        underlineColorAndroid='#000000'
                        placeholder="Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={true}
                        style={[styles.textInput, {
                            color: 'black'
                        }]}
                        autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                </View>
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Rewrite Password</Text>
                <View style={styles.action}>
                    <TextInput
                        underlineColorAndroid='#000000'
                        placeholder="Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={true}
                        style={[styles.textInput, {
                            color: 'black'
                        }]}
                        autoCapitalize="none"
                        onEndEditing={(e) => handleConfirmPasswordChange(e.nativeEvent.text)}
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />

                </View>
                {data.match_passwords ? null :
                    <Text style={[styles.errorMsg]}>Passwords don't matches!</Text>}
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            if (data.isValidUser && data.match_passwords) {
                                //navigate to home page
                                navigation.navigate('AppStack');
                            }
                        }}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginScreen')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});