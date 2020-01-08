import React from 'react';
import { connect } from 'react-redux';

import {
  updateIntroMinutes,
  updateIntroSeconds,
  updateOutroMinutes,
  updateOutroSeconds,
} from '../../store/actionCreators/time';

import TimeColumns from './TimeColumns';

const mapStateToProps = (state) => ({
  introMinutes: state.time.intro.minutes,
  introSeconds: state.time.intro.seconds,
  outroMinutes: state.time.outro.minutes,
  outroSeconds: state.time.outro.seconds,
});

const mapDispatchToProps = {
  updateIntroMinutes,
  updateIntroSeconds,
  updateOutroMinutes,
  updateOutroSeconds,
};

const FineTuneTime = (props) => {
  return <article className="card">
    <section className="card-body">
      <header className="row">
        <div className="col-md-4">
          <h3>Fine-Tune Time</h3>
        </div>
        <div className="col-md-8">
          <a className="btn btn-secondary" onClick={props.toggle}>
            { props.isShown ? 'Collapse' : 'Expand' }
          </a>
        </div>
      </header>
      {props.isShown && (
        <div>
          <h4>Actual Start Time</h4>
          <TimeColumns
            idPrefix='intro'
            minutes={props.introMinutes}
            seconds={props.introSeconds}
            updateMinutes={props.updateIntroMinutes}
            updateSeconds={props.updateIntroSeconds}
          />
          <h4>Time After Book Ends</h4>
          <TimeColumns
            idPrefix='outro'
            minutes={props.outroMinutes}
            seconds={props.outroSeconds}
            updateMinutes={props.updateOutroMinutes}
            updateSeconds={props.updateOutroSeconds}
          />
        </div>
      )}
    </section>
  </article>;
}

export default connect(mapStateToProps, mapDispatchToProps)(FineTuneTime);