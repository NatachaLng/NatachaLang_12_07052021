import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import '../styles/Score.css'
import PropTypes from "prop-types";
import WeeklyStats from "./WeeklyStats";

/**
 * % of the objective achieved
 */

class Score extends React.Component {
    /**
     * Get datas
     * @param props fetch from the API
     */
    constructor(props) {
        super(props);
        this.data = [{
            percentage: this.props.data.score ? this.props.data.score*100 : this.props.data.todayScore*100,
            fill: '#FF0000',
        }]


    }

    /**
     * Get HTML
     * @return {JSX.Element}
     */
    render() {

        return (
            <div className="score bottom-graph">
                <h2 className="score-title-text">Score</h2>
                <p className="score-text">{this.data[0].percentage}%
                    <br />
                    <span className="score-text-desc">de votre objectif</span>
                </p>
                <div className="inner-circle"></div>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="55%" innerRadius="70%"
                                    outerRadius="80%" barSize={16} data={this.data} startAngle={90} endAngle={450} >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                        <RadialBar minAngle={15} dataKey="percentage" cornerRadius={50} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
export default Score;

Score.propTypes = {
    data: PropTypes.array,
    percentage: PropTypes.number
}