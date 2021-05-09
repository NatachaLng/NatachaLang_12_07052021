import React from "react";
import '../styles/UserPage.css'
import fetchData from "../service/fetch";
import Nav from "./Nav";
import WelcomeMessage from "./WelcomeMessage";
import DailyActivity from "./DailyActivity";
import WeeklyStats from "./WeeklyStats";
import ActivityRadar from "./ActivityRadar";
import Score from "./Score";

class UserPage extends React.Component{
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
                    activity: data
                })
            })

        fetchData(userId, "average-sessions")
            .then(data => {
                this.setState({
                    averageLoaded: true,
                    average: data
                })
            })

        fetchData(userId, "performance")
            .then(data => {
                this.setState({
                    performanceLoaded: true,
                    performance: data
                })
            })
    }

    render() {
        return(
                <div id="main">
                    <Nav />
                    <div className='container'>
                        <div className='left-container'>
                    { this.state.dataLoaded ? <WelcomeMessage firstName={this.state.data.userInfos.firstName} /> : "" }
                        { this.state.activityLoaded ? <DailyActivity data={this.state.activity.sessions} /> : "" }
                        <div className="bottom-container">
                            { this.state.averageLoaded ? <WeeklyStats data={this.state.average.sessions} /> : "" }
                            { this.state.performanceLoaded ? <ActivityRadar data={this.state.performance.data} /> : "" }
                            { this.state.performanceLoaded ? <Score data={this.state.data} /> : "" }
                        </div>
                        </div>
                        <div className='right-container'>

                        </div>
                    </div>
                </div>
            )
        }
}

export default UserPage