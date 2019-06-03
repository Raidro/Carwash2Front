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
} from 'react-native';

import bgimage from '../assets/images/Android-BackgroundChart.png';
import logoimage from '../assets/images/e4ec2acf005fe764835f1ffb1a00e4b4-bolhas-cobertas-icone-de-carro.png';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const { width: WIDTH } = Dimensions.get('window');

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    handleName = text => {
        this.setState({ name: text });
    };

    handleEmail = text => {
        this.setState({ email: text });
    };

    handlePsw = text => {
        this.setState({ password: text });
    };

    render() {
        return (
            <ImageBackground source={bgimage} style={styles.backgroundContainer}>
                <View styles={styles.logoContainer}>
                    <Image source={logoimage} style={styles.logo} />
                    <Text style={styles.logoText}>CADASTRO</Text>
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
                        onChangeText={this.handleName}
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
                        placeholder={'Email'}
                        secureTextEntry={true}
                        onChangeText={this.handleEmail}
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
                        secureTextEntry={true}
                        onChangeText={this.handlePsw}
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
                        placeholder={'Confrimar Senha'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <TouchableOpacity
                    style={styles.btnCadastrar}
                    onPress={() => {
                        //console.log(this.state);

                        axios({
                            method: 'post',
                            url: 'http://localhost/carwash2/public/user',
                            data: {
                                name: this.handleName,
                                email: this.handleEmail,
                                password: this.handlePsw,
                            },
                        });
                    }}>
                    <Text style={styles.text}>Cadastar</Text>
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
        //marginTop: 80,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
    },

    inputicone: {
        position: 'absolute',
        top: 8,
        left: 37,
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
