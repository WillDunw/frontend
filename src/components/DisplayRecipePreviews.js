import { RecipePreview } from "./RecipePreview";
import "./listPreviews.css"

function DisplayRecipePreviews({recipes}){
    let previewList = recipes.map((recipe) =><li key={recipe.recipeID}><RecipePreview recipe={recipe}/></li>);

    return (
        <div id="previews">
        <ul>
            {previewList}
        </ul>
        </div>
    )
}

export {DisplayRecipePreviews};