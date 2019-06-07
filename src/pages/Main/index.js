import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default class Main extends Component {

  state = {
    newBox: ''
  }

  componentDidMount = async () => {
    const box = await AsyncStorage.getItem('@Box:box');

    if (box) {
      this.props.navigation.navigate('Box');
    }
  }

  handleSignIn = async () => {
    const response = await api.post('boxes', {
      title: this.state.newBox
    });

    await AsyncStorage.setItem('@Box:box', response.data._id);

    this.props.navigation.navigate('Box');
  }

  render() {
    return (
      <View style={styles.container} >

        <Image style={styles.logo} source={logo} />

        <TextInput
          style={styles.input}
          placeholder='Criar uma Box'
          placeholderTextColor='#999'
          autoCapitalize='none'
          autoCorrect={false}
          underlineColorAndroid='transparent'
          value={this.state.newBox}
          onChangeText={ text => this.setState({ newBox: text })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSignIn} >
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
