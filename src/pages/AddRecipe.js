import { AddRecipeForm } from "../components/AddRecipeForm";

/**
 * Creates the page displayed to add a recipe
 * @returns The page displayed when adding a recipe
 */
function AddRecipe(){
return (
    <>
    <h1>Add recipe</h1>
    <AddRecipeForm />
    </>
)
}

export {AddRecipe};