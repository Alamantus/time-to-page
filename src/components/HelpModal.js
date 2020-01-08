import React from 'react';
import PropTypes from 'prop-types';

const HelpModal = (props) => {
  return <div className="modal" style={{ display: 'block' }}
    role="dialog" aria-labelledby="helpModalLabel"
    onClick={props.hideHelp}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="helpModalLabel">How to Use</h5>
          <button type="button" className="close" aria-label="Close" onClick={props.hideHelp}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={props.hideHelp}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>;
}

HelpModal.propTypes = {
  hideHelp: PropTypes.func.isRequired,
};

export default HelpModal;