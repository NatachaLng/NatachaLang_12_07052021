import React from 'react';
import {userData} from "../mock/mock";

class WelcomeMessage extends React.Component {

    render() {
        return (
            <div className="user-header">
                <h1 className="user-name">Bonjour <span className="user-header-name">{this.user.userInfos.firstName}</span></h1>
                <p className="user-tagline">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        )
    }
}

export default WelcomeMessage