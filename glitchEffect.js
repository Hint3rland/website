var divs = document.getElementsByTagName("div");
var letterID = 0

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

characterSelect = ".,Â·â€¢â”€~+:;=*Ï€â€™â€œâ€!#$@aÃ bcdefghijklmnoÃ²pqrstuÃ¼vwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%()".split("")
var intervalDic = {}

function randomLetters(element) {
	var runsLeft = getRandomInt(10, 20)
	var prevLetter = element.innerText

	if(!intervalDic.hasOwnProperty(element.id)) {
		intervalDic[element.id] = setInterval(function() {
			runsLeft -= 1
			if(runsLeft <= 0) {
				clearInterval(intervalDic[element.id])
				delete intervalDic[element.id]
				element.innerText = prevLetter
			}
			else {
				element.innerText = characterSelect[getRandomInt(0, characterSelect.length)]
			}
		}, getRandomInt(100, 140));
	}
}

async function randomizeAll() {
	var spans = document.getElementsByTagName("span");

	for(var i = 0; i < spans.length; i++){
		randomLetters(spans[i])
	}
}

for(var i = 0; i < divs.length; i++){
	newString = ""
	for(var j = 0; j < divs[i].innerText.length; j++) {
		newString += "<span onmouseover=\"randomLetters(event.toElement)\" id=\"" + letterID + "\">" + divs[i].innerText[j] + "</span>";
		letterID += 1
	}
	divs[i].innerHTML = newString
}

randomizeAll()