import React from 'react';
import { connect } from 'react-redux';

import {
  updateListenedHours,
  updateListenedMinutes,
  updateListenedSeconds,
  updateListenedPercent,
  updateListenedTime,
} from '../store/actionCreators/time';

import { updateReadPages } from '../store/actionCreators/pages';

import {
  CalculateSeconds,
  GetListenedSeconds,
  GetCurrentPageFromTime,
  GetTotalSeconds,
  GetPercentProgress,
  GetTimeFromSeconds,
  GetCurrentTimeFromPage,
} from '../Calculator';

import PercentProgress from './PercentProgress';
import ListenedTime from './time/ListenedTime';
import CurrentPage from './pages/CurrentPage';

const mapStateToProps = (state) => ({
  hours: state.time.listened.hours,
  minutes: state.time.listened.minutes,
  seconds: state.time.listened.seconds,
  percent: state.time.listened.percent,
  totalTime: state.time.total,
  introTime: state.time.intro,
  outroTime: state.time.outro,
  currentPage: state.pages.read,
  totalPages: state.pages.total,
  startPage: state.pages.start,
});

const mapDispatchToProps = {
  updateListenedHours,
  updateListenedMinutes,
  updateListenedSeconds,
  updateListenedPercent,
  updateListenedTime,
  updateReadPages,
};

class CalculatorSection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showPercentHelp: false,
      showListenedHelp: false,
      showPageHelp: false,
    };
    
    this.updateHours = this.updateHours.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.updateSeconds = this.updateSeconds.bind(this);
    this.updatePercent = this.updatePercent.bind(this);
    this.updatePage = this.updatePage.bind(this);
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

    this.props.updateListenedPercent(GetPercentProgress(listenedSeconds, totalSeconds));
  }

  updateHours (value) {
    this.props.updateListenedHours(value);

    const { minutes, seconds } = this.props;
    const listened = {
      hours: value,
      minutes,
      seconds,
    }
    this.updateReadPagesAndPercent(listened);
  }

  updateMinutes (value) {
    this.props.updateListenedMinutes(value);

    const { hours, seconds } = this.props;
    const listened = {
      hours,
      minutes: value,
      seconds,
    }
    this.updateReadPagesAndPercent(listened);
  }

  updateSeconds (value) {
    this.props.updateListenedSeconds(value);

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
    this.props.updateListenedPercent(percent);

    const { totalTime, introTime, outroTime, totalPages } = this.props;
    
    const currentPage = (totalPages * percent).toFixed(2);
    this.props.updateReadPages(currentPage);

    const listenedSeconds = GetTotalSeconds(totalTime, introTime, outroTime) * percent;
    this.props.updateListenedTime(GetTimeFromSeconds(listenedSeconds));
  }
  
  updatePage (value) {
    if (isNaN(value) || value < 0) value = 0;
    if (value > this.props.totalPages) {
      value = this.props.totalPages;
    }
    this.props.updateReadPages(value);

    const { totalPages, startPage, totalTime, introTime, outroTime } = this.props;
    const totalSeconds = GetTotalSeconds(totalTime, introTime, outroTime),
      introSeconds = CalculateSeconds(introTime);

    const listenedTime = GetCurrentTimeFromPage(value, totalPages, startPage, totalSeconds, introSeconds);
    this.props.updateListenedTime(listenedTime);
    this.props.updateListenedPercent(GetPercentProgress(value, totalPages));
  }
  
  render () {
    return <section className="container-fluid">
      <PercentProgress
        percent={this.props.percent}
        updatePercent={this.updatePercent}
        helpIsShown={this.state.showPercentHelp}
        showHelp={() => this.setState({ showPercentHelp: true })}
        hideHelp={() => this.setState({ showPercentHelp: false })}
      />
      <ListenedTime
        hours={this.props.hours}
        minutes={this.props.minutes}
        seconds={this.props.seconds}
        updateHours={this.updateHours}
        updateMinutes={this.updateMinutes}
        updateSeconds={this.updateSeconds}
        helpIsShown={this.state.showListenedHelp}
        showHelp={() => this.setState({ showListenedHelp: true })}
        hideHelp={() => this.setState({ showListenedHelp: false })}
      />
      <CurrentPage
        currentPage={this.props.currentPage}
        totalPages={this.props.totalPages}
        updatePage={this.updatePage}
        helpIsShown={this.state.showPageHelp}
        showHelp={() => this.setState({ showPageHelp: true })}
        hideHelp={() => this.setState({ showPageHelp: false })}
      />
    </section>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorSection);