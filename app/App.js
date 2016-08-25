import React from "react";
import Header from "./Header.js";
import Navigation from "./Navigation.js";
import Main from "./Main.js";

export default class App extends React.Component {
    render() {
        let jobs = [
            {
                id: "1",
                active: true,
                status: 'success',
                name: 'Build and test',
                buildNumber: 4,
                buildDuration: '6 min 14 sec',
                buildFinished: '5 days ago'
            },
            {
                id: "2",
                active: false,
                status: 'failed',
                name: 'Deploy',
                buildNumber: 15,
                buildDuration: '1 min 5 sec',
                buildFinished: '7 days ago'
            },
            {
                id: "3",
                active: false,
                status: 'success',
                name: 'QA Build',
                buildNumber: 1,
                buildDuration: '15 min 2 sec',
                buildFinished: '1 day ago'
            },
            {
                id: "4",
                active: false,
                status: 'failed',
                name: 'Prod Deploy',
                buildNumber: 7,
                buildDuration: '3 min 59 sec',
                buildFinished: '7 days ago'
            }
        ];

        let currentBuild = {
            buildConfig: {some: 'config', else: 'props'},
            buildLogUrl: "http://example.com",
            getBuildLog: () => ( fetch('/build.log').then(response => response.text()) ),
            commitMessage: "Fix log level in spring boot application and move it",
            buildDuration: "3 min 59 sec",
            commitId: "704dda3",
            commitUrl: "#",
            branchName: "master",
            branchUrl: "#",
            buildFinishedDate: "7 days ago",
            prevCommitId: "421a5b1",
            prevCommitCompareUrl: "#",
            commitOwner: "Slam",
            commitOwnerUrl: "#",
            buildNumber: 4
        };

        let currentBuildHeader = {
            jobName: "Build and test",
            buildStatus: "success",
            repoName: "slamdev/micro-ci",
            currentUser: "Slam"
        };

        return (
            <div
                className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs mdl-layout--fixed-drawer">
                <Header {...currentBuildHeader}/>
                <Navigation jobs={jobs}/>
                <Main currentBuild={currentBuild}/>
            </div>
        );
    };
}
