import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const CategoryGridTile = props => {

    
    return (
        <TouchableOpacity style={{...styles.gridItem,...props.style}} onPress={props.navigateWithParams}>
            <View style={styles.container}>
                <Text style={styles.categoryTitle} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width: 0,height:2},
        elevation:20,
    },
    container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:12
    },
    categoryTitle:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        textAlign:'right'
    }
});

export default CategoryGridTile;