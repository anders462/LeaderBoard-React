var axios = require('axios');


var helpers = {


//time = "recent" => 30days time="alltime" => alltime
getFreeCodeCampData: function(timePeriod){
    return axios.get("http://fcctop100.herokuapp.com/api/fccusers/top/" + timePeriod);
}


}

module.exports = helpers;
