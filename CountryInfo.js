import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default class CountryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getCapital: this.props.navigation.getParam('setCapital'),
            getPopulation: this.props.navigation.getParam('setPopulation'),
            getLatlng: this.props.navigation.getParam('setLatlng'),
            getFlag: this.props.navigation.getParam('setFlag'),
        }
    }

  render() {
    return (
        <SafeAreaView style = {{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center'}}>
                <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> Demo Engineer AI </Text>

                                   

                <TouchableOpacity style={{marginTop: 20, backgroundColor: 'red', height: 50, width: 200, borderRadius: 10,
                                justifyContent: 'center', alignItems: 'center'}}
                                onPress={this.callAPI}>
                        <Text style = {{fontSize: 20, fontWeight: '600'}}> Capital Weather </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}