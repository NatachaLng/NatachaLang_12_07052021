import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import PropTypes from 'prop-types';
import '../styles/DailyActivity.css';

/**
 *
 * @param active (if exists)
 * @param value
 * @return {JSX.Element|null}
 * @constructor
 */

const CustomToolTip = ({ active, value}) => {
    if (active && value && value.length) {
        return (
            <div className="custom-tooltip">
                <p className="custom-tooltip-text">{`${value[0].value}kg`}</p>
                <p className="custom-tooltip-text">{`${value[1].value}kCal`}</p>
            </div>
        )
    }
    return null;
};


/**
 * Graph representig the activity per day
 */
class DailyActivity extends React.Component {
    /**
     * @return {JSX.Element}
     */
    render() {
        const data = this.props.data;
        const newData = data.map(weekDay => ({number: data.indexOf(weekDay)+1 ,...weekDay}));

        return (
            <div className="daily-container">
                <h2 className="daily-title">Activité quotidienne</h2>
                    <BarChart width={850} height={220} data={newData}
                              margin={{top: 5, right: 30, left: 20, bottom: 40}}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="number" />
                        <YAxis orientation="right" tickCount={3}/>
                        <Tooltip content={<CustomToolTip />} position={{ y: 50 }} />
                        <Legend verticalAlign="top" align="right" iconType="circle" iconSize="10"/>
                        <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10} barGap={5} />
                        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10} barGap={5} />
                    </BarChart>
            </div>
        )
    }
}

DailyActivity.propTypes = {
    data: PropTypes.array
};

export default DailyActivity