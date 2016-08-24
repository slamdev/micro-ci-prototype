import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";
import Collapse from "react-collapse/lib/Collapse";
import ReactComponent from "react/lib/ReactComponent";

export default class BuildInfoCard extends ReactComponent {
    static propTypes = {
        getBuildLog: ReactPropTypes.func.isRequired,
        open: ReactPropTypes.bool.isRequired,
        commitMessage: ReactPropTypes.string.isRequired,
        buildDuration: ReactPropTypes.string.isRequired,
        commitId: ReactPropTypes.string.isRequired,
        commitUrl: ReactPropTypes.string.isRequired,
        branchName: ReactPropTypes.string.isRequired,
        branchUrl: ReactPropTypes.string.isRequired,
        buildFinishedDate: ReactPropTypes.string.isRequired,
        prevCommitId: ReactPropTypes.string.isRequired,
        prevCommitCompareUrl: ReactPropTypes.string.isRequired,
        commitOwner: ReactPropTypes.string.isRequired,
        commitOwnerUrl: ReactPropTypes.string.isRequired,
        buildNumber: ReactPropTypes.number.isRequired
    };

    static defaultProps = {
        open: true
    };

    state = {
        open: this.props.open,
        buildLog: ''
    };

    constructor(props) {
        super(props);
        this.updateBuildLog(this.props.open);
    }

    updateBuildLog(open) {
        if (open && !this.state.buildLog) {
            this.props.getBuildLog().then(
                log => this.setState({buildLog: log})
            );
        }
    };

    handleCollapseClick = (e) => {
        this.setState({
            open: !this.state.open,
        });
        this.updateBuildLog(!this.state.open);
    };

    render() {
        return (
            <div className="mdl-card mdl-shadow--8dp" style={{width: '100%'}}>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.props.commitMessage}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <div className="mdl-grid mdl-grid--no-spacing">
                        <div className="mdl-cell">Duration: {this.props.buildDuration}</div>
                        <div className="mdl-cell">Commit: <a href={this.props.commitUrl}>{this.props.commitId}</a></div>
                        <div className="mdl-cell">Branch: <a href={this.props.branchUrl}>{this.props.branchName}</a>
                        </div>
                    </div>
                    <div className="mdl-grid mdl-grid--no-spacing">
                        <div className="mdl-cell">Finished: {this.props.buildFinishedDate}</div>
                        <div className="mdl-cell">Compare: <a
                            href={this.props.prevCommitCompareUrl}>{this.props.prevCommitId}..{this.props.commitId}</a>
                        </div>
                        <div className="mdl-cell">Committed by: <a
                            href={this.props.commitOwnerUrl}>{this.props.commitOwner} <i
                            style={{fontSize: '14px'}}
                            className="material-icons">account_circle</i></a>
                        </div>
                    </div>
                    <div className="mdl-grid mdl-grid--no-spacing" style={{paddingTop: '16px'}}>
                        <div style={{width: '100%'}}
                             className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
                    </div>
                </div>
                <div className="mdl-card__menu">
                    <span className="mdl-chip"><span className="mdl-chip__text">#{this.props.buildNumber}</span></span>
                </div>
                <div className="mdl-card__actions mdl-card--border" style={{display: 'flex'}}>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Restart build</a>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Delete build</a>
                    <div className="mdl-layout-spacer"></div>
                    <button id="info_outline"
                            className="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons" style={{paddingRight: '10px'}}>info_outline</i>
                    </button>
                    <span className="mdl-tooltip mdl-tooltip--large" htmlFor="info_outline">Show build config</span>
                    <button id="open_in_new"
                            className="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons" style={{paddingRight: '10px'}}>open_in_new</i>
                    </button>
                    <span className="mdl-tooltip mdl-tooltip--large" htmlFor="open_in_new">See raw logs</span>
                    <button id="expand_less"
                            onClick={this.handleCollapseClick}
                            className="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons"
                           style={{paddingRight: '10px'}}>{this.state.open ? 'expand_less' : 'expand_more'}</i>
                    </button>
                    <span className="mdl-tooltip mdl-tooltip--large"
                          htmlFor="expand_less">{this.state.open ? 'Collapse' : 'Expand'}</span>
                </div>
                <Collapse isOpened={this.state.open} keepCollapsedContent={true}>
                    <div style={{padding: '16px', fontSize: '12px'}}
                         className="mdl-color--blue-grey mdl-color-text--white">
                        <pre>{this.state.buildLog}</pre>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default BuildInfoCard;
