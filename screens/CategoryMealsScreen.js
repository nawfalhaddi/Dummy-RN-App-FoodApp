import React, { useLayoutEffect } from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';


const CategoryMealScreen = props => { 
  
  const availableMeals=useSelector(state=>state.mealsReducer.filteredMeals);

  useLayoutEffect(() => {
    props.navigation.setOptions(
      {
        title: props.route.params.title,
        headerStyle: { backgroundColor: props.route.params.color },
        headerTintColor: 'black'
      }
    );
    return () => {};
  }, [props.route.params])

  const catId = props.route.params.id;
  const meals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
  

  return (
    <MealList {...props} listData={meals}/>
  );
};




export default CategoryMealScreen;
