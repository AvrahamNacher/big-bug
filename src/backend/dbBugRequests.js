export function submitBug(data, callBackResponse) {
    var request = require('request');

request(
  {
    method:'POST',
    url:'https://bigbug-365ff5.appdrag.site/api/submitBug', 
    form: {"bugTitle" : "","bugDescription" : "","bugCreatedDate" : "","bugCreatedBy" : "","bugAssignedTo" : "","bugDueDate" : "","bugStatus" : "","bugSeverity" : "","bugReproducableFrequency" : ""}
  }, function(err,httpResponse,body){
      console.log(body);
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