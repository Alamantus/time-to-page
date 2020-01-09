import React from 'react';
import { connect } from 'react-redux';

import {
  updateReadPages,
} from '../../store/actionCreators/pages';

const mapStateToProps = (state) => ({
  currentPage: state.pages.read,
  totalPages: state.pages.total,
});

const mapDispatchToProps = {
  updatePage: updateReadPages,
};

const CurrentPage = (props) => {
  return <article className="card">
    <section className="card-body">
      <header>
        <h2>Current Page</h2>
      </header>
      <article className="form-group">
        <label htmlFor="readPages">Page Number</label>
        <input className="form-control" id="readPages"
          type="number" step="0.01" min="0" max={props.totalPages}
          value={props.currentPage}
          onFocus={event => event.target.select()}
          onChange={event => props.updatePage(parseFloat(event.target.value))}
        />
      </article>
    </section>
  </article>;
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPage);