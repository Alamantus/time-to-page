import React from 'react';
import PropTypes from 'prop-types';

const TimeColumns = (props) => {
  const idPrefix = props.idPrefix;
  const useHours = typeof props.hours !== 'undefined';

  const updateHours = value => {
    if (isNaN(value)) value = 0;
    props.updateHours(value);
  }

  const updateMinutes = value => {
    if (isNaN(value)) value = 0;
    if (value < 0) {
      if (useHours && props.hours > 0) {
        updateHours(props.hours - 1);
        value = 59;
      } else {
        value = 0;
      }
    } else if (value > 59) {
      if (useHours) {
        updateHours(props.hours + 1);
        value = 0;
      } else {
        value = 59
      }
    }
    props.updateMinutes(value);
  }

  const updateSeconds = value => {
    if (isNaN(value)) value = 0;
    if (value < 0) {
      if (useHours || props.minutes > 0) {
        updateMinutes(props.minutes - 1);
        value = 59;
      } else {
        value = 0;
      }
    } else if (value > 59) {
      if (useHours || props.minutes < 59) {
        updateMinutes(props.minutes + 1);
        value = 0;
      } else {
        value = 59
      }
    }
    props.updateSeconds(value);
  }

  return <article className="row">
    {useHours && (
      <div className="col form-group">
        <label htmlFor={idPrefix + 'Hours'}>Hours</label>
        <input className="form-control" id={idPrefix + 'Hours'}
          type="number" step="1" min="0"
          value={props.hours}
          onFocus={event => event.target.select()}
          onChange={event => updateHours(parseInt(event.target.value))}
        />
      </div>
    )}
    <div className="col form-group">
      <label htmlFor={idPrefix + 'Minutes'}>Minutes</label>
      <input className="form-control" id={idPrefix + 'Minutes'}
        type="number" step="1" min="-1" max="60"
        value={props.minutes}
        onFocus={event => event.target.select()}
        onChange={event => updateMinutes(parseInt(event.target.value))}
      />
    </div>
    <div className="col form-group">
      <label htmlFor={idPrefix + 'Seconds'}>Seconds</label>
      <input className="form-control" id={idPrefix + 'Seconds'}
        type="number" step="1" min="-1" max="60"
        value={props.seconds}
        onFocus={event => event.target.select()}
        onChange={event => updateSeconds(parseInt(event.target.value))}
      />
    </div>
  </article>;
}

TimeColumns.defaultProps = {
  minutes: 0,
  seconds: 0,
  updateMinutes: () => { console.error('Missing updateMinutes()') },
  updateSeconds: () => { console.error('Missing updateSeconds()') },
}

TimeColumns.propTypes = {
  idPrefix: PropTypes.string.isRequired,
  hours: PropTypes.number,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  updateHours: PropTypes.func,
  updateMinutes: PropTypes.func.isRequired,
  updateSeconds: PropTypes.func.isRequired,
}

export default TimeColumns;