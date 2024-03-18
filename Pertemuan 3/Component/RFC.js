import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const RFC = () => {
    return (
        <View>
            
            <View style={{ padding: 10 }}>
            <Text>NPM</Text>
            <TextInput
               style={{ height: 40, borderWidth: 1, padding: 10, width: 200 }}
               placeholder='Masukan NPM  '  
               keyboardType='numeric'
             />
            </View>

            <View style={{ padding: 10 }}>
            <Text>Nama</Text>
            <TextInput
               style={{ height: 40, borderWidth: 1, padding: 10, width: 200 }}
               placeholder='Masukan Nama  '  
             />
            </View>

            <View style={{ padding: 10 }}>
            <Text>Kelas</Text>
            <TextInput
               style={{ height: 40, borderWidth: 1, padding: 10, width: 200 }}
               placeholder='Masukan Kelas '  
             />
            </View>

            <View style={{ padding: 10 }}>
                <Button title='SUBMIT' />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default RFC;
