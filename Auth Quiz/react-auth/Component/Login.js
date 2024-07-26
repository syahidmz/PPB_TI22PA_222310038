import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
    const myEmail = "222310038@gmail.com";
    const myPassword = "222310038";
    const[email, setEmail] = useState("");
    const[password,setPassword] = useState("");
    const LoginHandler=()=>{
        if(email == myEmail && password == myPassword){
            alert("Selamat Datang, " + email);
        } else {
            alert("Login failed");
        }
    }
    return (
        <SafeAreaView style={styles.outerBox}>
          <View style={styles.innerBox}>
            <Text style={{ ...styles.text, fontWeight: 'bold', padding: 12, textAlign:'center' }}>Login Email</Text>
            <View style={{ width: '100%', paddingHorizontal: '1rem' }}>
                <Text style={{ fontSize: 14 }}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your email here!'
                    defaultValue={email}
                    onChangeText={(text)=>setEmail(text)}
                />
                <Text style={{ fontSize: 14 }}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder='Password'
                    onChangeText={(text)=>setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={() => LoginHandler()}><Text style={{textAlign:"center"}}>Login</Text></TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  outerBox:{
    flex:1,
    backgroundColor:'#f0f0f0',
    alignItems:'center',
    justifyContent:'center'
  },
  innerBox:{
    borderWidth:1,
    borderColor:'#d3d3d3',
    padding:10,
    borderRadius:10
  },
    text: {
      fontSize: 20,
      fontFamily:'Helvetica',
    },
    textInput:{
      borderColor:'black',
      borderRadius:8,
      borderWidth:1,
      marginVertical:8,
      paddingVertical:6,
    },
    button: {
      backgroundColor: 'purple',
      borderRadius:10,
      textAlign:'center', 
      paddingVertical:8,
      fontSize:10,
      color:'white',
      fontFamily:'arial',
    }
  });
  

export default Login;