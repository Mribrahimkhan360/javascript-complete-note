const findElement = document.getElementsByTagName('li');

//const findEl = document.querySelector('#dom1').innerText = "Hello javaScript";

const findEl = document.querySelectorAll('#dom1');
const findEl2 = document.querySelector('#dom2').innerHTML = "<ul><li>1</li><li>2</li></ul>";
for (var i = 0; i <findEl.length; i++) {
    console.log(findEl[i]);
}
console.log(findEl2);

let res = document.getElementById('dom1');
console.log(res);
for (var i = 0; i < findElement.length; i++) {
	console.log(findElement[i].innerText = '999');
}
