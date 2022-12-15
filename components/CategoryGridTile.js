import React from 'react'
import { View, Text, Stylesheet, Pressable, StyleSheet } from "react-native"

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable style={[styles.buttonStyle, { backgroundColor: color }]} android_ripple={{ color: '#ccc' }}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  buttonStyle: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
