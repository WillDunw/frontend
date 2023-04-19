import { useNavigate } from "react-router-dom";
import "./listPreviews.css"

function RecipePreview({recipe}){
    const navigate = useNavigate();

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Are you sure you want to delete this recipe?") == true){
            let response = await fetch(`http://localhost:1339/recipes`, {
                method: "DELETE",
                body: JSON.stringify({
                    recipeID : recipe.recipeID
                }),
                headers: {"Content-type" : "application/json; charset=UTF-8"}
            });
            let deletedRecipe = await response.json()
            alert(`Recipe ${deletedRecipe.title} deleted.`);

            // eslint-disable-next-line no-restricted-globals
            location.reload();
        }
    };

    const onUpdateClick = () => {
        navigate("/updateRecipe", {state : {recipe: recipe}});
    }

    const onViewClick = () => {
        navigate(`/recipe/${recipe.recipeID}`, {state: {recipe: recipe}});
    }

    return (
        <div class="singlePreview">
        <p class="titleStyle">{recipe.title}</p>
        <p class="instructionsStyle">Steps: {recipe.instructions}</p>
        <button type="button" onClick={onDeleteClick}>Delete</button>
        <button type="button" onClick={onUpdateClick}>Update</button>
        <button type="button" onClick={onViewClick}>View Recipe</button>
        </div>
    )
}

export {RecipePreview};