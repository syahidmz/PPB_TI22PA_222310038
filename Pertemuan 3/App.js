import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RCC from './Component/RCC';
import RFC from './Component/RFC';

export default function App() {
  return (
    <View style={styles.container}>
      <RCC />
      <RFC />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
