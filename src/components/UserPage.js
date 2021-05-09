import React from "react";
import '../styles/UserPage.css'
import fetchData from "../service/fetch";
import Nav from "./Nav";
import WelcomeMessage from "./WelcomeMessage";
import ErrorPage from "./ErrorPage";

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
                    { this.state.dataLoaded ? <WelcomeMessage firstName={this.state.data.userInfos.firstName} /> : "" }
                    </div>
                </div>
            )
        }
}

export default UserPage