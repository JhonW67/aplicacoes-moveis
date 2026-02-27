import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardComponent from './components/CardComponent';


export default function App() {
  const [count, setCount] = useState<number | null>(null)

  function handleCount() {
    // setCount(c => c + 1)
    const value = count ? count : 0
    setCount(value + 1)
  }


  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <CardComponent
        nome="Brendo Vale"
        email="brendo@univag.edu.br"
        idade={99}
        avatar="https://github.com/bvaledev.png"
      >
        <Text>{count}</Text>
      </CardComponent>



      <TouchableOpacity onPress={handleCount}>
        <Text>Clique aqui, não é vírus</Text>
      </TouchableOpacity>

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