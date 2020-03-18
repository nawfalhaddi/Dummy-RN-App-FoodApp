import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack=createStackNavigator();



export default function MealsNavigator(){

return(
    
   <Stack.Navigator initialRouteName="Categories" >
        <Stack.Screen name="Categories" component={CategoriesScreen}/>
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen}/>
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
)


}