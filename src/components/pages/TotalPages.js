import React from 'react';
import { connect } from 'react-redux';

import {
  updateTotalPages,
  updateStartPages,
} from '../../store/actionCreators/pages';

const mapStateToProps = (state) => ({
  total: state.pages.total,
  start: state.pages.start,
});

const mapDispatchToProps = {
  updateTotalPages,
  updateStartPages,
};

const TotalPages = (props) => {
  return <article className="card">
    <section className="card-body">
      <header>
        <h2>Book Pages</h2>
      </header>
      <article className="row">
        <div className="col form-group">
          <label htmlFor="totalPages">Last Page</label>
          <input className="form-control" id="totalPages"
            type="number" step="1" min="0"
            value={props.total}
            onFocus={event => event.target.select()}
            onChange={event => props.updateTotalPages(parseInt(event.target.value))}
          />
        </div>
        <div className="col form-group">
          <label htmlFor="startPage">Text Starts on Page</label>
          <input className="form-control" id="startPage"
            type="number" step="1" min="0"
            value={props.start}
            onFocus={event => event.target.select()}
            onChange={event => props.updateStartPages(parseInt(event.target.value))}
          />
        </div>
      </article>
    </section>
  </article>;
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalPages);