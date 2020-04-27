/********************************************************/
/********	ARCHER DFE APPROVED LIBRARIES
/********************************************************/
const request = require('request');
const xpath = require('xpath');
const xmldom = require('xmldom');
const xml2js = require('xml2js');

const makeRequest = async (_uri, _method, _headers, _body) => {

  request({
    uri: _uri,
    method: _method,
    headers: _headers,
    body: JSON.stringify(_body)
  }, (error, response, body) => {
    console.log(JSON.parse(body)["RequestedObject"]["SessionToken"]);
  });

}

//DO THE WORK
const baseUri = "" // base URI for archer, ex. http://company-website.com/RSAarcher/
const authEndpoint = "api/core/security/login"
const method = "POST";
const headers = {
  'Accept': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Content-Type': 'application/json'
};
const body = {
  "InstanceName": "", // instance name here
  "Username": "", // username here
  "Password": "", // password for user here
  "UserDomain": "" // user domain here, not required
};

makeRequest(baseUri + authEndpoint, method, headers, body);