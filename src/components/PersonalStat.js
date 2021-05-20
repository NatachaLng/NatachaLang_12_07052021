import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PersonalStat.css'

/**
 * Personal custom stats for the user
 */
class PersonalStat extends React.Component {
    /**
     * @return {JSX.Element}
     */
    render() {
        return (
            <div className="personal-stat bottom-graph">
                <img className="personal-stat-icon" src={this.props.icon} alt='' />
                <div className="personal-stat-text">
                    <p className="personal-stat-text-numbers">{this.props.data}{this.props.unit}</p>
                    <p className="personal-stat-text-title">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default PersonalStat

PersonalStat.propTypes = {
    icon: PropTypes.node,
    data: PropTypes.number,
    unit: PropTypes.string
};