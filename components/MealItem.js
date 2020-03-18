import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onSelectItem}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    mealItem: {
        height: 200,
        width: '95%',
        backgroundColor: '#f5f5f5',
        alignSelf:'center',
        marginVertical:10,
        borderRadius:20,
        overflow:'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:"center",
        height:'10%'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.7)',
        paddingVertical:5,
        textAlign:'center'
    }

});
export default MealItem;