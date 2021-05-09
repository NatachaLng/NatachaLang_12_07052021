import React from "react";
import '../styles/UserPage.css'
import fetchData from "../service/fetch";
import Nav from "./Nav";
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

class UserPage extends React.Component {
    constructor(props) {
        super(props);
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

    componentDidMount() {
        const userId = this.props.match.params.id;
        fetchData(userId, "")
            .then(data => {
                this.setState({
                    dataLoaded: true,
                    data: data,
                })
            })

        fetchData(userId, "activity")
            .then(data => {
                this.setState({
                    activityLoaded: true,
                    activity: data,
                })
            })

        fetchData(userId, "average-sessions")
            .then(data => {
                this.setState({
                    averageLoaded: true,
                    average: data,
                })
            })

        fetchData(userId, "performance")
            .then(data => {
                this.setState({
                    performanceLoaded: true,
                    performance: data,
                })
            })
    }

    render() {
        return (
            <div id="main">
                <Nav/>
                <div className='container'>
                    <div className='left-container'>
                        <div class='top-container'>
                            {this.state.dataLoaded ? <WelcomeMessage firstName={this.state.data.userInfos.firstName}/> : ""}
                            {this.state.activityLoaded ? <DailyActivity data={this.state.activity.sessions}/> : ""}
                        </div>
                        <div className="bottom-container">
                            {this.state.averageLoaded ? <WeeklyStats data={this.state.average.sessions}/> : ""}
                            {this.state.performanceLoaded ? <ActivityRadar data={this.state.performance.data}/> : ""}
                            {this.state.performanceLoaded ? <Score data={this.state.data}/> : ""}
                        </div>
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

export default UserPage;