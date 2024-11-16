function Passwordsec() {
	alert("Das Passwort lautet 1234.")
}

function checkPassword() {
	var password = document.getElementById('password').value;
	var correctPassword = '1234';
	if (password === correctPassword) {
		window.location = "index_2.html";
	}
	else {
		alert("Falches Passwort!\nBitte versuche es erneut.")
	}
}

function enter(event) {
	if (event.key === 'Enter') {
		checkPassword();
	}
}