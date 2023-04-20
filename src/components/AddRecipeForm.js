import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addUpdateRecipe.css";

/**
 * Responsible for the logic behind the add recipe form.
 * @returns The form as a html div.
 *  */
function AddRecipeForm(){
    const titleRef = useRef(null);
    const instructionsRef = useRef(null);
    const timeRef = useRef(null);
    const ingredientsRef = useRef(null);
    const costRef = useRef(null);
    const mealTypeRef = useRef(null);
    const userIDRef = useRef(null);

    const [ingredientsArray, setIngredients] = useState([])

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
            method: "POST",
            body:  JSON.stringify({
                title: titleRef.current.value,
                instructions: instructionsRef.current.value,
                timeToPrepare: timeRef.current.value,
                ingredients: ingredientsArray,
                userID: userIDRef.current.value,
                approximateCost: costRef.current.value,
                mealType: mealTypeRef.current.value
            }) , 
            headers: {"Content-type" : "application/json; charset=UTF-8"}
        });
        const result = await response.json();
        if(response.status === 400){
            navigate("/error", {state : {errorMessage: "User error. Please try again."}});
        }
        else if(response.status === 500){
            navigate("/error", {state : {errorMessage: "System error. Please try again later."}});
        }
        else if(response.status === 200){
            alert(`Recipe ${result.title} successfully posted!`);
            document.getElementById("addRecipeForm").reset();
        }
        else{
            navigate("/error", {state : {errorMessage: "Unexpected error."}});
        }
        
    }
}

    return (
        <div id="addRecipe">
        <form onSubmit={handleSubmit} id="addRecipeForm">
            <input type="hidden" class="formElement" id="userIDInput" value="1" ref={userIDRef} name="userID"/>
            
            <label for="title" class="formElement">Recipe title</label>
            <input type="text" id="titleInput" class="formElement" required placeholder="Title" ref={titleRef} name="title"/>
            
            <label for="instructions" class="formElement">Instructions</label>
            <input type="text" id="instructionsInput" class="formElement" placeholder="Instructions" ref={instructionsRef} name="instructions" required/>
            
            <label for="ingredients" class="formElement">Ingredient</label>
            <input type="text" class="formElement" id="ingredientsInput" placeholder="Ingredient" ref={ingredientsRef} name="ingredients"/>
            <button type="button" class="formElement" onClick={addIngredient}>Add ingredient</button>
            
            <label for="time" class="formElement">Approximate time</label>
            <input type="number" class="formElement" id="timeToPrepareInput" min={1} required placeholder="Minutes to prepare" ref={timeRef} name="time"/>
            
            <label for="cost" class="formElement">Approximate cost</label>
            <input type="number" class="formElement" id="costInput" min={1} required placeholder="Cost(dollars)" ref={costRef} name="cost"/>
            
            <label for="meals" class="formElement">Choose a meal type</label>
            <select name="meals" class="formElement" id="mealTypesInput" ref={mealTypeRef} required>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="brunch">Brunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="dessert">Dessert</option>
            </select>
            
            <button type="submit" class="formElement">Add Recipe</button> 

        </form>
        </div>
    )
}

export {AddRecipeForm};