import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addUpdateRecipe.css";

function UpdateRecipeForm({recipe}){
    const titleRef = useRef(null);
    const instructionsRef = useRef(null);
    const timeRef = useRef(null);
    const ingredientsRef = useRef(null);
    const costRef = useRef(null);
    const mealTypeRef = useRef(null);
    const userIDRef = useRef(null);

    const [ingredientsArray, setIngredients] = useState([]);

    const addIngredient = () => {
        if(ingredientsRef.current.value != ''){
            ingredientsArray.push(ingredientsRef.current.value);
        setIngredients(ingredientsArray);
        alert(`${ingredientsRef.current.value} added!`);
        }
        else{
            alert("An ingredient must be entered before you can add it.");
        }
    }

    const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();

    if(ingredientsArray.length === 0){
        alert("A recipe cannot have 0 ingredients!");
    }
    else{
        const response = await fetch("http://localhost:1339/recipes", {
            method: "PUT",
            body:  JSON.stringify({
                recipeID: recipe.recipeID,
                newTitle: titleRef.current.value,
                newInstructions: instructionsRef.current.value,
                newTimeToPrepare: timeRef.current.value,
                newIngredients: ingredientsArray,
                newUserID: userIDRef.current.value,
                newApproximateCost: costRef.current.value,
                newMealType: mealTypeRef.current.value
            }) , 
            headers: {"Content-type" : "application/json; charset=UTF-8"}
        });
        const result = await response.json();
        if(response.status !== 200){
            navigate("/", {state : {errorMessage: result.errorMessage}});
        }
        else{
            alert(`Recipe ${result.title} successfully changed!`);
        }
        
    }
}

    return (
        <div id="updateRecipe">
        <h1>All ingredients must be entered again.</h1>
        <form onSubmit={handleSubmit} id="updateRecipeForm">
            <input type="hidden" id="userIDInput" value={String(recipe.userID)} ref={userIDRef} name="userID"/>
            
            <label for="title" class="formElement">Recipe title</label>
            <input type="text" class="formElement" id="titleInput" required placeholder="Title" ref={titleRef} name="title" defaultValue={recipe.title}/>
            
            <label for="instructions" class="formElement">Instructions</label>
            <input type="text" class="formElement" id="instructionsInput" placeholder="Instructions" ref={instructionsRef} name="instructions" required defaultValue={recipe.instructions}/>
            
            <label for="ingredients" class="formElement">Ingredient</label>
            <input type="text" class="formElement" id="ingredientsInput" placeholder="Ingredient" ref={ingredientsRef} name="ingredients"/>
            <button type="button" class="formElement" onClick={addIngredient}>Add ingredient</button>
            
            <label for="time" class="formElement">Approximate time</label>
            <input type="number" class="formElement" id="timeToPrepareInput" min={1} required placeholder="Minutes to prepare" ref={timeRef} name="time" defaultValue={recipe.timeToPrepare}/>
            
            <label for="cost" class="formElement">Approximate cost</label>
            <input type="number" class="formElement" id="costInput" min={1} required placeholder="Cost(dollars)" ref={costRef} name="cost" defaultValue={recipe.approximateCost}/>
            
            <label for="meals" class="formElement">Choose a meal type</label>
            <select name="meals" class="formElement" id="mealTypesInput" ref={mealTypeRef} required defaultValue={recipe.mealType}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="brunch">Brunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="dessert">Dessert</option>
            </select>
            
            <button type="submit" class="formElement" id="submitButton">Update Recipe</button> 

        </form>
        </div>
    )

}

export {UpdateRecipeForm};