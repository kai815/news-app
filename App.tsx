import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { NEWS_API_KEY } from '@env';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

type Article = {
  author: string,
  title: string,
  urlToImage: string,
  publishedAt: string
}

export default function App() {
  const [articles, setArticles] = useState<Article[] | []>([]);
  useEffect(() => {
    alert(NEWS_API_KEY);
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
