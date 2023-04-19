import { useLocation } from "react-router-dom";
import "../components/viewRecipe.css"

function ViewRecipe(){
    const {state} = useLocation();

    const recipe = state.recipe;

    let listIngredients = recipe.ingredients.map((ingredient) => <li key={ingredient} class="ingredients">Ingredient: {ingredient} </li>)
    return(
        <div id="viewRecipe">
            <h1 id="title">Title: {recipe.title}</h1>
            <p id="instructions">Steps: {recipe.instructions}</p>
            <p id="time">Time to make: {recipe.timeToPrepare} minutes</p>
            <div id="ingredientsDiv">
            <ul id="ingredients">{listIngredients}</ul>
            </div>
            <p id="cost">Cost: {recipe.approximateCost}$</p>
            <p id="mealType">Meal Type: {recipe.mealType}</p>
        </div>
    )
}

export {ViewRecipe};