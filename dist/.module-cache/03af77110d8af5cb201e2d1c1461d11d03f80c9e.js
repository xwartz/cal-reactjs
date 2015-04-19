// day
var Day = React.createClass({displayName: "Day",

  render: function () {
    return (
      React.createElement("span", {className: "d-day"}, 
        this.props.day
      )
    )
  }
})

var Days = React.createClass({displayName: "Days",

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
        React.createElement(Day, {day: day}
        )
      )
    })

  return (
    React.createElement("div", {className: "d-days"}, 
      dayNode
    )
  )

  }
})

// week
var Week = React.createClass({displayName: "Week",

  render: function () {
    var weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    var weekdayNode = weekdays.map(function (weekday) {
      return (
        React.createElement("span", {className: "d-week"}, 
          weekday
        )
      )
    })

    return (
      React.createElement("div", {className: "d-weeks"}, 
        weekdayNode
      )
    )
  }
})

// calendar
var Datepicker = React.createClass({displayName: "Datepicker",

  render: function () {
    
    return (
      React.createElement("div", {className: "datepicker"}, 
        React.createElement(Week, null), 
        React.createElement(Days, null)
      )
    )
  }
})

React.render(
  React.createElement(Datepicker, null),
  document.getElementById('datepicker')
)
