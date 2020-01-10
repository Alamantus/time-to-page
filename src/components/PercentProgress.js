import React from 'react';

import Modal from './Modal';

const PercentProgress = (props) => {
  return <article className="card">
    <section className="card-body">
      <header className="row">
        <div className="col-auto">
          <h2 className="h4">Percent Progress</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary btn-sm" onClick={props.showHelp}
            aria-label="Show Help Modal" title="Show Help Modal">
            ?
          </button>
        </div>
      </header>
      <article>
        <div className="form-group">
          <label htmlFor="listenedPercent">Percent</label>
          <input type="range" className="form-control-range" id="listenedPercent"
            value={props.percent * 100} min="0" max="100" step="1"
            onChange={event => props.updatePercent(event.target.value)} />
        </div>
        <div className="row">
          <div className="col text-left"><strong>0%</strong></div>
          <div className="col text-center"><em>{parseInt(props.percent * 100)}%</em></div>
          <div className="col text-right"><strong>100%</strong></div>
        </div>
      </article>
    </section>
    {props.helpIsShown && (
      <Modal title="Percent Progress Help" hide={props.hideHelp}>
        <p>
          Hopefully self-explanatory: your current percentage of completion.
        </p>
      </Modal>
    )}
  </article>;
}

export default PercentProgress;