		

		var computerGuess;
		var guessesLeft = 10;
		var guess;
		var wins = 0;
		var losses = 0;
		var guessesSoFar = [ ];

		//intial random letter is generated
		randomLetter();

		document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

		//when a letter key is pressed it is assigned to the guess variable then if statements decide if it is the same letter that the computer generated. 
		document.onkeyup = function() {
			guess = event.key;
			guessesSoFar.push(" " + guess);
			console.log(guess);
			console.log(computerGuess);
			console.log(guessesLeft);

			if (guess === computerGuess) {
			console.log("match");
			alert ("You Won!");
			wins++;
			document.querySelector("#wins").innerHTML = "Wins: " + wins;
			reset();
			}

			else {
				console.log("no match");
				guessesLeft--;
				document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

				if (guessesLeft === 0) {
					reset();
					alert("You Lost!")
					losses++;
					document.querySelector("#losses").innerHTML = "Losses: " + losses;
				}
	
			}

			document.querySelector("#guessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar;
		};

		//resets everything except the wins and losses values.
		function reset() {
			randomLetter();
			guessesLeft = 10;
			guessesSoFar = [ ];
			guessesLeft = 10;
			document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
		};

		//generates a random letter
		function randomLetter() {
			computerGuess = String.fromCharCode(
		    Math.floor(Math.random() * 26) + 97
			);
		};