
var correctPassword = '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4';
var downloadApp = '9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0';
	let dApp = 1;
var hassanHuhn = '16771578794e44505c9da8b3c2d5b4062bf0047580a1088d2b08a043ce5d2edc';
var LeonS = '1d107d2afdb7f5a6c10b550255d8b00aa9e023977c91f8f900a346ef162f050c';
var dcLeonM = '88f42e16016741263defba64ae6722782855c751ae1fa5674dbd0410fd4b75bf';
	let lmdc = 1;
var alexRR = '4135aa9dc1b842a653dea846903ddb95bfb8c5a10c504a7fa16e10bc31d1fdf0';

async function hashPassword(password) {
	const encoder = new TextEncoder();
	const data = encoder.encode(password);
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
async function checkPassword() {
	const input = document.getElementById("password").value;
	const hashedInput = await hashPassword(input);
	const result = document.getElementById("result");
	if(hashedInput === correctPassword) {
		window.location = "./index_2.html";
	} else if (hashedInput == downloadApp) {
		while (dApp > 0) {
			const link = document.createElement('a')
			link.href = './res/MuazApp.exe';
			link.download = 'MuazApp.exe';
			link.click();
			dApp--;
		}
	} else if (hashedInput == LeonS) {
		alert("Aktion leider nicht verfügbear,\nVersuche es später nochmal.")
		// window.location = "";
	} else if (hashedInput == dcLeonM) {
		while (lmdc > 0) {
			const link = document.createElement('a');
			link.href = './res/img/DaftDeer32.png';
			link.download = 'DaftDeer32.png';
			link.click();
			lmdc--;
		}
	} else if (hashedInput == alexRR) {
		window.location = './res/img/AlexRR.gif';
	} else if (hashedInput == hassanHuhn) {
		window.location = './res/img/Chicken.gif';
	} else {
		document.getElementById("password").style.backgroundColor = "#ff8383";
		setTimeout(() => {
			document.getElementById("password").style.backgroundColor = "#383838";
			console.log("Wrong password");
		}, 200);
	}
}

function enter(event) {
	if (event.key === 'Enter') {
		checkPassword();
	}
}

let secret = 0;

function secretCount() {
	secret = secret + 1;
	console.log(secret)
}

function secretEnter() {
	if (secret >= 3) {
		console.log("Hello world!")
	} else {
		console.log(":(")
	}
}