import React,{useLayoutEffect} from 'react';
import { StyleSheet } from 'react-native';
import {MEALS} from '../data/dummy-data'
import MealList from '../components/MealList'
import Colors from "../constants/Colors"
import FavButton from '../components/FavButton'

const FavoritesScreen = props => {


  const catId = "c2";
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);


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

  
  // return (
  //   <View style={styles.screen}>
  //     <Text>The Favorites Screen!</Text>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
