var React = require('react');
require('../main.css');


function Users(props){
  console.log(props)

 return (
   <tbody>
     {props.users.map(function(user,index){
       return  (
        <tr key={index+1} className="text-center">
          <td>{index+1}</td>
          <td>
            <img className="thumbnail" src={user.img}>
            </img>
            <p>
              {user.username}
            </p>
          </td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
    ) })}

  </tbody>

 )

}

module.exports = Users;
