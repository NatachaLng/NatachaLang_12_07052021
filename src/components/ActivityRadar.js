import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import '../styles/ActivityRadar.css'
import PropTypes from 'prop-types';


class ActivityRadar extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.newData = this.data.map(weekDay => {
            switch (weekDay.kind) {
                case 1:
                    return ({type: "Cardio", ...weekDay});
                    break;
                case 2:
                    return ({type: "Energie", ...weekDay});
                    break;
                case 3:
                    return ({type: "Endurance", ...weekDay});
                    break;
                case 4:
                    return ({type: "Force", ...weekDay});
                    break;
                case 5:
                    return ({type: "Vitesse", ...weekDay});
                    break;
                case 6:
                    return ({type: "Intensité", ...weekDay});
                    break;
                default:
                    return({...weekDay});
            }
        })

    }
    render () {
        return (
            <div className="activity-radar bottom-graph">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="65%" data={this.newData} width={220} height={220}
                                margin={{top: 5, right: 20, left: 0, bottom: 5}}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="type" tick={{fill: 'white', fontSize: '10px'}} tickLine={false} />
                        <Radar dataKey="value" fill="#FF0000" fillOpacity={0.8} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default ActivityRadar;

ActivityRadar.propTypes = {
    data: PropTypes.array
};