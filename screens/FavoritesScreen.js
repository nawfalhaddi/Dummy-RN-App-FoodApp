import React,{useLayoutEffect} from 'react';
import { StyleSheet, View,Text } from 'react-native';
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
  

  if(meals.length===0 || !meals){
    return (<View style={styles.content}>
      <Text style={styles.txt}>No meal found ! Please start adding favorite meals by toggling the star icon in meadl details :)</Text>
    </View>)

  }else{
    return (
      <MealList {...props} listData={meals}/>
    );
  }

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    width:'100%',
    paddingHorizontal:'10%'
  },
  txt:{
    textAlign:'center',
    fontFamily:'open-sans',
    fontSize:20
  }
});

export default FavoritesScreen;
