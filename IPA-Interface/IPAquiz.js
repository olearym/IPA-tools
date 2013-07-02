var IPAQuiz = (function() {

	var output ={};

	var server = "http://ipaserver.herokuapp.com/"

	// quizCharacter is a randomly selected character from the English IPA. The user will give a 
	// word that they think contains this symbol.
	var quizCharacter = EnglishIPA[Math.floor(Math.random()*EnglishIPA.length)];

	// checkAnswer checks with the Merriam-Webster Learner's Dictionary API to see if the user's
	// input contains the quizCharacter, then fills the feedback div with a message displaying
	// whether or not they are correct.
	var checkAnswer = function() {
		
		var answer = $('.wordInput').val();

		if (answer == '') {

			$('.feedback').html('<div class="alert alert-error">Please enter a word.</div>')
			
		} else {
			
			 $.ajax({
	            async: true,
	            url: server,
	            data: { word: answer }
	   		}).done(function(msg) {
		    	var parser = new DOMParser();
		    	var xmlDoc = parser.parseFromString(msg, "text/xml");

		  		// access pronunciation and check if quizCharacter is in it
		    	var pro = xmlDoc.getElementsByTagName("pr")[0].childNodes[0].nodeValue;
		    	if (pro.indexOf(':') !== -1) {
		    		pro = pro.replace(':', 'ː');
		    	}

		    	// check if the input word contains the quizCharacter
		   		if (pro.indexOf(quizCharacter) !== -1) {
		   			$('.feedback').html('<div class="alert alert-success">Yes! The word '+answer+' contains this sound.</div>')
		   		} else {
		   			$('.feedback').html('<div class="alert alert-error">Sorry, the word '+answer+' does not contain this sound.</div>')
		   		}

		    });
		}

	}


	// sets up the html layout of the quiz module within the specified div and attaches click handlers to the buttons.
	var setup = function(div) {

		var header = $('<legend class = "IPAHeaderText">IPA Quiz</legend>');
		var character = $('<div><h3 class="sound">Sound: '+quizCharacter+'</h3></div>');
		var order = "document.getElementById('charSound').play()"
		var playCharacter = $('<div class="play"><audio id="charSound" src='+charsToSounds[quizCharacter]+'></audio><div><button id = "button" class= "btn btn-info" onclick='+order+'>Play Sound</button></div></div>')
		var wordBox = $('<input class = "wordInput" placeholder = "Input word here"></input>');
		var button = $('<button id = "submit-btn" class = "btn btn-success">Submit</button>');
		var feedback = $('<div class="feedback"></div>')
		var newChar = $('<button id = "new" class = "btn btn-info">New Sound</button>')

		character.append(newChar)

		div.append(header, character, playCharacter, wordBox, button, feedback);


		// The newChar button resets the quizCharacter when clicked.
		$('#new').on('click', function() {
			quizCharacter = EnglishIPA[Math.floor(Math.random()*EnglishIPA.length)];
			$('.sound').html("Sound: "+quizCharacter)
			$('.play').html('<audio id="charSound" src='+charsToSounds[quizCharacter]+'></audio><div><button id = "button" class= "btn btn-info" onclick='+order+'>Play Sound</button></div>')
		})

		// The submit button calls checkAnswer when clicked.
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

