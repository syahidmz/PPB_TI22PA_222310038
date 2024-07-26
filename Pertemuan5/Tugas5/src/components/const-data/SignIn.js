import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = () => {
    if (!email) {
      setErrorMessage("Masukkan email");
      return;
    }
    if (!password) {
      setErrorMessage("Masukkan password");
      return;
    }
    if (password.length < 3) {
      setErrorMessage("Type minimum 3 character");
      return;
    }
    const hasAlphabet = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasAlphabet || !hasNumber || !hasSymbol) {
      setErrorMessage("Value must contain alphabet, number and symbol");
      return;
    }

    if (email === "212310016@student.ibik.ac.id" && password === "BESTstudent_2023") {
      setErrorMessage("");
      navigation.replace("Main");
    } else {
      setErrorMessage("Email/Password is not match");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.welcome}>Welcome to Instagram</Text>
        <Text style={styles.title}>Sign In</Text>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#fff",
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#ff6347",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignIn;
