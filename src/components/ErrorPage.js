import React from "react";
import '../styles/ErrorPage.css'

class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <h1>404</h1>
                <span>Page non trouvée !</span>
            </div>
        );
    }
}

export default ErrorPage;