import React from 'react';
import PropTypes from 'prop-types';

const TimeColumns = (props) => {
  const idPrefix = props.idPrefix;
  return <article className="row">
    <div className="col form-group">
      <label htmlFor={idPrefix + 'Hours'}>Hours</label>
      <input className="form-control" id={idPrefix + 'Hours'}
        type="number" step="1" min="0"
        value={props.hours}
        onFocus={event => event.target.select()}
        onChange={event => {
          let { value } = event.target;
          if (isNaN(parseInt(value))) value = 0;
          props.updateHours(value);
        }} />
    </div>
    <div className="col form-group">
      <label htmlFor={idPrefix + 'Minutes'}>Minutes</label>
      <input className="form-control" id={idPrefix + 'Minutes'}
        type="number" step="1" min="0" max="60"
        value={props.minutes}
        onFocus={event => event.target.select()}
        onChange={event => {
          let { value } = event.target;
          if (isNaN(parseInt(value))) value = 0;
          props.updateMinutes(value);
        }} />
    </div>
    <div className="col form-group">
      <label htmlFor={idPrefix + 'Seconds'}>Seconds</label>
      <input className="form-control" id={idPrefix + 'Seconds'}
        type="number" step="1" min="0" max="60"
        value={props.seconds}
        onFocus={event => event.target.select()}
        onChange={event => {
          let { value } = event.target;
          if (isNaN(parseInt(value))) value = 0;
          props.updateSeconds(value);
        }} />
    </div>
  </article>;
}

TimeColumns.defaultProps = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  updateHours: () => { console.log('Missing updateHours()') },
  updateMinutes: () => { console.log('Missing updateMinutes()') },
  updateSeconds: () => { console.log('Missing updateSeconds()') },
}

TimeColumns.propTypes = {
  idPrefix: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  updateHours: PropTypes.func.isRequired,
  updateMinutes: PropTypes.func.isRequired,
  updateSeconds: PropTypes.func.isRequired,
}

export default TimeColumns;