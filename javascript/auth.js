/*const CLIENT_ID = '214036241518-be5frrk0bus3h05oo3dt6b2t1j19onr3.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAJugTkVuqv5BbYEPm9rr7U4mPSA5fvdmI';
const DISCOVERY_DOCS =
    ["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/analytics.readonly";
function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
}
function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
}
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(() => {
        console.log("Google API spreman!");
    });
}
gapi.load("client:auth2", initClient);*/

/*const CLIENT_ID = '214036241518-be5frrk0bus3h05oo3dt6b2t1j19onr3.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAJugTkVuqv5BbYEPm9rr7U4mPSA5fvdmI';
const DISCOVERY_DOCS = ["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/analytics.readonly";
const REDIRECT_URI = 'https://eportfoliomatijasic.netlify.app/html/chart.html';

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
        redirectUri: REDIRECT_URI
    }).then(() => {
        console.log("Google API spreman!");
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        document.getElementById('authorize_button').style.display = 'none';
        document.getElementById('signout_button').style.display = 'inline';
    } else {
        document.getElementById('authorize_button').style.display = 'inline';
        document.getElementById('signout_button').style.display = 'none';
    }
}

function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn().then(() => {
        console.log('Prijava uspješna');
        updateSigninStatus(true);
        fetchAnalyticsData(); // Dohvati podatke odmah nakon prijave
    },
    (error) => {console.error('Greška u prijavi: ', error);}
);
}

function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
        updateSigninStatus(false);
    });
}

function loadGoogleAPI() {
    gapi.load('client:auth2', initClient); // 'client' i 'auth2' su moduli koji će se učitati
}*/

/*const CLIENT_ID = '214036241518-be5frrk0bus3h05oo3dt6b2t1j19onr3.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAJugTkVuqv5BbYEPm9rr7U4mPSA5fvdmI';
const SCOPES = 'https://www.googleapis.com/auth/analytics.readonly';

let tokenClient;
let accessToken = null;

document.getElementById('authorize_button').addEventListener('click', () => handleAuthClick());
document.getElementById('signout_button').addEventListener('click', () => handleSignoutClick());

function initClient() {
  gapi.load('client', () => {
    gapi.client.setApiKey(API_KEY);
    gapi.client.load('https://analyticsdata.googleapis.com/$discovery/rest?version=v1')
      .then(() => console.log('Google API initialized'))
      .catch(err => console.error('Error loading API:', err));
  });

  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: (response) => {
      if (response.error) {
        console.error('Authorization failed', response);
        return;
      }
      accessToken = response.access_token;
      updateSigninStatus(true);
    },
  });
}

function handleAuthClick() {
  if (!accessToken) {
    tokenClient.requestAccessToken();
  }
}

function handleSignoutClick() {
  google.accounts.oauth2.revoke(accessToken, () => {
    console.log('Token revoked.');
    accessToken = null;
    updateSigninStatus(false);
  });
}

function updateSigninStatus(isSignedIn) {
  document.getElementById('authorize_button').style.display = isSignedIn ? 'none' : 'inline';
  document.getElementById('signout_button').style.display = isSignedIn ? 'inline' : 'none';
}*/

const CLIENT_ID = '214036241518-be5frrk0bus3h05oo3dt6b2t1j19onr3.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAJugTkVuqv5BbYEPm9rr7U4mPSA5fvdmI';
const DISCOVERY_DOCS = ["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/analytics.readonly";

function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(() => {
    console.log("Google API spreman!");
    document.getElementById("signinButton").style.display = 'none';
    document.getElementById("signoutButton").style.display = 'inline-block';
    fetchAnalyticsData();
  });
}

gapi.load("client:auth2", initClient);
