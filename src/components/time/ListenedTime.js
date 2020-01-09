import React from 'react';
import { connect } from 'react-redux';

import {
  updateListenedHours,
  updateListenedMinutes,
  updateListenedSeconds,
  updateListenedPercent,
  updateListenedTime,
} from '../../store/actionCreators/time';

import { updateReadPages } from '../../store/actionCreators/pages';

import {
  GetListenedSeconds,
  GetCurrentPageFromTime,
  GetTotalSeconds,
  GetPercentProgress,
  GetTimeFromSeconds
} from '../../Calculator';

import TimeColumns from './TimeColumns';

const mapStateToProps = (state) => ({
  hours: state.time.listened.hours,
  minutes: state.time.listened.minutes,
  seconds: state.time.listened.seconds,
  percent: state.time.listened.percent,
  totalTime: state.time.total,
  introTime: state.time.intro,
  outroTime: state.time.outro,
  totalPages: state.pages.total,
  startPage: state.pages.start,
});

const mapDispatchToProps = {
  updateHours: updateListenedHours,
  updateMinutes: updateListenedMinutes,
  updateSeconds: updateListenedSeconds,
  updatePercent: updateListenedPercent,
  updateFullTime: updateListenedTime,
  updateReadPages,
};

class ListenedTime extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      showPercentListened: false,
    }
    this.updateHours = this.updateHours.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.updateSeconds = this.updateSeconds.bind(this);
    this.updatePercent = this.updatePercent.bind(this);
  }

  updateReadPagesAndPercent (newListenedTime) {
    const {
      totalTime, introTime, outroTime,
      totalPages, startPage,
    } = this.props;
    const listenedSeconds = GetListenedSeconds(newListenedTime, introTime),
      totalSeconds = GetTotalSeconds(totalTime, introTime, outroTime);
    
    const currentPage = GetCurrentPageFromTime(totalPages, startPage, listenedSeconds, totalSeconds);
    
    this.props.updateReadPages(currentPage);

    this.props.updatePercent(GetPercentProgress(listenedSeconds, totalSeconds));
  }

  updateHours (value) {
    this.props.updateHours(value);

    const { minutes, seconds } = this.props;
    const listened = {
      hours: value,
      minutes,
      seconds,
    }
    this.updateReadPagesAndPercent(listened);
  }

  updateMinutes (value) {
    this.props.updateMinutes(value);

    const { hours, seconds } = this.props;
    const listened = {
      hours,
      minutes: value,
      seconds,
    }
    this.updateReadPagesAndPercent(listened);
  }

  updateSeconds (value) {
    this.props.updateSeconds(value);

    const { hours, minutes } = this.props;
    const listened = {
      hours,
      minutes,
      seconds: value,
    }
    this.updateReadPagesAndPercent(listened);
  }

  updatePercent (value) {
    const percent = parseInt(value) / 100;
    this.props.updatePercent(percent);

    const { totalTime, introTime, outroTime, totalPages } = this.props;
    
    const currentPage = (totalPages * percent).toFixed(2);
    this.props.updateReadPages(currentPage);

    const listenedSeconds = GetTotalSeconds(totalTime, introTime, outroTime) * percent;
    this.props.updateFullTime(GetTimeFromSeconds(listenedSeconds));
  }

  render () {
    return <article className="card">
      <section className="card-body">
        <header className="row">
          <div className="col-md-3">
            <h2>Time Listened</h2>
          </div>
          <nav className="col-md-9 navbar">
            <ul className="nav">
              <li className="nav-item">
                <a className={'nav-link btn btn-small' + (this.state.showPercentListened === false && ' btn-primary')}
                  href="#" onClick={() => this.setState({ showPercentListened: false })}>
                  Time
                </a>
              </li>
              <li className="nav-item">
                <a className={'nav-link btn btn-small' + (this.state.showPercentListened === true && ' btn-primary')}
                  href="#" onClick={() => this.setState({ showPercentListened: true })}>
                  Percent
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {
          this.state.showPercentListened === false
          ? <TimeColumns
              idPrefix='listened'
              hours={this.props.hours}
              minutes={this.props.minutes}
              seconds={this.props.seconds}
              updateHours={this.updateHours}
              updateMinutes={this.updateMinutes}
              updateSeconds={this.updateSeconds}
            />
          : (
            <article>
              <div className="form-group">
                <label htmlFor="listenedPercent">Percent</label>
                <input type="range" className="form-control-range" id="listenedPercent"
                  value={this.props.percent * 100} min="0" max="100" step="1"
                  onChange={event => this.updatePercent(event.target.value)} />
              </div>
              <div className="row">
                <div className="col text-left"><strong>0%</strong></div>
                <div className="col text-center"><em>{parseInt(this.props.percent * 100)}%</em></div>
                <div className="col text-right"><strong>100%</strong></div>
              </div>
            </article>
          )
        }
      </section>
    </article>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListenedTime);