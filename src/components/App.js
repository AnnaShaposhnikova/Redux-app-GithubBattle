import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import PopularPage from "./popular/PopularPage";
import  BattlePage  from "./battle/BattlePage";
import { Results } from "./battle/Results";

export const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Nav></Nav>

                <div className="content">
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route
                                exact
                                path="/popular"
                                component={PopularPage}
                            />
                            <Route
                                exact
                                path="/battle"
                                component={BattlePage}
                            />
                            <Route
                                exact
                                path="/battle/results"
                                component={Results}
                            />
                            <Route
                                render={() => {
                                    return (
                                        <div className="not-found">
                                            <h1>Page is not found</h1>
                                        </div>
                                    );
                                }}
                            ></Route>
                        </Switch>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </Router>
    );
};
