import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ArticleScreen = () => (
  <SafeAreaView style={styles.container}>
    <WebView source={{ url: 'https://expo.io/' }} />
  </SafeAreaView>
);

export default ArticleScreen;
