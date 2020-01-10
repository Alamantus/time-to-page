import React from 'react';
import { connect } from 'react-redux';

import {
  updateTotalHours,
  updateTotalMinutes,
  updateTotalSeconds,
} from '../../store/actionCreators/time';

import TimeColumns from './TimeColumns';
import Modal from '../Modal';

const mapStateToProps = (state) => ({
  hours: state.time.total.hours,
  minutes: state.time.total.minutes,
  seconds: state.time.total.seconds,
});

const mapDispatchToProps = {
  updateHours: updateTotalHours,
  updateMinutes: updateTotalMinutes,
  updateSeconds: updateTotalSeconds,
};

const TotalTime = (props) => {
  return <article className="card">
    <section className="card-body">
      <header className="row">
        <div className="col-auto">
          <h2 className="h4">Audiobook End</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary btn-sm" onClick={props.showHelp}
            aria-label="Show Help Modal" title="Show Help Modal">
            ?
          </button>
        </div>
      </header>
      <TimeColumns
        idPrefix='total'
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
        updateHours={props.updateHours}
        updateMinutes={props.updateMinutes}
        updateSeconds={props.updateSeconds}
      />
    </section>
    {props.helpIsShown && (
      <Modal title="Total Audiobook Time Help" hide={props.hideHelp}>
        <p>
          Enter the length of the audiobook recording here. If there is extra audio time after the end of
          the book has been reached, you can either specify the time in the audiobook that corresponds to
          the last word of the book, OR just write the total length of the audiobook and set how much time
          the recording goes on after the last word of the book in the "Time After Book Ends" field below.
        </p>
      </Modal>
    )}
  </article>;
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalTime);