import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { NEWS_API_KEY, BASE_URL } from '@env';
import axios from 'axios';
import ListItem from './components/ListItem';

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

const URL = `${BASE_URL}?country=jp&category=business&apiKey=${NEWS_API_KEY}`;

export default function App() {
  const [articles, setArticles] = useState<Article[] | []>([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
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
