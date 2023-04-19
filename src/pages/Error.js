import { useLocation } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

/**
 * Page displayed when a error has been encountered.
 * @returns An alert to display the error message.
 */
function Error(){
    const {state} = useLocation();

    return (
        <Alert variant="danger">{state.errorMessage}</Alert>
    )
}

export {Error};