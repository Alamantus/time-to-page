import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const id = props.title.replace(/\s/, '-') + '_Modal';
  return <div className="modal" style={{ display: 'block' }}
    role="dialog" aria-labelledby="helpModalLabel"
  >
    <div className="modal-backdrop" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={props.hide} />
    <div className={'modal-dialog' + (props.scrollingBody ? ' modal-dialog-scrollable' : '')} style={{ zIndex: 1050 }} role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="helpModalLabel">{props.title}</h5>
          <button type="button" className="close" aria-label="Close" onClick={props.hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          {props.confirmButtonText && (
            <button type="button" className="btn btn-primary" onClick={props.confirmAction}>
              {props.confirmButtonText}
            </button>
          )}
          <button type="button" className="btn btn-secondary" onClick={props.hide}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>;
}

Modal.propTypes = {
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  confirmButtonText: PropTypes.string,
  confirmAction: PropTypes.func,
};

export default Modal;