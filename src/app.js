// day
var Day = React.createClass({

  render: function () {
    return (
      <span className="d-day">
        {this.props.day}
      </span>
    )
  }
})

var Days = React.createClass({

  render: function () {
    var days = [],
        date = new Date,
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        today = date.getDate(),
        daysInMonth = new Date(year, month, 0).getDate();

    for(var i = 1; i <= daysInMonth; i++ ) days.push(i)

    var dayNode = days.map(function (day) {
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
var Week = React.createClass({

  render: function () {
    var weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    var weekdayNode = weekdays.map(function (weekday) {
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
var Datepicker = React.createClass({

  render: function () {
    
    return (
      <div className="datepicker">
        <Week />
        <Days />
      </div>
    )
  }
})

React.render(
  <Datepicker />,
  document.getElementById('datepicker')
)
