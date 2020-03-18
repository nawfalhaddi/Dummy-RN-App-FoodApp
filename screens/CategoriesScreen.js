import React,{useLayoutEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Button , TouchableOpacity} from 'react-native';
import FavButton from '../components/FavButton'
import Colors from '../constants/Colors'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title:"Categories Screen",
      headerTintColor: 'white' ,
      headerStyle:{backgroundColor:Colors.primaryColor },
      headerTitleStyle:{fontSize:20 },
      headerLeft:() => (<FavButton {...props} iconName="ios-menu" color="white" onPressing={()=>props.navigation.openDrawer()} />)
  })
    return () => {};
  })

 

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile style={{backgroundColor:itemData.item.color}} title={itemData.item.title} navigateWithParams={()=>{
        props.navigation.navigate('CategoryMeals',{
              id:itemData.item.id,
              title:itemData.item.title,
              color:itemData.item.color}
              )}} />
    );
  };



  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});

export default CategoriesScreen;
