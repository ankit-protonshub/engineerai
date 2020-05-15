import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';

export default class WeatherInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

  render() {
    return (
        <SafeAreaView style = {{flex: 1}}>
                        <View style = {{height: 40}}>
                <TouchableOpacity style={{marginLeft: 8, justifyContent: 'center', }}
                                    onPress={() => {requestAnimationFrame(() => {this.props.navigation.goBack()})}}>
                            <Text style = {{fontSize: 20, fontWeight: '600'}}> {'<'} </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}