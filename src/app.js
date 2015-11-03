'use strict';

let React = require('react')
let ReactDom = require('react-dom')

// day
let Day = React.createClass({

  render: function () {
    return (
      <span className="d-day">
        {this.props.day}
      </span>
    )
  }
})

let Days = React.createClass({

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

// week
let Week = React.createClass({

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

// calendar
let Datepicker = React.createClass({

  render: function () {
    
    return (
      <div className="datepicker">
        <Week />
        <Days />
      </div>
    )
  }
})

ReactDom.render(
  <Datepicker />,
  document.getElementById('datepicker')
)
