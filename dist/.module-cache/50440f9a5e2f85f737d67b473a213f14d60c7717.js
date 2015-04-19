// day
var Day = React.createClass({displayName: "Day",

  _clicked: function () {
    // body...
  },

  render: function () {
    return (
      React.createElement("span", {className: "k-day", onClick: this._clicked}, 
        this.props.day.getDay()
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
        React.createElement("span", {className: "k-week"}, 
          weekday
        )
      )
    })

    return (
      React.createElement("div", {className: "k-weeks"}, 
        weekdayNode
      )
    )
  }
})