import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealsNavigator from './MealsNavigator';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import MealDetailScreen from '../screens/MealDetailScreen';


const Tab=createBottomTabNavigator();

const FavStack=createStackNavigator();

const FavNavigator=()=>{
  return(
    <FavStack.Navigator initialRouteName="Favorites">
      <FavStack.Screen name="Favorites" component={FavoritesScreen} options={{title:"Your favorites"}}/>
      <FavStack.Screen name="MealDetail" component={MealDetailScreen} options={{title:"Detail"}}/>
    </FavStack.Navigator>
  )
}


export default function MealsFavTabNavigator(){

return(
   <Tab.Navigator initialRouteName="Meals" 
   
   screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Meals') {
        iconName = focused? 'ios-restaurant':'md-restaurant';
        
      } else if (route.name === 'Favorite') {
        iconName = focused ? 'ios-star' : 'ios-star-outline';
        
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={22} color={color} />;
    },
  shifting:false})}
  tabBarOptions={{
    activeTintColor: Colors.accentColor,
    inactiveTintColor: 'gray',
  }}

   >
        <Tab.Screen name="Meals" component={MealsNavigator}/>
        <Tab.Screen name="Favorite" component={FavNavigator}/>
    </Tab.Navigator>
)


}