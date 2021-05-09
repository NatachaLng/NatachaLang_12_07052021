import React from "react";
import '../styles/ErrorPage.css'

class ErrorPage extends React.Component {
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

