import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, Image,Platform } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import FavButton from '../components/FavButton';
import {toggleFavorite} from '../store/actions/meal'

const MealDetailScreen = props => {
  const mealId = props.route.params.id;
  const oneMeal=useSelector(state=>state.mealsReducer.meals.find(meal => meal.id === mealId));
const dispatch = useDispatch();

const currentMealIsFavorite=useSelector(state=>state.mealsReducer.favoriteMeals.some(meal=>meal.id===mealId));

const dipatchToggleFavorite = () => {
  dispatch(toggleFavorite(mealId));
}

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: oneMeal.title,
      headerStyle: { backgroundColor: "#c1c1c1" },
      headerTintColor: 'black',
      headerTitleContainerStyle: {
        width: Platform.OS === 'ios' ? '60%' : '60%',
        alignItems: Platform.OS === 'ios' ? 'center' : 'center',
      }
      ,
      headerRight: () => (<FavButton {...props} iconName={currentMealIsFavorite?"ios-star":"ios-star-outline"} color="#000" onPressing={dipatchToggleFavorite} />),
    })
    return () => { };
  }, [props.route.params.id,currentMealIsFavorite])


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
