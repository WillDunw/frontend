import { useLocation } from "react-router-dom";
import { UpdateRecipeForm } from "../components/UpdateRecipeForm";

function UpdateRecipe(){
    const {state} = useLocation();
    return (
        <>
        <h1>Update recipe: {state.recipe.title}</h1>
        <UpdateRecipeForm recipe={state.recipe} />
        </>
    )
}

export {UpdateRecipe};