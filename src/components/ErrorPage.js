import React from "react";
import '../styles/ErrorPage.css'

/**
 * Error page if page doesn't exist
 */
class ErrorPage extends React.Component {
    /**
     * HTML of the error page
     * @return {JSX.Element}
     */
    render() {
        return (
            <div className='error'>
                <h1>404</h1>
                <span className="error-message">Page non trouvée !</span>
            </div>
        );
    }
}

export default ErrorPage;

