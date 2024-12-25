function Passwordsec() {
	alert("Das Passwort lautet 1234.")
}

function checkPassword() {
	var password = document.getElementById('password').value;
	var correctPassword = '1234';
	var hassanHuhn = 'hassan';
	var LeonS = 'leons';
	var dcLeonM = 'leonm';
		let lmdc = 1;
	var alexRR = 'alex';
	if(password === correctPassword) {
		window.location = "index_2.html";
	} else if (password == LeonS) {
		alert("Aktion leider nicht verfügbear,\nVersuche es später nochmal.")
		// window.location = "";
	} else if (password == dcLeonM) {
		while (lmdc > 0) {
			const link = document.createElement('a');
			link.href = './res/img/DaftDeer32.png';
			link.download = 'DaftDeer32.png';
			link.click();
			lmdc--;
		}
	} else if (password == alexRR) {
		window.location = './res/img/AlexRR.gif';
	} else if (password == hassanHuhn) {
		window.location = './res/img/Chicken.gif';
	} else {
		alert("Falches Passwort!\nBitte versuche es erneut.")
	}
}

function enter(event) {
	if (event.key === 'Enter') {
		checkPassword();
	}
}