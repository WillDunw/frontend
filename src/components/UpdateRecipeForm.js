import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <>
        <h1>Update Recipe</h1>
        <h1>All ingredients must be entered again.</h1>
        <form onSubmit={handleSubmit} id="updateRecipeForm">
            <input type="hidden" id="userIDInput" value={String(recipe.userID)} ref={userIDRef} name="userID"/>
            
            <label for="title">Recipe title</label>
            <input type="text" id="titleInput" required placeholder="Title" ref={titleRef} name="title" defaultValue={recipe.title}/>
            
            <label for="instructions">Instructions</label>
            <input type="text" id="instructionsInput" placeholder="Instructions" ref={instructionsRef} name="instructions" required defaultValue={recipe.instructions}/>
            
            <label for="ingredients">Ingredient</label>
            <input type="text" id="ingredientsInput" placeholder="Ingredient" ref={ingredientsRef} name="ingredients"/>
            <button type="button" onClick={addIngredient}>Add ingredient</button>
            
            <label for="time">Approximate time</label>
            <input type="number" id="timeToPrepareInput" min={1} required placeholder="Minutes to prepare" ref={timeRef} name="time" defaultValue={recipe.timeToPrepare}/>
            
            <label for="cost">Approximate cost</label>
            <input type="number" id="costInput" min={1} required placeholder="Cost(dollars)" ref={costRef} name="cost" defaultValue={recipe.approximateCost}/>
            
            <label for="meals">Choose a meal type</label>
            <select name="meals" id="mealTypesInput" ref={mealTypeRef} required defaultValue={recipe.mealType}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="brunch">Brunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="dessert">Dessert</option>
            </select>
            
            <button type="submit">Update Recipe</button> 

        </form>
        </>
    )

}

export {UpdateRecipeForm};