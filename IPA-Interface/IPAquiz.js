var IPAQuiz = (function() {
	var charsToCodes = {"æ": "&#230", "ç": "&#231", "ð": "&#240", "ø": "&#248", "ħ": "&#295", "ŋ": "&#331", "œ": "&#339", "ǀ": "&#448", "ǁ": "&#449", "ǂ": "&#450", "ǃ": "&#451", "ɐ": "&#592", "ɑ": "&#593", "ɒ": "&#594", "ɓ": "&#595", "ɔ": "&#596", "ɕ": "&#597", "ɖ": "&#598", "ɗ": "&#599", "ɘ": "&#600", "ə": "&#601", "ɚ": "&#602", "ɛ": "&#603", "ɜ": "&#604", "ɝ": "&#605", "ɞ": "&#606", "ɟ": "&#607", "ɠ": "&#608", "ɡ": "&#609", "ɢ": "&#610", "ɣ": "&#611", "ɤ": "&#612", "ɥ": "&#613", "ɦ": "&#614", "ɧ": "&#615", "ɨ": "&#616", "ɪ": "&#618", "ɫ": "&#619", "ɬ": "&#620", "ɭ": "&#621", "ɮ": "&#622", "ɯ": "&#623", "ɰ": "&#624", "ɱ": "&#625", "ɲ": "&#626", "ɳ": "&#627", "ɴ": "&#628", "ɵ": "&#629", "ɶ": "&#630", "ɸ": "&#632", "ɹ": "&#633", "ɺ": "&#634", "ɻ": "&#635", "ɽ": "&#637", "ɾ": "&#638", "ʀ": "&#640", "ʁ": "&#641", "ʂ": "&#642", "ʃ": "&#643", "ʄ": "&#644", "ʈ": "&#648", "ʉ": "&#649", "ʊ": "&#650", "ʋ": "&#651", "ʌ": "&#652", "ʍ": "&#653", "ʎ": "&#654", "ʏ": "&#655", "ʐ": "&#656", "ʑ": "&#657", "ʒ": "&#658", "ʔ": "&#660", "ʕ": "&#661", "ʘ": "&#664", "ʙ": "&#665", "ʛ": "&#667", "ʜ": "&#668", "ʝ": "&#669", "ʟ": "&#671", "ʡ": "&#673", "ʢ": "&#674", "ʤ": "&#676", "ʧ": "&#679", "β": "&#946", "θ": "&#952", "χ": "&#967", "ⱱ": "&#113"}
	var charsToLinks = {"a": "http://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg",
	"aː": "http://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg",
	"b": "http://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg",
	"c": "http://upload.wikimedia.org/wikipedia/commons/5/5d/Voiceless_palatal_plosive.ogg",
	"dz": "http://upload.wikimedia.org/wikipedia/commons/d/d8/Voiced_alveolar_sibilant_affricate.oga",
	"d": "http://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg",
	"dʐ": "http://upload.wikimedia.org/wikipedia/commons/5/58/Voiced_retroflex_affricate.ogg",
	"dʑ": "http://upload.wikimedia.org/wikipedia/commons/c/c1/Voiced_alveolo-palatal_affricate.ogg",
	"dʒ": "http://upload.wikimedia.org/wikipedia/commons/e/e6/Voiced_palato-alveolar_affricate.ogg",
	"e": "http://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg",
	"eː": "http://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg",
	"f": "http://upload.wikimedia.org/wikipedia/commons/3/33/Voiceless_labiodental_fricative.ogg",
	"h": "http://upload.wikimedia.org/wikipedia/commons/d/da/Voiceless_glottal_fricative.ogg",
	"i": "http://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg",
	"iː": "http://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg",
	"j": "http://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg",
	"k": "http://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg",
	"l": "http://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg",
	"m": "http://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg",
	"n": "http://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg",
	"o": "http://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg",
	"oː": "http://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg",
	"p": "http://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg",
	"q": "http://upload.wikimedia.org/wikipedia/commons/1/19/Voiceless_uvular_plosive.ogg",
	"r": "http://upload.wikimedia.org/wikipedia/commons/c/ce/Alveolar_trill.ogg",
	"s": "http://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg",
	"ts": "http://upload.wikimedia.org/wikipedia/commons/9/9d/Voiceless_alveolar_sibilant_affricate.oga",
	"t": "http://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg",
	"tɕ": "http://upload.wikimedia.org/wikipedia/commons/c/c4/Voiceless_alveolo-palatal_affricate.ogg",
	"tʂ": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Voiceless_retroflex_affricate.ogg",
	"tʃ": "http://upload.wikimedia.org/wikipedia/commons/9/97/Voiceless_palato-alveolar_affricate.ogg",
	"u": "http://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg",
	"uː": "http://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg",
	"v": "http://upload.wikimedia.org/wikipedia/commons/8/85/Voiced_labiodental_fricative.ogg",
	"w": "http://upload.wikimedia.org/wikipedia/commons/f/f2/Voiced_labio-velar_approximant.ogg",
	"x": "http://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_velar_fricative.ogg",
	"y": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg",
	"yː": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg",
	"z": "http://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg",
	"ä": "No link found",
	"æ": "http://upload.wikimedia.org/wikipedia/commons/c/c9/Near-open_front_unrounded_vowel.ogg",
	"ç": "http://upload.wikimedia.org/wikipedia/commons/a/ab/Voiceless_palatal_fricative.ogg",
	"ð": "http://upload.wikimedia.org/wikipedia/commons/6/6a/Voiced_dental_fricative.ogg",
	"ø": "http://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg",
	"øː": "http://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg",
	"ħ": "http://upload.wikimedia.org/wikipedia/commons/b/b2/Voiceless_pharyngeal_fricative.ogg",
	"ŋ": "http://upload.wikimedia.org/wikipedia/commons/3/39/Velar_nasal.ogg",
	"œ": "http://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg",
	"œː": "http://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg",
	"œ̃": "No link found",
	"ǀ": "http://upload.wikimedia.org/wikipedia/commons/1/1f/Dental_click.ogg",
	"ǁ": "http://upload.wikimedia.org/wikipedia/commons/f/f4/Alveolar_lateral_click.ogg",
	"ǃ": "http://upload.wikimedia.org/wikipedia/commons/3/3c/Postalveolar_click.ogg",
	"ɐ": "http://upload.wikimedia.org/wikipedia/commons/2/22/Near-open_central_unrounded_vowel.ogg",
	"ɑ": "http://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg",
	"ɑː": "http://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg",
	"ɑ̃": "No link found",
	"ɒ": "http://upload.wikimedia.org/wikipedia/commons/0/0a/Open_back_rounded_vowel.ogg",
	"ɓ": "http://upload.wikimedia.org/wikipedia/commons/3/31/Voiced_bilabial_implosive.ogg",
	"ɔ": "http://upload.wikimedia.org/wikipedia/commons/0/02/Open-mid_back_rounded_vowel.ogg",
	"ɔː": "http://upload.wikimedia.org/wikipedia/commons/0/02/Open-mid_back_rounded_vowel.ogg",
	"ɔ̃": "No link found",
	"ɕ": "http://upload.wikimedia.org/wikipedia/commons/0/0b/Voiceless_alveolo-palatal_sibilant.ogg",
	"ɖ": "http://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_retroflex_stop.oga",
	"ɗ": "http://upload.wikimedia.org/wikipedia/commons/c/c3/Voiced_alveolar_implosive.ogg",
	"ə": "http://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg",
	"ɚ": "No link found",
	"ɛ": "http://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg",
	"ɛ̃": "No link found",
	"ɜ": "http://upload.wikimedia.org/wikipedia/commons/0/01/Open-mid_central_unrounded_vowel.ogg",
	"ɝ": "No link found",
	"ɟ": "http://upload.wikimedia.org/wikipedia/commons/1/1d/Voiced_palatal_plosive.ogg",
	"ɠ": "http://upload.wikimedia.org/wikipedia/commons/a/a8/Voiced_velar_implosive.ogg",
	"ɡ": "http://upload.wikimedia.org/wikipedia/commons/b/b4/Voiced_velar_plosive.ogg",
	"ɢ": "http://upload.wikimedia.org/wikipedia/commons/b/b6/Voiced_uvular_stop.oga",
	"ɣ": "No link found",
	"ɤ": "http://upload.wikimedia.org/wikipedia/commons/2/26/Close-mid_back_unrounded_vowel.ogg",
	"ɥ": "http://upload.wikimedia.org/wikipedia/commons/f/fe/Labial-palatal_approximant.ogg",
	"ɦ": "http://upload.wikimedia.org/wikipedia/commons/e/e2/Voiced_glottal_fricative.ogg",
	"ɧ": "http://upload.wikimedia.org/wikipedia/commons/4/42/Voiceless_dorso-palatal_velar_fricative.ogg",
	"ɨ": "http://upload.wikimedia.org/wikipedia/commons/5/53/Close_central_unrounded_vowel.ogg",
	"ɪ": "http://upload.wikimedia.org/wikipedia/commons/4/4c/Near-close_near-front_unrounded_vowel.ogg",
	"ɫ": "http://upload.wikimedia.org/wikipedia/commons/d/d3/Velarized_alveolar_lateral_approximant.ogg",
	"ɬ": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Voiceless_alveolar_lateral_fricative.ogg",
	"ɭ": "http://upload.wikimedia.org/wikipedia/commons/d/d1/Retroflex_lateral_approximant.ogg",
	"ɮ": "No link found",
	"ɯ": "http://upload.wikimedia.org/wikipedia/commons/e/e8/Close_back_unrounded_vowel.ogg",
	"ɰ": "http://upload.wikimedia.org/wikipedia/commons/5/5c/Voiced_velar_approximant.ogg",
	"ɱ": "http://upload.wikimedia.org/wikipedia/commons/1/18/Labiodental_nasal.ogg",
	"ɲ": "http://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg",
	"ɳ": "http://upload.wikimedia.org/wikipedia/commons/a/af/Retroflex_nasal.ogg",
	"ɴ": "http://upload.wikimedia.org/wikipedia/commons/3/3e/Uvular_nasal.ogg",
	"ɵ": "http://upload.wikimedia.org/wikipedia/commons/b/b5/Close-mid_central_rounded_vowel.ogg",
	"ɸ": "http://upload.wikimedia.org/wikipedia/commons/4/41/Voiceless_bilabial_fricative.ogg",
	"ɹ": "http://upload.wikimedia.org/wikipedia/commons/1/1f/Alveolar_approximant.ogg",
	"ɺ": "http://upload.wikimedia.org/wikipedia/commons/d/df/Alveolar_lateral_flap.ogg",
	"ɻ": "http://upload.wikimedia.org/wikipedia/commons/d/d2/Retroflex_approximant.ogg",
	"ɽ": "http://upload.wikimedia.org/wikipedia/commons/8/87/Retroflex_flap.ogg",
	"ɾ": "http://upload.wikimedia.org/wikipedia/commons/a/a0/Alveolar_tap.ogg",
	"ʀ": "http://upload.wikimedia.org/wikipedia/commons/c/cb/Uvular_trill.ogg",
	"ʁ": "http://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg",
	"ʂ": "http://upload.wikimedia.org/wikipedia/commons/b/b1/Voiceless_retroflex_sibilant.ogg",
	"ʃ": "http://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg",
	"ʄ": "http://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_palatal_implosive.ogg",
	"ʈ": "http://upload.wikimedia.org/wikipedia/commons/b/b0/Voiceless_retroflex_stop.oga",
	"ʉ": "http://upload.wikimedia.org/wikipedia/commons/6/66/Close_central_rounded_vowel.ogg",
	"ʊ": "http://upload.wikimedia.org/wikipedia/commons/d/d5/Near-close_near-back_rounded_vowel.ogg",
	"ʋ": "http://upload.wikimedia.org/wikipedia/commons/e/ee/Labiodental_approximant.ogg",
	"ʌ": "No link found",
	"ʍ": "http://upload.wikimedia.org/wikipedia/commons/a/a7/Voiceless_labio-velar_fricative.ogg",
	"ʎ": "http://upload.wikimedia.org/wikipedia/commons/d/d9/Palatal_lateral_approximant.ogg",
	"ʏ": "http://upload.wikimedia.org/wikipedia/commons/e/e3/Near-close_near-front_rounded_vowel.ogg",
	"ʐ": "http://upload.wikimedia.org/wikipedia/commons/7/7f/Voiced_retroflex_sibilant.ogg",
	"ʑ": "http://upload.wikimedia.org/wikipedia/commons/1/15/Voiced_alveolo-palatal_sibilant.ogg",
	"ʒ": "http://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg",
	"ʔ": "http://upload.wikimedia.org/wikipedia/commons/4/4d/Glottal_stop.ogg",
	"ʕ": "http://upload.wikimedia.org/wikipedia/en/0/0c/Voiced_pharyngeal_fricative1.ogg",
	"ʙ": "http://upload.wikimedia.org/wikipedia/commons/e/e7/Bilabial_trill.ogg",
	"ʝ": "http://upload.wikimedia.org/wikipedia/commons/a/ac/Voiced_palatal_fricative.ogg",
	"ʰ": "No link found",
	"ʲ": "No link found",
	"ʷ": "No link found",
	"β": "http://upload.wikimedia.org/wikipedia/commons/3/37/Voiced_bilabial_fricative.ogg",
	"θ": "http://upload.wikimedia.org/wikipedia/commons/8/80/Voiceless_dental_fricative.ogg",
	"χ": "http://upload.wikimedia.org/wikipedia/commons/c/c8/Voiceless_uvular_fricative.ogg"}
	var chars = [];
	for(var key in charsToCodes){
		if(charsToCodes.hasOwnProperty(key)){
			chars.push(key);
		}
	}
	var output ={};

	var quizCharacter = chars[Math.floor(Math.random()*chars.length)];

	var checkAnswer = function() {
		var answer = $('.wordInput').val();
		console.log(answer)

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

		  		//access pronunciation
		    	var pro = xmlDoc.getElementsByTagName("pr")[0].childNodes[0].nodeValue;
		    	console.log(pro);
		    	$('.pro').html(pro);

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
		var playCharacter = $('<div class="play"><audio id="charSound" src='+charsToLinks[quizCharacter]+'></audio><div><button id = "button" class= "btn btn-info" onclick='+order+'>Play Sound</button></div></div>')
		var wordBox = $('<input class = "wordInput" placeholder = "Input word here"></input>');
		var button = $('<button id = "submit-btn" class = "btn btn-success">Submit</button>');
		var feedback = $('<div class="feedback"></div>')
		var newChar = $('<button id = "new" class = "btn btn-info">New Sound</button>')

		character.append(newChar)

		div.append(header, character, playCharacter, wordBox, button, feedback);

		$('#new').on('click', function() {
			quizCharacter = chars[Math.floor(Math.random()*chars.length)];
			$('.sound').html("Sound: "+charsToCodes[quizCharacter])
			$('.play').html('<audio id="charSound" src='+charsToLinks[quizCharacter]+'></audio><div><button id = "button" class= "btn btn-info" onclick='+order+'>Play Sound</button></div>')
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

