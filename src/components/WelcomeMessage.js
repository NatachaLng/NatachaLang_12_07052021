import React from 'react'
import PropTypes from 'prop-types'
import "../styles/WelcomeMessage.css"

class WelcomeMessage extends React.Component {
    /**
     * @return {JSX.Element}
     */
    render() {
        return (
            <>
                <div className="header_home">
                    <h1>Bonjour <span className="red">{this.props.firstName}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
            </>
        )
    }
}

WelcomeMessage.propTypes = {
    firstName: PropTypes.string
}

export default WelcomeMessage