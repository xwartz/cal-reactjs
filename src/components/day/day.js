'use strict';

let React = require('react');

// day
module.exports = React.createClass({

  render: function () {
    return (
      <span className="d-day">
        {this.props.day}
      </span>
    )
  }
})