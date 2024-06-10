import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Welcome to Goalkeeper.</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
