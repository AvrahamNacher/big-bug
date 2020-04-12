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
    bugReproducableFrequency
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
      "bugReproducableFrequency": bugReproducableFrequency
    }
  }, function (err, httpResponse, body) {
    let result = JSON.parse(body).affectedRows;
    cb(result);
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
    let result = JSON.parse(body);
    // console.log(result);
    cb(result.Table);
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
    console.log(body);
    let response = JSON.parse(body);
    cb(response.Table[0]);
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
      "bugReproducableFrequency": bug.bugReproducableFrequency
    }
  }, function (err, httpResponse, body) {
    console.log(body);
    let response = JSON.parse(body);
    cb(response.affectedRows);
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
    console.log(body);
    let response = JSON.parse(body);
    cb(response);
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
    let response = JSON.parse(body);
    cb(response.Table);
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
    const response = JSON.parse(body);
    cb(response.Table);
  });
}

export {
  submitBug,
  getAllBugs,
  getBug,
  updateBug,
  deleteBugs,
  getBugSeverityLevels,
  getBugStatusStages
};
