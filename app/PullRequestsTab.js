import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";

const PullRequestsTab = (props) => (
    <section className="mdl-layout__tab-panel" id={props.tabId}>
        <div className="page-content">TODO: add pull requests prototype</div>
    </section>
);

PullRequestsTab.propTypes = {
    tabId: ReactPropTypes.string.isRequired
};

export default PullRequestsTab;
