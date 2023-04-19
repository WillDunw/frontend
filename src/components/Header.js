import { NavButton } from "./NavButton";
import "./header.css"

function Header(){
    return (
        <div class="header">
    <ul>
        <li><NavButton to="/" label="Home" /></li>
        <li><NavButton to="/addRecipe" label="Add Recipe" /></li>
    </ul>
    </div>
    )
}

export {Header};