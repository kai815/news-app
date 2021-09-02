import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { NEWS_API_KEY, BASE_URL } from '@env';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import ListItem from '../components/ListItem';

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

type RootStackParamList = {
  Home: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen = ({ navigation }:Props) => {
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
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
