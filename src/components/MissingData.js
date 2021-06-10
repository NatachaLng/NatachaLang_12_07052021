import React from "react";

class MissingData extends React.Component{
    render(){
        return (
            <div>
            <h2>Oups, cette donnée n'existe pas</h2>
            <p>Donnée manquante: {this.props.data} </p>
            </div>
        )
    }
}

export default MissingData;