import React from 'react';

import Modal from '../Modal';

const CurrentPage = (props) => {
  return <article className="card">
    <section className="card-body">
      <header className="row">
        <div className="col-auto">
          <h2 className="h4">Current Page</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary btn-sm" onClick={props.showHelp}
            aria-label="Show Help Modal" title="Show Help Modal">
            ?
          </button>
        </div>
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
    {props.helpIsShown && (
      <Modal title="Current Page Help" hide={props.hideHelp}>
        <p>
          You can estimate your page position up to 2 decimal places, though
          it might still take a little bit of adjustment to find exactly where
          on the page you are.
        </p>
      </Modal>
    )}
  </article>;
}

export default CurrentPage;