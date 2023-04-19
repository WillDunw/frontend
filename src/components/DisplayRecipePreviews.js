import { RecipePreview } from "./RecipePreview";

function DisplayRecipePreviews({recipes}){
    let previewList = recipes.map((recipe) =><li key={recipe.recipeID}><RecipePreview recipe={recipe}/></li>);

    return (
        <>
        <ul>
            {previewList}
        </ul>
        </>
    )
}

export {DisplayRecipePreviews};