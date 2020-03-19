import React , {useLayoutEffect,useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Colors from '../constants/Colors'
import FavButton from '../components/FavButton'
import { useDispatch } from 'react-redux';
import {setFilters} from '../store/actions/meal'


const FilterSwitch=props=>{
  return (
    <View style={styles.filterContainer}>
        <Text>{props.title}</Text>
        <Switch trackColor={{true:Colors.primaryColor}} thumbColor={Platform.OS==='android'?Colors.primaryColor:''} value={props.state} onValueChange={props.onChange}/>
      </View>
  )
}

const FiltersScreen = props => {

  const [isGluteenFree, setiIsGluteenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch=useDispatch();
  const saveFilters=()=>{
    const appliedFilters={
      gluteenFree:isGluteenFree,
      lactoseFree:isLactoseFree,
      vegan:isVegan,
      vegetarian:isVegetarian
    }
    dispatch(setFilters(appliedFilters));
  }

  
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title:"Filter Meals",
      headerTintColor: 'white' ,
      headerStyle:{backgroundColor:Colors.primaryColor },
      headerTitleStyle:{fontSize:20 },
      headerLeft:() => (<FavButton {...props} iconName="md-menu" color="white" onPressing={()=>props.navigation.openDrawer()} />),
      headerRight:() => (<FavButton {...props} iconName="md-save" color="white" onPressing={()=>saveFilters()} />)
  })
    return () => {};
  })




  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch title="Gluteen-Free" onChange={(newValue)=>{setiIsGluteenFree(newValue)}} state={isGluteenFree}/>
      <FilterSwitch title="Lactose-Free" onChange={(newValue)=>{setIsLactoseFree(newValue)}} state={isLactoseFree}/>
      <FilterSwitch title="Vegan" onChange={(newValue)=>{setIsVegan(newValue)}} state={isVegan}/>
      <FilterSwitch title="Vegetarian" onChange={(newValue)=>{setIsVegetarian(newValue)}} state={isVegetarian}/>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:22,
    textAlign:'center',
    marginVertical:20
  },
  filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%',
    marginVertical:20
  }
});

export default FiltersScreen;
