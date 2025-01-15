let logout = false;

function logoutBTN() {
    if (logout) {
        locLogout();
    }
    logout = true;
    logoutDelay();
    document.getElementById("log-out").style.backgroundColor = "#ff8383";
}

function logoutDelay() {
    setTimeout(() => {
        logout = false;
        document.getElementById("log-out").style.backgroundColor = "#333333";
    }, 1000);
}

function locLogout() {
    window.location = "index.html";
}

function locTTT() {
    window.location = "apps/index_T.html";
}

function locFB() {
    window.location = "apps/index_FB.html"
}

function locCalculator() {
    window.location = "apps/index_C.html";
}

function locReminder() {
    window.location = "apps/index_N.html"
}

function locGPT() {
    window.location = "apps/index_GPT.html"
}

function locCloud() {
    // window.location = "apps/index_CL.html"
}