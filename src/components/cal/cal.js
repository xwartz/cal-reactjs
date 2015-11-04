'use strict';

let React = require('react');
let Week = require('../week/week');
let Days = require('../day/days');

require('./cal.scss');

// calendar
module.exports = React.createClass({

  render: function () {
    
    return (
      <div className="cal">
        <Week />
        <Days />
      </div>
    )
  }
})