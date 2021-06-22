import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ArticleScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>ArticleScreen</Text>
  </SafeAreaView>
);

export default ArticleScreen;
