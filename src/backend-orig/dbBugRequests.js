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