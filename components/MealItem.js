import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"

function MealItem({ mealprops }) {

  const { id, title, imageUrl, duration, complexity, affordability } = mealprops;

  const navigation = useNavigation();
  return (
    <>
      <Pressable style={styles.mealItem} android_ripple={{ color: '#ccc' }} onPress={() => navigation.navigate('MealDetails', {
        mealId: id
      })}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.img} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration} min</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </>

  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    padding: 20,
    elevation: 5
  },
  img: {
    width: "100%",
    height: 250
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    margin: 8
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center'
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4
  },
  buttonPress: {
    opacity: 0.5
  }
})
