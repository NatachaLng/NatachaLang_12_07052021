import React from 'react'
import PropTypes from 'prop-types'
import "../styles/WelcomeMessage.css"

/**
 * Welcome message on the app
 */
class WelcomeMessage extends React.Component {
    /**
     * Get HTML
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