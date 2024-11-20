function Passwordsec() {
	alert("Das Passwort lautet 1234.")
}

function checkPassword() {
	var password = document.getElementById('password').value;
	var correctPassword = '1234';
	var essentialLeonS = 'leons';
	var dcLeonM = 'leonm';
		let lmdc = 100;
	var alexRR = 'alex';
	if(password === correctPassword) {
		window.location = "index_2.html";
	} else if (password == essentialLeonS) {
		window.location = "https://cdn.modrinth.com/data/k2ZPuTBm/versions/9LqYZE6i/essential_1-3-5-3_fabric_1-21-1.jar";
	} else if (password == dcLeonM) {
		while (lmdc > 0) {
			const link = document.createElement('a');
			link.href = './res/DaftDeer32.png';
			link.download = 'DaftDeer32.png';
			link.click();
			lmdc--;
		}
	} else if (password == alexRR) {
		window.location = 'https://media.tenor.com/onTlUVMtWy4AAAAM/rickroll-rick.gif';
	} else {
		alert("Falches Passwort!\nBitte versuche es erneut.")
	}
}

function enter(event) {
	if (event.key === 'Enter') {
		checkPassword();
	}
}