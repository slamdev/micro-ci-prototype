import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";

const BuildHistoryTab = (props) => (
    <section className="mdl-layout__tab-panel" id={props.tabId}>
        <div className="page-content">TODO: add build history prototype</div>
    </section>
);

BuildHistoryTab.propTypes = {
    tabId: ReactPropTypes.string.isRequired
};

export default BuildHistoryTab;
