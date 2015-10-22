var generated_numbers = [];

const tablehead = '<div id="result-header" class="result-row"><div class="col1 result-head">Nr</div><div class="col2 result-head">Guess</div><div class="col3 result-head">Result</div></div>';
var resulthtml = tablehead;
var guessnum = 0;

function getRandom() {
  return Math.floor(Math.random() * 10);
}

function elem(name) {
	return document.getElementById(name);
}

function generate() {
	for (var a = 0; a < 4; a++) {
		num = getRandom();
		while (generated_numbers.indexOf(num) != -1) {
			num = getRandom();
		}
		generated_numbers[a] = num;
	}
}

function newGame() {
	generate();
	resulthtml = tablehead;
	guessnum = 0;
	elem("guess").value = '';
	elem("guess").disabled = false;
	elem("btn-check").disabled = false;
	elem("result").innerHTML = '';
	elem("grats").innerHTML = '';
	elem("debug").innerHTML = '';
}

function showArray() {
	elem("debug").innerHTML = generated_numbers.toString();
}

function check() {
	var correct = "";
	var missed = "";
	var nonexisting = "";
	var guess = elem("guess").value;
	var hits = 0;
	for (var a = 0; a < 4; a++) {
		var pos = generated_numbers.indexOf(parseInt(guess[a]));
		if (pos === -1) {
			nonexisting += '<div class="td-cell g-wrong">-</div>';
		} else if (pos === a) {
			correct += '<div class="td-cell g-correct">O</div>';
			hits++;
		} else {
			missed += '<div class="td-cell g-miss">o</div>';
		}
	}
	var guessresult = correct + missed + nonexisting;
	guessnum += 1;
	resulthtml += '<div class="result-row">';
	resulthtml += '<div class="col1 td-num">' + guessnum + '.</div>';
	resulthtml += '<div class="col2 td-guess">' + guess + '</div>';
	resulthtml += '<div class="col3 td-result">' + guessresult + '</div>';
	resulthtml += '</div>';
	elem("result").innerHTML = resulthtml;
	checkResult(hits);
	elem("guess").select();
}

function checkResult(res) {
	if (res === 4) {
		elem("guess").disabled = true;
		elem("btn-check").disabled = true;
		elem("grats").innerHTML += "Congratulations!";
	}
}

generate();

document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById('guess').onkeypress=function(e){
		if(e.keyCode==13){
		    document.getElementById('btn-check').click();
		}
	}
});


