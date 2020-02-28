export function submitBug(data, cb) {
    var request = require('request');

    console.log("submitting request");
    console.log (data);

    const { 
      bugTitle,
      bugDescription,
      bugCreatedDate,
      bugCreatedBy,
      bugAssignedTo,
      bugDueDate,
      bugStatus,
      bugSeverity,
      bugReproducableFrequency
      } = data;

request(
  {
    method:'POST',
    url:'https://bigbug-365ff5.appdrag.site/api/bugs/submitBug', 
    form: {
      "bugTitle" : bugTitle,
      "bugDescription" : bugDescription, 
      "bugCreatedDate" : bugCreatedDate,
      "bugCreatedBy" : bugCreatedBy,
      "bugAssignedTo" : bugAssignedTo,
      "bugDueDate" : bugDueDate,
      "bugStatus" : bugStatus,
      "bugSeverity" : bugSeverity,
      "bugReproducableFrequency" : bugReproducableFrequency
    }
  }, function(err,httpResponse,body){
      let result = JSON.parse(body).affectedRows;
      cb (result);
  }
);
}

async function getAllBugs( cb ) {
  var request = require('request');

request(
  {
    method:'POST',
    url:'https://bigbug-365ff5.appdrag.site/api/bugs/getAllBugs', 
    form: {"AD_PageNbr" : "1","AD_PageSize" : "500"}
  }, function(err,httpResponse,body){
    let result = JSON.parse(body);
      // console.log(result);
      cb (result.Table);
  }
);
}

export { getAllBugs };