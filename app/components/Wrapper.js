var React = require('react');
var Users = require('./Users');
require('../main.css');




function Wrapper(props){

return (

<div>
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
      <table className="table table-bordered table-striped">
        <caption className="text-center">Leaderboard</caption>
       <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            {props.children}
        </tr>
    </thead>
      <Users  users={props.camperInfo}/>
  </table>
</div>
<div className="col-sm-1"></div>
</div>


)

}

module.exports = Wrapper;
