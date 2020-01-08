import React from 'react';
import { connect } from 'react-redux';

import {
  updateListenedHours,
  updateListenedMinutes,
  updateListenedSeconds,
  updateListenedPercent,
} from '../../store/actionCreators/time';

import TimeColumns from './TimeColumns';

const mapStateToProps = (state) => ({
  hours: state.time.listened.hours,
  minutes: state.time.listened.minutes,
  seconds: state.time.listened.seconds,
  percent: state.time.listened.percent,
});

const mapDispatchToProps = {
  updateHours: updateListenedHours,
  updateMinutes: updateListenedMinutes,
  updateSeconds: updateListenedSeconds,
  updatePercent: updateListenedPercent,
};

class ListenedTime extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      showPercentListened: false,
    }
  }

  render () {
    return <section>
      <div className="row">
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
      </div>
      {
        this.state.showPercentListened === false
        ? <TimeColumns
            idPrefix='listened'
            hours={this.props.hours}
            minutes={this.props.minutes}
            seconds={this.props.seconds}
            updateHours={this.props.updateHours}
            updateMinutes={this.props.updateMinutes}
            updateSeconds={this.props.updateSeconds}
          />
        : (
          <article>
            <div className="form-group">
              <label htmlFor="listenedPercent">Percent</label>
              <input type="range" className="form-control-range" id="listenedPercent"
                value={this.props.percent * 100} min="0" max="100" step="1"
                onChange={event => this.props.updatePercent(event.target.value)} />
            </div>
            <div className="row">
              <div className="col text-left"><strong>0%</strong></div>
              <div className="col text-center"><em>{parseInt(this.props.percent * 100)}%</em></div>
              <div className="col text-right"><strong>100%</strong></div>
            </div>
          </article>
        )
      }
    </section>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListenedTime);