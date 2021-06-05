import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, 
  View,
  FlatList,
  SafeAreaView
} from 'react-native';
import ListItem from './components/ListItem';
import articles from "./dummies/articles.json"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItem 
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(_item,index)=> index.toString()}
      />
    </SafeAreaView>
  );
}
