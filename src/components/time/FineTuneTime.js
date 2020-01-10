import React from 'react';
import { connect } from 'react-redux';

import {
  updateIntroMinutes,
  updateIntroSeconds,
  updateOutroMinutes,
  updateOutroSeconds,
} from '../../store/actionCreators/time';

import TimeColumns from './TimeColumns';
import Modal from '../Modal';

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
    <div className="card-body">
      <header className="row">
        <div className="col-auto">
          <h3 className="h5">Fine-Tune Time</h3>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary btn-sm" onClick={props.toggle}>
            { props.isShown ? 'Collapse' : 'Expand' }
          </button>
        </div>
      </header>
      {props.isShown && (
        <section>
          <header className="row">
            <div className="col-auto">
              <h4 className="h5">Actual Start Time</h4>
            </div>
            <div className="col-auto">
              <button className="btn btn-secondary btn-sm" onClick={props.showStartHelp}
                aria-label="Show Help Modal" title="Show Help Modal">
                ?
              </button>
            </div>
          </header>
          <TimeColumns
            idPrefix='intro'
            minutes={props.introMinutes}
            seconds={props.introSeconds}
            updateMinutes={props.updateIntroMinutes}
            updateSeconds={props.updateIntroSeconds}
          />
          <header className="row">
            <div className="col-auto">
              <h4 className="h5">Time After Book Ends</h4>
            </div>
            <div className="col-auto">
              <button className="btn btn-secondary btn-sm" onClick={props.showEndHelp}
                aria-label="Show Help Modal" title="Show Help Modal">
                ?
              </button>
            </div>
          </header>
          <TimeColumns
            idPrefix='outro'
            minutes={props.outroMinutes}
            seconds={props.outroSeconds}
            updateMinutes={props.updateOutroMinutes}
            updateSeconds={props.updateOutroSeconds}
          />
        </section>
      )}
    </div>
    {props.startHelpIsShown && (
      <Modal title="Actual Start Time Help" hide={props.hideStartHelp}>
        <p>
        Some audiobooks have some kind of introduction, maybe saying who produced or is
        reading the book. Set this to align with when the first word of the first page
        in the book is read to fine-tune your position.
        </p>
      </Modal>
    )}
    {props.endHelpIsShown && (
      <Modal title="Time After Book Ends" hide={props.hideEndHelp}>
        <p>
        Some audiobooks have some kind of ending or afterword, maybe thanking you for
        listening or something like that. Specify how much time passes from when the
        last word of the book is read until the very end of the recording to fine-tune
        your position.
        </p>
        <p>
          Alternately, you can just set the "Total Audiobook Time" field to when the
          audio reaches the last word on the last page of the book.
        </p>
      </Modal>
    )}
  </article>;
}

export default connect(mapStateToProps, mapDispatchToProps)(FineTuneTime);