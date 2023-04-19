import { useEffect, useState } from "react";
import { DisplayRecipePreviews } from "../components/DisplayRecipePreviews";

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