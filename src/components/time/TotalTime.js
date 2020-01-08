import React from 'react';
import { connect } from 'react-redux';

import {
  updateTotalHours,
  updateTotalMinutes,
  updateTotalSeconds,
} from '../../store/actionCreators/time';

import TimeColumns from './TimeColumns';

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
        <div className="col-md-3">
          <h2>Total Time</h2>
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
  </article>;
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalTime);