import { useMatch, useResolvedPath } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./header.css";

/**
 * 
 * @param {*} props to: the page to navigate to when the nav button is clicked.
 * label:  the label for the navbutton 
 * @returns The navbutton as a react nav link containing a button
 */
function NavButton(props){
    let resolved =useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const buttonStyle = {
        backgroundColor: "lightblue",
        border: "none",
        color: "black",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
      };

      const activeButtonStyle = {
        backgroundColor: "beige",
        border: "none",
        color: "black",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
      };

      return (
        <NavLink to={props.to}>
            <button class="nav-link-button" style={match ? activeButtonStyle: buttonStyle}>
                <p>{props.label}</p>
            </button>
        </NavLink>
      );
}

export {NavButton};