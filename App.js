import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNatigator from './src/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNatigator />
    </NavigationContainer>
  );
}
