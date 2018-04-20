var pragrah = document.getElementById('paragraph');
	var pragrahNew = document.getElementById('newParagraph');
	var inputs = document.querySelectorAll("input[type = 'number']");
	var addArr = document.getElementById('addarray');
	var sortArr = document.getElementById('sortArr');
	var a = [];
	addArr.onclick = function(){
		for (var count = 0; count < inputs.length; count++) {
			a.push(parseInt(inputs[count].value));
			console.log(a)
		}
		pragrah.innerHTML = "массив" + a;
	}
	var k;
sortArr.onclick =function(){
	for (var m = 0; m < a.length; m++) {
	for (var i = 0; i < a.length-1; i++) {
		if (a[i] > a[i+1]) {
			k = a[i];
			a[i] = a[i+1];
			a[i+1]=k;
		}
	}
	}
	pragrahNew.innerHTML="Готово" + a;
}