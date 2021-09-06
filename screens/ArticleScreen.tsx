import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
/* types */
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

type Props = {
  route: RouteProp<RootStackParamList, 'Article'>;
};

const ArticleScreen = ({ route }:Props) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ url: article.url }} />
    </SafeAreaView>
  );
};

export default ArticleScreen;
