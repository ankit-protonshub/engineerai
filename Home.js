import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TextInput: '',
        }
    }

    callAPI () {
        //console.log(this.state.TextInput);

        let url = 'https://restcountries.eu/rest/v2/name/' + this.state.TextInput;
        fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log('API Response: ', responseJson);
            
            var capital = responseJson.capital
            var population = responseJson.population
            var latlng = responseJson.latlng
            var flag  = responseJson.flag

            this.props.navigation.navigate('CountryInfoNav', {
                setCapital: capital,
                setPopulation: population,
                setLatlng: latlng,
                setFlag: flag,
            })   
        })
        .catch((error) => {
            console.error(error);
        });
    }

  render() {
    return (
        <SafeAreaView style = {{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> Demo Engineer AI </Text>

                <TextInput style={{ marginTop: 20, height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
                            placeholder = {'Enter Country'}
                            onChangeText = {(TextInput) => this.setState({TextInput})}
                            value = {this.state.TextInput}/>                         

                <TouchableOpacity style={{marginTop: 20, height: 50, width: 200, borderRadius: 10,
                                justifyContent: 'center', alignItems: 'center'}}
                                onPress={this.callAPI}>
                        <Text style = {{fontSize: 20, fontWeight: '600'}}> Submit </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}