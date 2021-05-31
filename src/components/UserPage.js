import React from "react";
import '../styles/UserPage.css'
import fetchData from "../service/fetch";
import WelcomeMessage from "./WelcomeMessage";
import DailyActivity from "./DailyActivity";
import WeeklyStats from "./WeeklyStats";
import ActivityRadar from "./ActivityRadar";
import Score from "./Score";
import PersonalStat from "./PersonalStat";
import caloriesIcon from '../assets/calories-icon.png';
import proteinIcon from '../assets/protein-icon.png';
import carbsIcon from '../assets/carbs-icon.png';
import fatIcon from '../assets/fat-icon.png';


/**
 * User page when user login
 * Initial state condition is empty, fill with data fetched from the backend.
 */
class UserPage extends React.Component {
    /**
     * @param props fetched from the API
     */
    constructor(props) {
        super(props);
        /**
         *
         * @type {{average: *[], dataLoaded: boolean,
         * performance: *[], data: *[],
         * activity: *[], activityLoaded: boolean,
         * performanceLoaded: boolean, error: null, averageLoaded: boolean}}
         */
        this.state = {
            error: null,
            dataLoaded: false,
            data: [],
            activityLoaded: false,
            activity: [],
            averageLoaded: false,
            average: [],
            performanceLoaded: false,
            performance: []
        };
    }

    /**
     * Wait until all components are mounted to call the API.
     * Look for user ID match and fetch the datas with the matching ID.
     * @async
     */
    componentDidMount() {
        const userId = this.props.match.params.id;

        //fetch user's data
        fetchData(userId, "")
            .then(data => {
                this.setState({
                    dataLoaded: true,
                    data: data,

                })
            })

        //fetch user's data activity
        fetchData(userId, "activity")
            .then(data => {
                this.setState({
                    activityLoaded: true,
                    activity: data
                })
            })

        //fetch user's data average session
        fetchData(userId, "average-sessions")
            .then(data => {
                this.setState({
                    averageLoaded: true,
                    average: data
                })
            })

        //fetch user's data performance
        fetchData(userId, "performance")
            .then(data => {
                this.setState({
                    performanceLoaded: true,
                    performance: data
                })
            })
    }

    /**
     * Get HTML
     * @return {JSX.Element}
     */
    render() {
        return (
            <div id="main">
                <div className='container'>
                            {this.state.dataLoaded ? <WelcomeMessage firstName={this.state.data.userInfos.firstName}/> : ""}
                            {this.state.activityLoaded ? <DailyActivity data={this.state.activity.sessions}/> : ""}
                        <div className="bottom-container">
                            {this.state.averageLoaded ? <WeeklyStats data={this.state.average.sessions}/> : ""}
                            {this.state.performanceLoaded ? <ActivityRadar data={this.state.performance.data}/> : ""}
                            {this.state.performanceLoaded ? <Score data={this.state.data}/> : ""}
                        </div>
                    <div className='right-container'>
                        { this.state.dataLoaded ?
                            <PersonalStat name="Calories" icon={caloriesIcon} data={this.state.data.keyData.calorieCount} unit="kCal"/>
                            : "" }
                        { this.state.dataLoaded ?
                            <PersonalStat name="Proteines" icon={proteinIcon} data={this.state.data.keyData.proteinCount} unit="g"/>
                            : "" }
                        { this.state.dataLoaded ?
                            <PersonalStat name="Glucides" icon={carbsIcon} data={this.state.data.keyData.carbohydrateCount} unit="g"/>
                            : "" }
                        { this.state.dataLoaded ?
                            <PersonalStat name="Lipides" icon={fatIcon} data={this.state.data.keyData.lipidCount} unit="g"/>
                            : "" }
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage