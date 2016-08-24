import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";
import NavigationLink from "./NavigationLink.js";

const Navigation = (props) => (
    <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Jobs</span>
        <nav className="mdl-navigation">
            {props.jobs.map(job => (
                <NavigationLink key={job.id} {...job} />
            ))}
        </nav>
    </div>
);

Navigation.propTypes = {
    jobs: ReactPropTypes.array.isRequired,
};

export default Navigation;
