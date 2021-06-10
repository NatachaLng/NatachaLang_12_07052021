import React from "react";
import '../styles/LoadingSpinner.css'

class LoadingSpinner extends React.Component{
    render() {
        return (
            <div className="center">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        );
    }
}

export default LoadingSpinner;