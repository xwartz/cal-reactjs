// day
var Day = React.createClass({displayName: "Day",

  _clicked: function () {
    // body...
  },

  render: function () {
    return (
      React.createElement("div", {className: "day", onClick: this._clicked}, 
        this.props.day.getDay()
      )
    )
  }
})