import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={styles.itemContainer}
      >
        <View
          style={styles.leftContainer}
        >
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={{
              uri: 'https://picsum.photos/seed/picsum/200/300',
            }}
          />
        </View>
        <View
          style={styles.rightContainer}
        >
          <Text numberOfLines={3} style={styles.text}>
            In the following example,
            the nested title and body text will inherit the fontFamily from styles.baseText,
            but the title provides its own additional styles.
            The title and body will stack on top of each other on account of the literal newlines:
          </Text>
          <Text style={styles.subText}>React News</Text>
        </View>
      </View>
    </View>
  );
}
