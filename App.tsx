import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, View,
} from 'react-native';
import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/seed/picsum/200/300"
        title="In the following example,
        the nested title and body text will inherit the fontFamily from styles.baseText,
        but the title provides its own additional styles.
        The title and body will stack on top of each other on account of the literal newlines:"
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://picsum.photos/seed/picsum/200/300"
        title="In the following example,
        the nested title and body text will inherit the fontFamily from styles.baseText,
        but the title provides its own additional styles.
        The title and body will stack on top of each other on account of the literal newlines:"
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://picsum.photos/seed/picsum/200/300"
        title="In the following example,
        the nested title and body text will inherit the fontFamily from styles.baseText,
        but the title provides its own additional styles.
        The title and body will stack on top of each other on account of the literal newlines:"
        author="SampleNews"
      />
    </View>
  );
}
