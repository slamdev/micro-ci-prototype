import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";
import BuildInfoCard from "./BuildInfoCard.js";

const CurrentBuildTab = (props) => (
    <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
        <div className="page-content">
            <BuildInfoCard
                commitMessage="Fix log level in spring boot application and move it"
                buildDuration="3 min 59 sec"
                commitId="704dda3"
                commitUrl="#"
                branchName="master"
                branchUrl="#"
                buildFinishedDate="7 days ago"
                prevCommitId="421a5b1"
                prevCommitCompareUrl="#"
                commitOwner="Slam"
                commitOwnerUrl="#"
                buildNumber={4}
            />
        </div>
    </section>
);

CurrentBuildTab.propTypes = {
    stub: ReactPropTypes.string
};

export default CurrentBuildTab;
