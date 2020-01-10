import React from 'react';
import PropTypes from 'prop-types';

const modalStyle = {
  display: 'block',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const Modal = (props) => {
  const id = props.title.replace(/\s/, '-') + '_Modal';
  return <div className="modal" style={modalStyle}
    role="dialog" aria-labelledby="helpModalLabel"
    onClick={props.hide}>
    <div className="modal-dialog" role="document">
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
};

export default Modal;