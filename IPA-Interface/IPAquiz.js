var IPAQuiz = (function() {

	var output ={};
	
	// Create list of characters and choose one randomly
	var chars = [];
	for(var key in charsToCodes){
		if(charsToCodes.hasOwnProperty(key)){
			chars.push(key);
		}
	}

	var quizCharacter = chars[Math.floor(Math.random()*chars.length)];

	var checkAnswer = function() {
		
		var answer = $('.wordInput').val();

		if (answer == '') {

			$('.feedback').html('<div class="alert alert-error">Please enter a word.</div>')
			
		} else {
			
			 $.ajax({
	            async: true,
	            url: "http://localhost:8080/",
	            data: { word: answer }
	   		}).done(function(msg) {
		    	var parser = new DOMParser();
		    	var xmlDoc = parser.parseFromString(msg, "text/xml");

		  		// access pronunciation and check if quizCharacter is in it
		    	var pro = xmlDoc.getElementsByTagName("pr")[0].childNodes[0].nodeValue;

		   		if (pro.indexOf(quizCharacter) !== -1) {
		   			$('.feedback').html('<div class="alert alert-success">Yes! The word '+answer+' contains this sound.</div>')
		   		} else {
		   			$('.feedback').html('<div class="alert alert-error">Sorry, the word '+answer+' does not contain this sound.</div>')
		   		}

		    });
		}

	}

	var setup = function(div) {

		var header = $('<legend class = "IPAHeaderText">IPA Quiz</legend>');
		var character = $('<div><h3 class="sound">Sound: '+charsToCodes[quizCharacter]+'</h3></div>');
		var order = "document.getElementById('charSound').play()"
		var playCharacter = $('<div class="play"><audio id="charSound" src='+charsToSounds[quizCharacter]+'></audio><div><button id = "button" class= "btn btn-info" onclick='+order+'>Play Sound</button></div></div>')
		var wordBox = $('<input class = "wordInput" placeholder = "Input word here"></input>');
		var button = $('<button id = "submit-btn" class = "btn btn-success">Submit</button>');
		var feedback = $('<div class="feedback"></div>')
		var newChar = $('<button id = "new" class = "btn btn-info">New Sound</button>')

		character.append(newChar)

		div.append(header, character, playCharacter, wordBox, button, feedback);

		$('#new').on('click', function() {
			quizCharacter = chars[Math.floor(Math.random()*chars.length)];
			$('.sound').html("Sound: "+charsToCodes[quizCharacter])
			$('.play').html('<audio id="charSound" src='+charsToSounds[quizCharacter]+'></audio><div><button id = "button" class= "btn btn-info" onclick='+order+'>Play Sound</button></div>')
		})

		$('#submit-btn').on('click', checkAnswer);
		$('.wordInput').keydown(function(event){
			if(event.keyCode == 13) {
				$('#submit-btn').click();
			}
		})

	}

	output.setup = setup;
	return output
})();

$(document).ready(function() {
	$(".IPAQuiz").each(function() {
		IPAQuiz.setup($(this));
	});
});

