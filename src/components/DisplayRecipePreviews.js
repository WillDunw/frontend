import { RecipePreview } from "./RecipePreview";
import "./listPreviews.css"

/**
 * Constructs a list of recipe preview components.
 * @param {recipe} recipes A list of the recipes to be displayed
 * @returns A list of Recipe preview components.
 */
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