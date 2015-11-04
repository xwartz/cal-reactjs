'use strict';

let React = require('react');

require('./week.scss');

// week
module.exports = React.createClass({

  render: function () {
    let weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    let weekdayNode = weekdays.map(function (weekday) {
      return (
        <span className="d-week">
          {weekday}
        </span>
      )
    })

    return (
      <div className="d-weeks">
        {weekdayNode}
      </div>
    )
  }
})
