import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  DEFAULT,
  SELECTED,
  DISABLED,
} from '../constants/timeslot.js';

export default class Timeslot extends React.Component {
  render() {
    const {
      description,
      status,
      amount,
      customClassNames,
    } = this.props;

    const timeslotClassNames = classnames({
      'tsc-timeslot': true,
      'tsc-timeslot--selected': status == SELECTED,
      'tsc-timeslot--disabled': status == DISABLED,
    }, customClassNames);

    return (
      <div className = { timeslotClassNames } onClick = { this._onTimeslotClick.bind(this) }>
        <p className = "tsc-timeslotText">{ description }</p>
        <p className = "tsc-timeslotAvailability">{amount}</p>
      </div>
    );
  }

  _onTimeslotClick(event) {
    event.preventDefault();
    const {
      status,
      onClick,
    } = this.props;

    if (status !== DISABLED) {
      onClick();
    }
  }
}

Timeslot.defaultProps = {
  status: DEFAULT,
};

/**
 * @type {String} description: The contents to be displayed by the timeslot. Default format will resume to something similar to "7:00 PM - 8:00 PM"
 * @type {String} status: allows the div to change format based on the current status of the element (disabled, selected, default)
 * @type (Function) onClick: Function to be excecuted when clicked.
 */
Timeslot.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    DEFAULT,
    SELECTED,
    DISABLED,
  ]),
  amount: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  customClassNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
