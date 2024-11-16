let logout = false;

function myfunc() {
    if (logout) {
        myfunc0();
    }
    logout = true;
    myfuncDelay();
}

function myfuncDelay() {
    setTimeout(() => {
        logout = false;
    }, 1000);
}

function myfunc0() {
    window.location = "index.html";
}

function myfunc1() {
    window.location = "index_T.html";
}

function myfunc2() {
    window.location = "index_C.html";
}

function myfunc3() {
    window.location = "index_N.html"
}