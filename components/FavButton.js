import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
 const FavButton = props=>{

    return(
        <TouchableOpacity style={styles.favButton} onPress={props.onPressing}>
            <Ionicons name={props.iconName} size={32} color={props.color} />
        </TouchableOpacity>
    )

 }

 const styles=StyleSheet.create({
    favButton:{
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:10
    }
 });

 export default FavButton;