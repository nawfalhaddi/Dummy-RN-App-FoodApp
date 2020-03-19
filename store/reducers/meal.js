import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meal'

const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
}

const mealsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex=state.favoriteMeals.findIndex(meal=>meal.id===action.mealId);
            if (existingIndex >= 0) {
                const updatedMeals=[...state.favoriteMeals];
                updatedMeals.splice(existingIndex,1);
                return {...state , favoriteMeals:updatedMeals };

            } else {
                const updatedMeals=[...state.favoriteMeals];
                const meal=state.meals.find(meal=>meal.id===action.mealId);
                updatedMeals.push(meal);
                return {...state,favoriteMeals:updatedMeals};
            }
        case SET_FILTERS:
            const appliedFilters=action.filters;
            const updateFilteredMeals=state.meals.filter(meal=>{
                if (appliedFilters.gluteenFree && !meal.isGluteenFree) {
                    return false;
                }if (appliedFilters.lactoseFree && !meal.isLactosFree) {
                    return false;
                }if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            })

            return{...state,filteredMeals:updateFilteredMeals}

        default:
            return state;
    }
    
}


export default mealsReducer;