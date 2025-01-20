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

const CLIENT_ID = '214036241518-be5frrk0bus3h05oo3dt6b2t1j19onr3.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAJugTkVuqv5BbYEPm9rr7U4mPSA5fvdmI';
const DISCOVERY_DOCS = ["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/analytics.readonly";

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
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
        updateSigninStatus(true);
        fetchAnalyticsData(); // Dohvati podatke odmah nakon prijave
    });
}

function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
        updateSigninStatus(false);
    });
}

gapi.load('client:auth2', initClient);
