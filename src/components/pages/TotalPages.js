import React from 'react';
import { connect } from 'react-redux';

import {
  updateTotalPages,
  updateStartPages,
} from '../../store/actionCreators/pages';

import Modal from '../Modal';

const mapStateToProps = (state) => ({
  total: state.pages.total,
  start: state.pages.start,
});

const mapDispatchToProps = {
  updateTotalPages,
  updateStartPages,
};

const TotalPages = (props) => {
  const updateTotalPages = value => {
    if (isNaN(value) || value < 0) value = 0;
    props.updateTotalPages(value);
  }
  const updateStartPage = value => {
    if (isNaN(value) || value < 0) value = 0;
    if (value > props.total) {
      value = props.total;
    }
    props.updateStartPages(value);
  }

  return <article className="card">
    <section className="card-body">
      <header className="row">
        <div className="col-auto">
          <h2 className="h4">Book Pages</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary btn-sm" onClick={props.showHelp}
            aria-label="Show Help Modal" title="Show Help Modal">
            ?
          </button>
        </div>
      </header>
      <article className="row">
        <div className="col form-group">
          <label htmlFor="totalPages">Last Page</label>
          <input className="form-control" id="totalPages"
            type="number" step="1" min="0"
            value={props.total}
            onFocus={event => event.target.select()}
            onChange={event => updateTotalPages(parseInt(event.target.value))}
          />
        </div>
        <div className="col form-group">
          <label htmlFor="startPage">Text Start Page</label>
          <input className="form-control" id="startPage"
            type="number" step="1" min="0"
            value={props.start}
            onFocus={event => event.target.select()}
            onChange={event => updateStartPage(parseInt(event.target.value))}
          />
        </div>
      </article>
    </section>
    {props.helpIsShown && (
      <Modal title="Book Pages Help" hide={props.hideHelp}>
        <p>
          Some books have extra text or afterwords after the main text of the book has
          ended. Enter the last page number of the main text in the "Last Page" field.
        </p>
        <p>
          Some books don't start on page 1. Specify what page your your book starts on
          in the "Text Start Page" field to adjust your calculation.
        </p>
      </Modal>
    )}
  </article>;
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalPages);