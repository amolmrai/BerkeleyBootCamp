<!-- 1. students will practice keyboard events
2. students will build a counter that goes up when you hit a key
3. students will return a random element from an array
4. students will play rock paper scissors
5. students will build rock paper scissors


make an html file 

put the script tag in

in the script tag, write code so that when the user hits a key, it alerts hi -->

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		function funHitKey(event){
			var key = event.key
			alert("Hi you pressed "+key);
		}
			document.onkeyup = funHitKey;
	</script>

</body>
</html>