var input = document.querySelector('input'); 
var button =document.querySelector('button');
var section = document.querySelector('section');
var div = document.createElement('div');

button.addEventListener('click', toSum);

function toSum() {
	var arr = input.value.split(',');
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		var a = Number(arr[i]);
		if (arr.length !== 20 || typeof a !== 'number') {
			sum = 'Please, enter only 20 numbers';
		} else {
			sum += a;
		}
	}
	div.innerHTML = "<p>" + sum + "</p>";
}

section.appendChild(div);







