function submitBug(data, cb) {
  var request = require('request');

  console.log("submitting request");
  console.log(data);

  const {
    bugTitle,
    bugDescription,
    bugCreatedDate,
    bugCreatedBy,
    bugAssignedTo,
    bugDueDate,
    bugStatus,
    bugSeverity,
    bugReproducibility
  } = data;

  request({
    method: 'POST',
    url: 'https://bigbug-365ff5.appdrag.site/api/bugs/submitBug',
    form: {
      "bugTitle": bugTitle,
      "bugDescription": bugDescription,
      "bugCreatedDate": bugCreatedDate,
      "bugCreatedBy": bugCreatedBy,
      "bugAssignedTo": bugAssignedTo,
      "bugDueDate": bugDueDate,
      "bugStatus": bugStatus,
      "bugSeverity": bugSeverity,
      "bugReproducibility": bugReproducibility
    }
  }, function (err, httpResponse, body) {
    if (!err) {
      let result = JSON.parse(body).affectedRows;
      cb(result);
    } else {
      console.log("submitBug error ", err);
      cb(-1);
    }
  });
}

async function getAllBugs(cb) {
  var request = require('request');

  request({
    method: 'POST',
    url: 'https://bigbug-365ff5.appdrag.site/api/bugs/getAllBugs',
    form: {
      "AD_PageNbr": "1",
      "AD_PageSize": "500"
    }
  }, function (err, httpResponse, body) {
    if (!err) {
      let result = JSON.parse(body);
      // console.log(result);
      cb(result.Table);
    } else {
      console.log("getAllBugs error ", err);
      cb(-1);
    }
  });
}

function getBug(id, cb) {
  var request = require('request');

  request({
    method: 'POST',
    url: 'https://bigbug-365ff5.appdrag.site/api/bugs/getBug',
    form: {
      "id": id,
      "AD_PageNbr": "1",
      "AD_PageSize": "500"
    }
  }, function (err, httpResponse, body) {
    // console.log(body);
    if (!err) {
      let response = JSON.parse(body);
      cb(response.Table[0]);
    } else {
      console.log("getBug error ", err);
      cb(-1);
    }
  });
}

function updateBug(bug, cb) {
  var request = require('request');
  request({
    method: 'POST',
    url: 'https://bigbug-365ff5.appdrag.site/api/bugs/updateBug',
    form: {
      "id": bug.id,
      "bugTitle": bug.bugTitle,
      "bugDescription": bug.bugDescription,
      "bugCreatedDate": bug.bugCreatedDate,
      "bugCreatedBy": bug.bugCreatedBy,
      "bugAssignedTo": bug.bugAssignedTo,
      "bugDueDate": bug.bugDueDate,
      "bugStatus": bug.bugStatus,
      "bugSeverity": bug.bugSeverity,
      "bugReproducibility": bug.bugReproducibility
    }
  }, function (err, httpResponse, body) {
    // console.log("update request", body);
    if (!err) {
      let response = JSON.parse(body);
      cb(response.affectedRows);
    }  else {
      console.log ("updateBug error ", err);
      cb(-1);
    }
  });
}

function deleteBugs(idList, cb) {
  var request = require('request');

  request({
    method: 'POST',
    url: 'https://bigbug-365ff5.appdrag.site/api/bugs/deleteBugs',
    form: {
      "idList": idList // "(id = 5) OR (id = 2)"
    }
  }, function (err, httpResponse, body) {
    // console.log(body);
    if (!err) {
      let response = JSON.parse(body);
      cb(response);
    } else {
      console.log ("deleteBugs error ", err);
      cb (-1);
    }
  });
}

async function getBugSeverityLevels(cb) {
  var request = require('request');

  request({
    method: 'POST',
    url: 'https://bigbug-365ff5.appdrag.site/api/bugs/getBugSeverityLevels',
    form: {
      "AD_PageNbr": "1",
      "AD_PageSize": "500"
    }
  }, function (err, httpResponse, body) {
    if (!err) {
      let response = JSON.parse(body);
      cb(response.Table);
    } else {
      console.log("getBugSeverityLevels error: ", err);
      cb(-1);
    }
  });
}

function getBugStatusStages(cb) {
  var request = require('request');

  request({
    method: 'POST',
    url: 'https://bigbug-365ff5.appdrag.site/api/bugs/getBugStatusStages',
    form: {
      "AD_PageNbr": "1",
      "AD_PageSize": "500"
    }
  }, function (err, httpResponse, body) {
    if (!err) {
      const response = JSON.parse(body);
      cb(response.Table);
    } else {
      console.log("getBugStatusStages error ", err);
      cb(-1);
    }
  });
}

function getBugReproducibilityOptions(cb) {
  var request = require('request');

  request({
    method: 'POST',
    url: 'https://bigbug-365ff5.appdrag.site/api/bugs/getBugReproducibilityOptions',
    form: {
      "AD_PageNbr": "1",
      "AD_PageSize": "500"
    }
  }, function (err, httpResponse, body) {
    if (!err) {
      const response = JSON.parse(body);
      cb(response.Table);
    } else {
      console.log("getBugReproducibilityOptions error ", err);
      cb(-1);
    }
  });
}

export {
  submitBug,
  getAllBugs,
  getBug,
  updateBug,
  deleteBugs,
  getBugSeverityLevels,
  getBugStatusStages,
  getBugReproducibilityOptions
};
