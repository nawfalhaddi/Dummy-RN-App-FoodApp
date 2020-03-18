import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, Image } from 'react-native';
import { MEALS } from '../data/dummy-data'
import FavButton from '../components/FavButton'

const MealDetailScreen = props => {
  const mealId = props.route.params.id;
  const oneMeal = MEALS.find(meal => meal.id === mealId);

  const markAsFav = () => {
    console.log('marked as fav');
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: oneMeal.title,
      headerStyle: { backgroundColor: "#c1c1c1" },
      headerTintColor: 'black',
      headerRight: () => (<FavButton {...props} iconName="ios-star" color="black" onPressing={markAsFav} />),
    })
    return () => { };
  }, [props.route.params.id])


  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image source={{ uri: oneMeal.imageUrl }} style={styles.image} />
        <View style={styles.mealSummary}>
          <Text style={styles.mealSummaryText}>{oneMeal.duration} min</Text>
          <Text style={styles.mealSummaryText}>{oneMeal.complexity.toUpperCase()}</Text>
          <Text style={styles.mealSummaryText}>{oneMeal.affordability.toUpperCase()}</Text>
        </View>

        <View>
          <Text style={styles.descriptionTitle}>Ingredients</Text>
          {oneMeal.ingredients.map((ingerdient,index)=>(
          <View key={index} style={styles.descriptionElement}>
            <Text>{ingerdient}</Text>
          </View>)
            )}

        </View>
        <View>
          <Text style={styles.descriptionTitle}>Steps</Text>
          
          {oneMeal.steps.map((step,index)=>(
          <View key={index} style={styles.descriptionElement}>
            <Text>{step}</Text>
          </View>)
            )}
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    
  },
  image: {
    width: '100%', height: 200
  },
  mealSummary: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mealSummaryText: {
    fontFamily: 'open-sans',
    fontSize: 13
  },
  descriptionTitle:{
    fontFamily:'open-sans-bold',
    fontSize:22,
    marginVertical:10,
    textAlign:"center"
  },
  descriptionElement:{
    padding:10,
    borderRadius:10,
    borderColor:'#ccc',
    borderWidth:1,
    margin:2
  }
});

export default MealDetailScreen;
