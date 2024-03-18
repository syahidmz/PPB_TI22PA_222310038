import React, { Component } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

class RCC extends Component {
    render() {
        return (
            <View style={{alignItems:'center' }}
            >
                <Image source={require("../assets/vampire.png")} style={{width:128, height:128}}  / >
                
                <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>FORM Data Diri </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default RCC;
