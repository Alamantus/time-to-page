import React from 'react';

import Modal from '../Modal';

import TimeColumns from './TimeColumns';

const ListenedTime = (props) => {
  return <article className="card">
    <section className="card-body">
      <header className="row">
        <div className="col-auto">
          <h2 className="h4">Time Listened</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary btn-sm" onClick={props.showHelp}
            aria-label="Show Help Modal" title="Show Help Modal">
            ?
          </button>
        </div>
      </header>
      <TimeColumns
        idPrefix='listened'
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
        updateHours={props.updateHours}
        updateMinutes={props.updateMinutes}
        updateSeconds={props.updateSeconds}
      />
    </section>
    {props.helpIsShown && (
      <Modal title="Time Listened Help" hide={props.hideHelp}>
        <p>
          Hopefully self-explanatory: your current time position in the audiobook.
        </p>
      </Modal>
    )}
  </article>;
}

export default ListenedTime;