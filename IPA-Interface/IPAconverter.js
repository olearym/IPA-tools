var IPAConverter = (function() {

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

	var exports = {}

	var submit = function() {
		$('.alert').html('');
		$('.alert').css('visibility', 'hidden')

		var query = $('.IPAInput').val();
		console.log(query)
		if (query == '') {
			$('.alert').css('visibility', 'visible')
			$('.alert').html('Please enter a query.');
			$('.audio').html('');
			$('.pro').html('');
			$('.word').html('');
		} else {
			 $.ajax({
	            async: true,
	            url: "http://localhost:8080/",
	            data: { word: query }
	   		}).done(function(msg) {
		    	var parser = new DOMParser();
		    	var xmlDoc = parser.parseFromString(msg, "text/xml");

		    	//access sound files and get correct URL
		    	var wav = xmlDoc.getElementsByTagName("wav")[0].childNodes[0].nodeValue;
		    	var wavURL = "http://media.merriam-webster.com/soundc11/"
		    	if (wav.substring(0,3) == 'bix') {
		    		wavURL += 'bix/'+wav;
		    	} 
		    	else if (wav.substring(0,2) == 'gg') {
		    		wavURL += 'gg/'+wav;
		    	}
		    	else if (parseInt(wav.substring(0,1)) == NaN) {
		    		wavURL += 'number/'+wav;
		    	}
		  		else {
		  			wavURL += wav.substring(0,1)+"/"+wav;
		  		}

		  		//access pronunciation
		    	var pro = xmlDoc.getElementsByTagName("pr")[0].childNodes[0].nodeValue;
		    	console.log(wavURL);
		    	console.log(pro);
		    	var order = "document.getElementById('sound').play()"

		    	$('.word').html(query)
		    	$('.audio').html('<audio id="sound" src='+wavURL+'></audio><div><button id = "button" class= "btn btn-success" onclick='+order+'>click me!</button></div>')
		    	$('.pro').html('')
		    	for (var i = 0; i < pro.length; i++) {
		    		var text = pro.substring(i, i+1)
		    		$('.pro').append('<span>'+text+'</span>')
		    	}

		    	var n = 2
		    	$('span').each(function() {
		    		var id = 'sound'+n
		    		var sound = $('<audio id='+id+' src='+charsToLinks[$(this).html()]+'></audio>')
		    		console.log(sound)
		    		$(this).append(sound)
		    		$(this).on('mouseenter', function() {
		    			document.getElementById(id).play();
		    			$(this).css('background-color', 'lightgrey');
		    		})
		    		$(this).on('mouseleave', function() {
		    			$(this).css('background-color', 'white');
		    		})
		    		n += 1
		    	})
		    });
		}

	}

	var setup = function(div) {

		// HTML layout of widget
		var header = $('<legend class = "IPAHeaderText">IPA Converter</legend>')
		var alert = $('<div class="alert alert-error"></div>')
		var input = $('<div><input class = "IPAInput" placeholder = "Input word here"></input>')
		var button = $('<button id = "submit" class = "btn btn-success">Submit</button></div>')
		var IPA = $('<div><h3>Pronunciation:</h3></div><div><h4 class = "pro"></h4></div>')
		var word = $('<div><h3 style="text-align:left;">Word:</h3></div><div><h4 class = "word"></h4></div>')
		var audio = $('<div><h3>Listen: </h3></div><div><h1 class = "audio"></h1></div>')
		div.append(header, alert, input, button, word, IPA, audio)

		$('#submit').on('click', submit);
		$('.IPAInput').keydown(function(event){
			if(event.keyCode == 13) {
				$('#submit').click();
			}
		})
	}

	exports.setup = setup
	return exports

})();

$(document).ready(function() {
	$(".IPAConverter").each(function() {
		IPAConverter.setup($(this));
	});
});
