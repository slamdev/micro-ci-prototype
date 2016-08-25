import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";
import BuildInfoCard from "./BuildInfoCard.js";

const CurrentBuildTab = (props) => (
    <section className="mdl-layout__tab-panel is-active" id={props.tabId}>
        <div className="page-content">
            <BuildInfoCard buildLogOpened={true} {...props.currentBuild}/>
        </div>
    </section>
);

CurrentBuildTab.propTypes = {
    tabId: ReactPropTypes.string.isRequired,
    currentBuild: ReactPropTypes.object.isRequired
};

export default CurrentBuildTab;
