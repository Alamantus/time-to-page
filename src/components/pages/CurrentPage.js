import React from 'react';
import { connect } from 'react-redux';

import {
  updateReadPages,
} from '../../store/actionCreators/pages';
import {
  updateListenedTime,
  updateListenedPercent,
} from '../../store/actionCreators/time';

import {
  CalculateSeconds,
  GetTotalSeconds,
  GetPercentProgress,
  GetCurrentTimeFromPage,
} from '../../Calculator';

const mapStateToProps = (state) => ({
  currentPage: state.pages.read,
  totalPages: state.pages.total,
  startPage: state.pages.start,
  totalTime: state.time.total,
  introTime: state.time.intro,
  outroTime: state.time.outro,
});

const mapDispatchToProps = {
  updatePage: updateReadPages,
  updateListenedTime,
  updateListenedPercent,
};

const CurrentPage = (props) => {
  const updatePage = value => {
    props.updatePage(value);

    const { totalPages, startPage, totalTime, introTime, outroTime } = props;
    const totalSeconds = GetTotalSeconds(totalTime, introTime, outroTime),
      introSeconds = CalculateSeconds(introTime);

    const listenedTime = GetCurrentTimeFromPage(value, totalPages, startPage, totalSeconds, introSeconds);
    props.updateListenedTime(listenedTime);
    props.updateListenedPercent(GetPercentProgress(value, totalPages));
  }
  
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
          onChange={event => updatePage(parseFloat(event.target.value))}
        />
      </article>
    </section>
  </article>;
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPage);