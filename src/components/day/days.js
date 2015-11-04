'use strict';

let React = require('react');
let Day = require('./day');

require('./day.scss');

module.exports = React.createClass({

  render: function () {
    let days = [],
        date = new Date,
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        today = date.getDate(),
        daysInMonth = new Date(year, month, 0).getDate();

    for(let i = 1; i <= daysInMonth; i++ ) days.push(i)

    let dayNode = days.map(function (day) {
      return (
        <Day day={day}>
        </Day>
      )
    })

  return (
    <div className="d-days">
      {dayNode}
    </div>
  )

  }
})