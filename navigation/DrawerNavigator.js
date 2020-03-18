import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsFavTabNavigator from './MealsFavTabNavigator';
import FiltersScreen from '../screens/FiltersScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

const MainDrawer=createDrawerNavigator();

const FilterStack=createStackNavigator();

const FilterStackNavigator=()=>{
    return(
        <FilterStack.Navigator>
            <FilterStack.Screen name="Filter" component={FiltersScreen}/>
        </FilterStack.Navigator>
    )
}

const MainNavigator=props=>{
    return(
        <MainDrawer.Navigator drawerStyle={{
            backgroundColor: Colors.primaryColor,
            width: '80%',
          }}
          
          drawerContentOptions={{
            activeTintColor:Colors.accentColor,
            activeBackgroundColor:Colors.primaryColor,
            inactiveTintColor:'white',
            labelStyle:{
                fontFamily:'open-sans-bold',
                fontSize:15
            }
          }}
          >
            <MainDrawer.Screen name="Categories" component={MealsFavTabNavigator}/>
            <MainDrawer.Screen name="Filter" component={FilterStackNavigator}/>
        </MainDrawer.Navigator>
    )
}



export default MainNavigator;