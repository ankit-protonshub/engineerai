import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';

export default class CountryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getCapital: this.props.navigation.getParam('setCapital'),
            getPopulation: this.props.navigation.getParam('setPopulation'),
            getLat: this.props.navigation.getParam('setLat'),
            getLong: this.props.navigation.getParam('setLong'),
            getFlag: this.props.navigation.getParam('setFlag'),
        }
    }

    btnWeather = () => {
        this.props.navigation.navigate('WeatherInfoNav')
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
            <View style={{flex: 1, marginTop: 8}}>
                <View style = {{ flex: 1}}>
                    <View style = {{marginTop: 8, flexDirection: 'row', height: 35}}>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> Capital: </Text>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> {this.state.getCapital} </Text>
                    </View>
                    <View style = {{marginTop: 8, flexDirection: 'row', height: 35}}>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> Population: </Text>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> {this.state.getPopulation} </Text>
                    </View>
                    <View style = {{marginTop: 8, flexDirection: 'row', height: 35}}>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> Latitude: </Text>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> {this.state.getLat} </Text>
                    </View>
                    <View style = {{marginTop: 8, flexDirection: 'row', height: 35}}>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> Longitude: </Text>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> {this.state.getLong} </Text>
                    </View>
                    <View style = {{marginTop: 8, flexDirection: 'row', height: 35}}>
                        <Text style = {{ marginTop: 16, fontSize: 16, fontWeight: '600'}}> Flag: </Text>
                    </View>                     

                    <Image style={{marginTop: 20, height: 150, width: 150, }}
                               source={{uri: this.state.getFlag}}/>         
                </View>

                                   

                <TouchableOpacity style={{marginTop: 20, backgroundColor: 'green', height: 50, width: 200, borderRadius: 10,
                                justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}
                                onPress={this.btnWeather}>
                        <Text style = {{color: 'white', fontSize: 20, fontWeight: '600'}}> Capital Weather </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}