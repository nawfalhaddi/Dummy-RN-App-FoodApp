import React,{useLayoutEffect} from 'react';
import { StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList'
import Colors from "../constants/Colors"
import FavButton from '../components/FavButton'

const FavoritesScreen = props => {


  const meals=useSelector(state=>state.mealsReducer.favoriteMeals);


  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTintColor: 'white' ,
      headerStyle:{backgroundColor:Colors.primaryColor },
      headerTitleStyle:{fontSize:20 },
      headerLeft:() => (<FavButton {...props} iconName="md-menu" color="white" onPressing={()=>props.navigation.openDrawer()} />)
  })
    return () => {};
  })
  

  return (
    <MealList {...props} listData={meals}/>
  );

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
