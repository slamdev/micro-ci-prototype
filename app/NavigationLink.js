import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";

const NavigationLink = (props) => (
    <a className={navigationUrlClass(props.active)} href="#">
        <div className="mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--2-col"><i
                className={statusIconClass(props.status)}>{statusIconName(props.status)}</i>
            </div>
            <div className="mdl-cell mdl-cell--8-col">{props.name}</div>
            <div className="mdl-cell mdl-cell--2-col">
                        <span className="mdl-chip">
                            <span className="mdl-chip__text">#{props.buildNumber}</span>
                        </span>
            </div>
        </div>
        <div className="mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--2-col"></div>
            <div style={{fontSize: '10px', lineHeight: '10px'}}>Duration: {props.buildDuration}</div>
        </div>
        <div className="mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--2-col"></div>
            <div style={{fontSize: '10px', lineHeight: '10px'}}>Finished: {props.buildFinished}</div>
        </div>
    </a>
);

NavigationLink.propTypes = {
    active: ReactPropTypes.bool.isRequired,
    status: ReactPropTypes.oneOf(['success', 'failed']).isRequired,
    name: ReactPropTypes.string.isRequired,
    buildNumber: ReactPropTypes.number.isRequired,
    buildDuration: ReactPropTypes.string.isRequired,
    buildFinished: ReactPropTypes.string.isRequired
};

let statusIconClass = status => 'material-icons' + (status == 'success' ? ' mdl-color-text--green' : ' mdl-color-text--red');
let statusIconName = status => status == 'success' ? 'done' : 'error_outline';
let navigationUrlClass = active => 'mdl-navigation__link' + (active ? ' mdl-navigation__link--current' : '');

export default NavigationLink;
