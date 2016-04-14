var React = require('react');
var helpers = require('../utils/apiHelper');
var Wrapper = require('./Wrapper');
require('../main.css');



var Main = React.createClass({


getInitialState: function(){
    return {
      isLoading: true,
      camperInfo: [],
      timePeriod: "recent",
      recent:  "active",
      alltime: ''
    }
},

componentDidMount: function(){
  helpers.getFreeCodeCampData(this.state.timePeriod)
    .then(function(userData){
      this.setState({
       isLoading: false,
       camperInfo: userData.data,
       timePeriod: this.state.timePeriod,
       recent: this.state.timePeriod == "recent" ? "active": '',
       alltime: this.state.timePeriod == "alltime" ? "active": ''
    })
  }.bind(this)).catch(function(err){console.log(err)})
},

handleClick: function(timePeriod,e){
  console.log("click ", timePeriod)
  helpers.getFreeCodeCampData(timePeriod)
    .then(function(userData){
      this.setState({
       isLoading: false,
       camperInfo: userData.data,
       timePeriod: timePeriod,
       recent: timePeriod == "recent" ? "active": '',
       alltime: timePeriod == "alltime" ? "active": ''
    })
  }.bind(this)).catch(function(err){console.log(err)})

},

render: function() {
    return (
          <Wrapper camperInfo={this.state.camperInfo}>
            <th className={this.state.recent} onClick={this.handleClick.bind(this,"recent")}>Points in past 30 days</th>
            <th className={this.state.alltime} onClick={this.handleClick.bind(this,"alltime")}>All time points</th>
          </Wrapper>
    )
  }


});

module.exports = Main;
