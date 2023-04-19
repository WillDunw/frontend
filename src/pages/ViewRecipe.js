import { useLocation } from "react-router-dom";

function ViewRecipe(){
    const {state} = useLocation();

    const recipe = state.recipe;

    let listIngredients = recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
    return(
        <div>
            <h1>Title: {recipe.title}</h1>
            <p>Steps: {recipe.instructions}</p>
            <p>Time to make: {recipe.timeToPrepare} minutes</p>
            <ul>{listIngredients}</ul>
            <p>Cost: {recipe.approximateCost}$</p>
            <p>Meal Type: {recipe.mealType}</p>
        </div>
    )
}

export {ViewRecipe};