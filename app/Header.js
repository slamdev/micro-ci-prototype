import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";

const Header = (props) => (
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{props.jobName}</span>
            <div className="mdl-layout-spacer"></div>
            <span className="mdl-chip mdl-color--green mdl-color-text--white">
                <span className="mdl-chip__text">Build status</span>
                <span className="mdl-chip__action"><i
                    className="material-icons">{props.buildStatus == 'success' ? 'done' : ''}</i></span>
            </span>
            <div className="mdl-layout-spacer"></div>
            <span className="mdl-layout-title"><a className="mdl-color-text--white"
                                                  href="">{props.repoName}</a></span>
            <div className="mdl-layout-spacer"></div>
            <div>
                <button id="demo-menu-lower-right" className="mdl-button mdl-js-button">
                    <span className="mdl-layout-title mdl-color-text--white"
                          style={{textTransform: 'none'}}>{props.currentUser} <i
                        style={{fontSize: '38px'}}
                        className="material-icons">account_circle</i></span>
                </button>
                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                    htmlFor="demo-menu-lower-right">
                    <li className="mdl-menu__item">Logout</li>
                </ul>
            </div>
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
            <a href="#fixed-tab-1" className="mdl-layout__tab is-active">Current</a>
            <a href="#fixed-tab-2" className="mdl-layout__tab">Branches</a>
            <a href="#fixed-tab-3" className="mdl-layout__tab">Build History</a>
            <a href="#fixed-tab-4" className="mdl-layout__tab">Pull Requests</a>
        </div>
    </header>
);

Header.propTypes = {
    jobName: ReactPropTypes.string,
    buildStatus: ReactPropTypes.string,
    repoName: ReactPropTypes.string,
    currentUser: ReactPropTypes.string
};

export default Header;
