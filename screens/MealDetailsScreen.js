import React, { useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from '../components/MealList';
import FavButton from '../components/FavButton';



function MealDetailsScreen({ route, navigation }) {

  const [favorite, setFavorite] = useState(false)

  const mealID = route.params.mealId

  const selectedMeal = MEALS.find((meal) => {
    return (
      meal.id === mealID
    )
  })
  // console.log(selectedMeal)

  function favPress() {
    setFavorite(!favorite)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <FavButton favPress={favPress} status={favorite} />
        )
      }
    })
  }, [navigation, favPress])
  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{selectedMeal.title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{selectedMeal.duration} min</Text>
            <Text style={styles.detailItem}>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{selectedMeal.affordability.toUpperCase()}</Text>
          </View>
          <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
              </View>
              <MealList list={selectedMeal.ingredients} />


              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Procedure</Text>
              </View>
              <MealList list={selectedMeal.steps} />
            </View>
          </View>
        </View>
      </ScrollView>


    </>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 10
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center'
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4,
    color: 'white'
  },
  image: {
    width: "100%",
    height: 300
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 14,
    marginVertical: 4
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: 'center'
  }
})