import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";

function buildNavigationLinks(jobs) {
    let statusIconClass = job => 'material-icons' + (job.status == 'success' ? ' mdl-color-text--green' : ' mdl-color-text--red');
    let defineUrlClass = job => 'mdl-navigation__link' + (job.active ? ' mdl-navigation__link--current' : '');
    return jobs.map(job => (
        <a className={defineUrlClass(job)} href="#" key={job.id}>
            <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--2-col"><i
                    className={statusIconClass(job)}>{job.status == 'success' ? 'done' : 'error_outline'}</i>
                </div>
                <div className="mdl-cell mdl-cell--8-col">{job.name}</div>
                <div className="mdl-cell mdl-cell--2-col">
                        <span className="mdl-chip">
                            <span className="mdl-chip__text">#{job.buildNumber}</span>
                        </span>
                </div>
            </div>
            <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--2-col"></div>
                <div style={{fontSize: '10px', lineHeight: '10px'}}>Duration: {job.buildDuration}</div>
            </div>
            <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--2-col"></div>
                <div style={{fontSize: '10px', lineHeight: '10px'}}>Finished: {job.buildFinished}</div>
            </div>
        </a>
    ));
}

const Navigation = (props) => (
    <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Jobs</span>
        <nav className="mdl-navigation">
            {buildNavigationLinks(props.jobs)}
        </nav>
    </div>
);

Navigation.propTypes = {
    jobs: ReactPropTypes.array,
};

export default Navigation;
