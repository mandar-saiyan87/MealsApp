import React from 'react';
import { View, Text, Stylesheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from '../components/CategoryGridTile';


function CategoriesScreen({ navigation }) {

  function renderCategory(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    )
  }


  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        numColumns={2}
      />
    </View>
  )
}

export default CategoriesScreen
