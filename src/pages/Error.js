import { useLocation } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

/**
 * Page displayed when a error has been encountered.
 * @returns An alert to display the error message.
 */
function Error(errorMessage) {
  const { state } = useLocation();

  return (
    <>
      {state && state.errorMessage && (
        <Alert variant="danger">{state.errorMessage}</Alert>
      )}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </>
  );
}

export { Error };
