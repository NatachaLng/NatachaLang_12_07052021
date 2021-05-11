import React from 'react';
import { LineChart, Line, XAxis, Tooltip} from 'recharts';
import '../styles/WeeklyStats.css'

/**
 * Box appearing with more data on charts' hover
 * @param active
 * @param value
 * @return {JSX.Element|null}
 * @constructor
 */

const CustomToolTip = ({ active, value}) => {
    if (active && value && value.length) {
        return (
            <div className="custom-tooltip-average">
                <p className="custom-tooltip-average-text">{`${value[0].value} min`}</p>
            </div>
        )
    }
    return null;
}


class WeeklyStats extends React.Component {
    /**
     *
     * @param props fetched from API
     */
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.newData = this.data.map(weekDay => {
            switch (weekDay.day) {
                case 1:
                    return ({dayName: "L", ...weekDay});
                    break;
                case 2:
                    return ({dayName: "M", ...weekDay});
                    break;
                case 3:
                    return ({dayName: "M", ...weekDay});
                    break;
                case 4:
                    return ({dayName: "J", ...weekDay});
                    break;
                case 5:
                    return ({dayName: "V", ...weekDay});
                    break;
                case 6:
                    return ({dayName: "S", ...weekDay});
                    break;
                case 7:
                    return ({dayName: "D", ...weekDay});
                    break;
                default:
                    return ({...weekDay});
            }
        })
        this.index0 = {
            day: 0,
            dayName: "",
            sessionLength: 0
        };
        this.index8 = {
            day: 8,
            dayName: "",
            sessionLength: 100
        }
        this.newData.unshift(this.index0);
        this.newData.push(this.index8)
    }

    /**
     *
     * @return {JSX.Element}
     */
    render() {
        return (
            <div className="weekly-stats bottom-graph">
                <h2 className="weekly-stats-title">Durée moyenne des sessions</h2>
=                <LineChart data={this.newData} width={250} height={210}
                            margin={{top: 5, right: 30, left: 0, bottom: 40}}>
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false}
                          activeDot={{stroke: "#FF0000", r: 5}} />
                    <XAxis dataKey="dayName" axisLine={false} tickLine={false}
                           tick={{fill: "white", fontSize: "12", dy: 20}} />
                    <Tooltip content={<CustomToolTip/>} position={{y: 60}} />
                </LineChart>
            </div>
        )
    }
}

export default WeeklyStats;
