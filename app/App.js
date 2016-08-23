import React from "react";
import Header from "./Header.js";
import Navigation from "./Navigation.js";
import Main from "./Main.js";

export default class App extends React.Component {
    render() {
        let jobs = [
            {
                id: 1,
                active: true,
                status: 'success',
                name: 'Build and test',
                buildNumber: '4',
                buildDuration: '6 min 14 sec',
                buildFinished: '5 days ago'
            },
            {
                id: 2,
                active: false,
                status: 'failed',
                name: 'Deploy',
                buildNumber: '15',
                buildDuration: '1 min 5 sec',
                buildFinished: '7 days ago'
            },
            {
                id: 3,
                active: false,
                status: 'success',
                name: 'QA Build',
                buildNumber: '1',
                buildDuration: '15 min 2 sec',
                buildFinished: '1 day ago'
            },
            {
                id: 4,
                active: false,
                status: 'failed',
                name: 'Prod Deploy',
                buildNumber: '7',
                buildDuration: '3 min 59 sec',
                buildFinished: '7 days ago'
            }
        ];
        return (
            <div
                className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs mdl-layout--fixed-drawer">
                <Header jobName="Build and test" buildStatus="success" repoName="slamdev/micro-ci" currentUser="Slam"/>
                <Navigation jobs={jobs}/>
                <Main/>
            </div>
        );
    };
}
