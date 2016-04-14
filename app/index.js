var React = require('react');
var ReactDOM = require('react-dom');
require('./main.css');
//var routes = require('./config/routes');
var Main = require('./components/Main.js');

function Container(){

  return (
    <div>
      <div className="banner" >
        <a href="http://www.freecodecamp.com">
          <img className="logo" src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"/>
        </a>
      </div>
      <Main/>
    </div>
  )
}


ReactDOM.render(<Container/>, document.getElementById('app'));
