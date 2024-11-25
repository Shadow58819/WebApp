let logout = false;

function logoutBTN() {
    if (logout) {
        locLogout();
    }
    logout = true;
    logoutDelay();
}

function logoutDelay() {
    setTimeout(() => {
        logout = false;
    }, 1000);
}

function locLogout() {
    window.location = "index.html";
}

function locTTT() {
    window.location = "index_T.html";
}

function locCalculator() {
    window.location = "index_C.html";
}

function locReminder() {
    window.location = "index_N.html"
}

function locGPT() {
    window.location = "index_GPT.html"
}