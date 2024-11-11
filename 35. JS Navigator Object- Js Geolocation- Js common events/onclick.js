<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>DOM</title>
	<link rel="stylesheet" href="asstes/css/style.css">
</head>
<body id="body">
	<h1 id="h1"></h1>
	<button type="btn" onclick="alert('click button')">Click</button>
	<button type="btn" onclick="somthing()">Another Button</button>
	<button type="btn" onclick="dateNew()">Get date</button>
	<p id="dateNow"></p>

	<scrip>
  function somthing(){
	let h1 = document.getElementById('h1').innerText='Hello world this text';
}

function dateNew() {
	let dateN = document.getElementById('dateNow');
	dateN.innerText = new Date();
}
  </script>
</body>
</html>
