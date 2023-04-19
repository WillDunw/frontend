import { useEffect, useState } from "react";
import { DisplayRecipePreviews } from "../components/DisplayRecipePreviews";

/**
 * The home page that is run when the site is loaded
 * @returns The display of all the recipes
 */
function Home(){
    const [allRecipes, setAllRecipes] = useState([]);
    
    useEffect(() => {getAllRecipes(setAllRecipes)}, []);

    return (
        <>
        {allRecipes && <DisplayRecipePreviews recipes={allRecipes} />}
        </>
    )
}

async function getAllRecipes(setAllRecipes){
    let response = await fetch("http://localhost:1339/recipes/all", {
        method: "GET"
    });
    const result = await response.json();
    setAllRecipes(result);
}

export{Home};