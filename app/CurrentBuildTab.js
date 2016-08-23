import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";
import BuildInfoCard from "./BuildInfoCard.js";

const CurrentBuildTab = (props) => (
    <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
        <div className="page-content">
            <BuildInfoCard/>
        </div>
    </section>
);

CurrentBuildTab.propTypes = {
    jobName: ReactPropTypes.string,
    buildStatus: ReactPropTypes.string,
    repoName: ReactPropTypes.string,
    currentUser: ReactPropTypes.string
};

export default CurrentBuildTab;
