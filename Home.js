import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state ={
          TextInput: '',
        };
    }

    componentDidMount() {
        console.disableYellowBox = true;
    }

    btnValidateSubmit = () => {
        if (this.state.TextInput == '') {
            alert('Please enter country')
        }
        else {
            this.callAPI();
        }
    }

    callAPI () {
        requestAnimationFrame(() => {

        let url = 'https://restcountries.eu/rest/v2/name/' + this.state.TextInput;
        fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('API Response: ', responseJson);
            
            var capital = responseJson[0].capital
            var population = responseJson[0].population
            var latitude = responseJson[0].latlng[0]
            var longitude = responseJson[0].latlng[1]
            var flag  = responseJson[0].flag

            this.props.navigation.navigate('CountryInforNav', {
                setCapital: capital,
                setPopulation: population,
                setLat: latitude,
                setLong: longitude,
                setFlag: flag,
            })   
        })
        .catch((error) => {
            console.error(error);
        });

        });
    }

  render() {
    return (
        <SafeAreaView style = {{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> Demo Engineer AI </Text>

                <TextInput style={{ marginTop: 20, height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
                            placeholder = {'Enter Country'}
                            onChangeText={(TextInput) => this.setState({ TextInput })}
                            value={this.state.TextInput}/>                         

                <TouchableOpacity style={{marginTop: 20, height: 50, width: 200, borderRadius: 10,
                                justifyContent: 'center', alignItems: 'center'}}
                                onPress={this.btnValidateSubmit}>
                        <Text style = {{fontSize: 20, fontWeight: '600'}}> Submit </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}