import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <FlatList
    data={
      [
        {key: 'rober'},
        {key: 'roberto'},
        {key: 'roberta'},
        {key: 'robersa'},
      ]
    }
    renderItem={
      ({item}) =><Text>{item.key} </Text>
    }
    
    />
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
