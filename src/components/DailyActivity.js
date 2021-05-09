import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';
import '../styles/DailyActivity.css'

const CustomToolTip = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="custom-tooltip-text">{`${payload[0].value}kg`}</p>
                <p className="custom-tooltip-text">{`${payload[1].value}kCal`}</p>
            </div>
        )
    }
    return null;
};

class DailyActivity extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.newData = this.data.map(weekDay => ({number: this.data.indexOf(weekDay) + 1, ...weekDay}));
    }

    render() {
        return (
            <div className="dailyactivity-container">
                <h2 className="dailyactivity-title">Activité quotidienne</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={850} height={220} data={this.newData}
                              margin={{top: 5, right: 30, left: 20, bottom: 40}}>
                        <CartesianGrid vertical={false}/>
                        <XAxis dataKey="number"/>
                        <YAxis orientation="right" tickCount={3}/>
                        <Tooltip content={<CustomToolTip/>} position={{y: 50}}/>
                        <Legend verticalAlign="top" align="right" iconType="circle" iconSize="10"/>
                        <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10}
                             barGap={5}/>
                        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}
                             barSize={10} barGap={5}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

DailyActivity.propTypes = {
    data: PropTypes.array
};

export default DailyActivity