
<!DOCTYPE HTML>
<html lang="pl">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>Ćw.1</title>
</head>
<style>

body{background-color: #ff3399}
button{width: 130px; height: 40px; background-color: violet; color: aqua; font-size: 14px;}
h2{color: #66ff55;}
#tekst{color: #22ee11;}
</style>
<script>

function ukryj()
{//ukrywa tekst po zał strony
	document.getElementById("tekst").style.visibility="hidden";
	document.getElementById("podpowiedz").style.visibility="hidden";
}

var czas;

function start()
{
	document.getElementById("tekst").style.visibility="visible";
	document.getElementById("podpowiedz").style.visibility="visible";
	czas = new Date();
	document.getElementById("start").onclick="";
}
function klick(x)
{
	x.style.color="green";
	x.style.fontSize="20px";
	x.onclick="";
	//zak gry
	ilosc--;
	if(ilosc<0) ilosc=0;
	if(ilosc==0)
	{
		var czasstop = new Date();
		var twojczas = czasstop-czas.getTime();
		czas.getTime();
		twojczas=twojczas/1000;
		alert("Twój czas to: "+twojczas);
		
	}
}


</script>
<body onload="ukryj()">
	<h2>Wyszukaj na czas w tekście słowa związane z informatyką i kliknij je.</h2>
	<button id="start" onclick="start()">Rozpocznij grę</button><br/><br/>
	<div id="tekst" style>
	<b>Etiam gravida leo massa, at maximus justo vulputate ut. Nulla lobortis justo sit amet sagittis vestibulum. <span onclick="klick(this)">klawiatura</span> Sed quis sem ultricies, ornare lectus elementum, feugiat quam. <span onclick="klick(this)">myszka</span> Donec porta eros a dui pulvinar, in elementum tellus dapibus. Pellentesque quis mattis lacus, ac interdum velit. Vivamus posuere augue non metus <span onclick="klick(this)">procesor</span> bibendum gravida. Suspendisse varius eu ligula id ultricies. In ac ante in enim <span onclick="klick(this)">pendrive</span> viverra pellentesque. Nunc ac vulputate enim, eget elementum ligula. Praesent finibus lectus augue, et congue erat rhoncus eget. Nullam aliquam nulla nec euismod feugiat <span onclick="klick(this)">monitor</span>. Suspendisse rhoncus congue neque, vel ullamcorper risus malesuada quis. Sed ornare velit vulputate, lacinia neque quis, ultrices quam.</b>
	</div><br/><br/>
	<button id="podpowiedz"onclick="podpowiedz()">PODPOWIEDŹ</button>
	<p id="ile"></p>
	<script>
	var ile_slow=document.getElementsByTagName("span").length;
	var ilosc=ile_slow;
	function podpowiedz()
	{
		document.getElementById("ile").innerHTML=("Poszukaj jeszcze "+ilosc+" słów.");
	}
	</script>
</body>

</html>
