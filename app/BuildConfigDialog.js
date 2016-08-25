import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";
import ReactComponent from "react/lib/ReactComponent";
import JsonPrinter from "./JsonPrinter";

export default class BuildConfigDialog extends ReactComponent {
    static propTypes = {
        opened: ReactPropTypes.bool.isRequired,
        buildConfig: ReactPropTypes.object.isRequired,
        handleCloseClick: ReactPropTypes.func.isRequired
    };

    static defaultProps = {
        opened: false,
        handleCloseClick: () => {
        }
    };

    state = {
        opened: this.props.opened
    };

    dialog;

    componentDidMount() {
        this.dialog = document.querySelector('dialog');
        this.dialog.addEventListener('close', this.props.handleCloseClick)
    }

    componentWillReceiveProps(nextProps) {
        this.displayIfNeeded(nextProps.opened);
    }

    displayIfNeeded(opened) {
        if (opened) {
            this.dialog.showModal();
        }
    };

    handleCloseClick = (e) => {
        this.dialog.close();
    };

    render() {
        return (
            <dialog className="mdl-dialog">
                <h4 className="mdl-dialog__title">Build Config</h4>
                <div className="mdl-dialog__content">
                    <JsonPrinter json={this.props.buildConfig}/>
                </div>
                <div className="mdl-dialog__actions mdl-dialog__actions--full-width">
                    <button type="button" className="mdl-button close" onClick={this.handleCloseClick}>Close</button>
                </div>
            </dialog>
        );
    }
}
