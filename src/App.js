import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import 'antd/dist/antd.css';
import Header from "./common/header/index";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from './pages/login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/detail/:id" exact component={Detail} />
                    <Route path="/login" exact component={Login} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
