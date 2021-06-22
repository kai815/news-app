import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
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

type ListItemProps = {
  imageUrl:string | null,
  title:string,
  author: string,
  onPress(): void
}

const ListItem = ({
  imageUrl, title, author, onPress,
}:ListItemProps) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={onPress}
  >
    <View
      style={styles.leftContainer}
    >
      {!!imageUrl && (
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={{
            uri: imageUrl,
          }}
        />
      )}
    </View>
    <View
      style={styles.rightContainer}
    >
      <Text numberOfLines={3} style={styles.text}>
        {title}
      </Text>
      <Text style={styles.subText}>{author}</Text>
    </View>
  </TouchableOpacity>
);
export default ListItem;
