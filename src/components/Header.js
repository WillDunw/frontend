import { NavButton } from "./NavButton";
import "./header.css"

/**
 * Creates the header for the site using nav button components
 * @returns The header as a html div
 */
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