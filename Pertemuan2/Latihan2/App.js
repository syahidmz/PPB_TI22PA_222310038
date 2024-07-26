import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Latihan1 from './Component/Soal1&2';
import Latihan3 from './Component/Soal3';
import Latihan4rcc from './Component/Soal4RCC';
import Latihan4rfc from './Component/Soal4RFC';


export default function App() {
  return (
    // <Latihan1 />
    // <Latihan3 />
    // <Latihan4rcc />
    <Latihan4rfc/>
  );
}