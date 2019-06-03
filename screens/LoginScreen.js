import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
    Button,
} from 'react-native';

import bgimage from '../assets/images/Android-BackgroundChart.png';
import logoimage from '../assets/images/e4ec2acf005fe764835f1ffb1a00e4b4-bolhas-cobertas-icone-de-carro.png';
import Icon from 'react-native-vector-icons/Ionicons';
const { width: WIDTH } = Dimensions.get('window');

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showPass: true,
            press: false,
        };
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true });
        } else {
            this.setState({ showPass: true, press: false });
        }
    };

    render() {
        return (
            <ImageBackground source={bgimage} style={styles.backgroundContainer}>
                <View styles={styles.logoContainer}>
                    <Image source={logoimage} style={styles.logo} />
                    <Text style={styles.logoText}>CARWASH</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon
                        name={'ios-person'}
                        size={28}
                        color={'rgba(255,255,255, 0.7)'}
                        style={styles.inputicone}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon
                        name={'ios-lock'}
                        size={28}
                        color={'rgba(255,255,255, 0.7)'}
                        style={styles.inputicone}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Senha'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid="transparent"
                    />

                    <TouchableOpacity
                        style={styles.btnEys}
                        onPress={this.showPass.bind(this)}>
                        <Icon
                            name={this.state.showPass == false ? 'ios-eye' : 'ios-eye-off'}
                            size={26}
                            color={'rgba(255,255,255,0.7)'}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.text}>Logar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnCadastrar}
                    onPress={() => {
                        this.props.navigation.navigate('Register');
                    }}>
                    <Text style={styles.text}>Cadastrar</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },

    logo: {
        width: 170,
        height: 120,
    },

    logoText: {
        alignItems: 'center',
        color: 'white',
        fontSize: 35,
        fontWeight: '500',
        marginTop: 0.1,
        marginBottom: 50,
        opacity: 0.7,
    },

    inputContainer: {
        marginTop: 10,
    },

    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
    },

    inputicone: {
        position: 'absolute',
        top: 8,
        left: 37,
    },

    btnEys: {
        position: 'absolute',
        top: 8,
        right: 37,
    },

    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20,
    },

    btnCadastrar: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20,
    },

    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
    },
});
