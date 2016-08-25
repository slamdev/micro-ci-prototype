import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";
import CurrentBuildTab from "./CurrentBuildTab";
import BranchesTab from "./BranchesTab";
import BuildHistoryTab from "./BuildHistoryTab";
import PullRequestsTab from "./PullRequestsTab";

const Main = (props) => (
    <main className="mdl-layout__content">
        <CurrentBuildTab tabId="fixed-tab-1" currentBuild={props.currentBuild}/>
        <BranchesTab tabId="fixed-tab-2"/>
        <BuildHistoryTab tabId="fixed-tab-3"/>
        <PullRequestsTab tabId="fixed-tab-4"/>
    </main>
);

Main.propTypes = {
    currentBuild: ReactPropTypes.object.isRequired
};

export default Main;
