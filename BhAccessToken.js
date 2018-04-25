// import BhAuth
// POST request
const querystring = require('querystring');
const https = require('https');


var dataCenterAuthUrl = 'https://auth.bullhornstaffing.com/oauth/token?grant_type=authorization_code';

function getAccessUrl(dataCenterAuthUrl,auth_code,client_id,client_secret,redirect) {
    var redirect_uri = '';

    if (redirect) {
        redirect_uri = 'redirect_uri=' + redirect;
    }

    var accessUrl = dataCenterAuthUrl +
        '&code=' + auth_code +
        '&client_id=' + client_id +
        '&client_secret=' + client_secret +
        redirect_uri;

    return accessUrl;

}

// Use the accessUrl to retrieve json response with access_token and refresh_token

function getAccessCode(dataCenterAuthUrl,auth_code,client_id,client_secret,redirect){
  accessUrl = getAccessUrl(dataCenterAuthUrl,auth_code,client_id,client_secret,redirect);

  console.log(accessUrl);



}



//Node server for testing

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
