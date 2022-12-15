import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text>These are Favorite Meals</Text>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
