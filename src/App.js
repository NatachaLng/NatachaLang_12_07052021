import React from "react";
import Header from "./components/Header";
import './styles/Header.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import UserPage from "./components/UserPage";


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
                <Route exact path="/:id" component={UserPage} />
                <Route path="*" component={ErrorPage} />
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App