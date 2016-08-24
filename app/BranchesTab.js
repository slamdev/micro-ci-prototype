import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";

const BranchesTab = (props) => (
    <section className="mdl-layout__tab-panel" id={props.tabId}>
        <div className="page-content">TODO: add branches prototype</div>
    </section>
);

BranchesTab.propTypes = {
    tabId: ReactPropTypes.string.isRequired
};

export default BranchesTab;
