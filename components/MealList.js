import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import MealItem from './MealItem'

const MealList = props => {

    const renderMealsList = ({ item }) => {
        return (
          <MealItem title={item.title} duration={item.duration} complexity={item.complexity}
            affordability={item.affordability}
            image={item.imageUrl}
            onSelectItem={() => { props.navigation.navigate('MealDetail', { id: item.id  }) }} />
        )
      }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                renderItem={renderMealsList}
                keyExtractor={item => item.id}
                style={{ width: '100%' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
})

export default MealList;