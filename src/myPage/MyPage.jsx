import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import personData from "./personData.json";
import MyPageItem from './MyPageItem';
export default function MyPage() {
  return (
    <View style={styles.container}>
      <FlatList
        data={personData}
        renderItem={({item}) => <MyPageItem item={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "rgba(50,50,50,1)",
  }
});