var randomNumber = Math.floor(Math.random() * 101); 
		var numGuesses = 0; 

		function checkGuess() {
			var guess = parseInt(document.getElementById("guess").value); 
			numGuesses++; 

			if (guess == randomNumber) { 
				alert("Gratulacje, zgadłeś liczbę w " + numGuesses + " próbach!"); 
				location.reload(); 
			}
			else if (guess < randomNumber) { 
				alert("Wylosowana liczba jest większa niż " + guess + ". Spróbuj jeszcze raz!"); 
			}
			else { 
				alert("Wylosowana liczba jest mniejsza niż " + guess + ". Spróbuj jeszcze raz!");
			}
		}