async function checkLoginInfo(userData, callBackResponse) {
    var request = require('request');
    const { email = '', pwd = '' } = userData;
    console.log (`email ${email} ${pwd}`);

        request(
            {
                method: 'POST',
                url: 'https://bigbug-365ff5.appdrag.site/api/users/login',
                form: { "email": email, "pwd": pwd, "AD_PageNbr": "1", "AD_PageSize": "500" }
            }, function (err, httpResponse, body) {
                let result = JSON.parse(body);
                if (result.Table.length !== 0) {
                    console.log("Welcome " + result.Table[0].firstName);
                    callBackResponse (result.Table[0]);
                } else {
                    console.log("No data returned");
                    callBackResponse (-1);
                }
            }
        );
}

async function register(userData, callBackResponse) {
    var request = require('request');

request(
  {
    method:'POST',
    url:'https://bigbug-365ff5.appdrag.site/api/users/register', 
    form: {"firstName" : userData.firstName,"lastName" : userData.lastName,"email" : userData.email,"pwd" : userData.pwd,"phone" : userData.phone}
  }, function(err,httpResponse,body){
      console.log(body);
      let result = JSON.parse(body);
      callBackResponse (result.affectedRows);
  }
);
}

export { 
    checkLoginInfo,
    register
 }