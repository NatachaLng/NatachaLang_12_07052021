import React from "react";
import '../styles/UserPage.css'
import {fetchData} from "../service/fetch";
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
        };
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;

        //fetch user's data
        fetchData(userId, "")
            .then(data => {
                this.setState({
                    dataLoaded: true,
                    data: data
                })
            })
    }

    render() {
        /**
         * take error and isLoaded status from the current state */
        const {error} = this.state;
        /**
         * if error condition is true, show error page */
        if (error) {
            return <ErrorPage />
        }
        /**
         * if all API returned OK, render the full content. Add props for each corresponding components from the current state */
        else {
            return (
                <div id="main">
                    { this.state.dataLoaded ? <WelcomeMessage user={this.state.data.userInfos} /> : "" }
                </div>
            )
        }
    }
}

export default UserPage