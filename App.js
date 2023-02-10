import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import Test1 from "./components/AuthForm";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Test1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
