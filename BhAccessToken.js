// import BhAuth
// POST request

var dataCenterAuthUrl = 'https://auth.bullhornstaffing.com/oauth/authorize';

function getAccessUrl(authUrl,client_id,client_secret,redirect) {
    var redirect_uri = '';

    if (redirect) {
        redirect_uri = 'redirect_uri=' + redirect;
    }

    var accessUrl = dataCenterUrl +
        '&code=' + auth_code +
        '&client_id=' + client_id +
        '&client_secret=' + client_secret +
        '&redirect_uri=' + redirect_uri

    return accessUrl;

}

// This generates an access_token + a refresh_token
