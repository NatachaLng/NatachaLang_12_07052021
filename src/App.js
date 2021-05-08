import React from "react";
import Header from "./components/Header";
import './styles/Header.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>

            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App