var IPAConverter = (function() {

	var exports = {};

	var submit = function() {

		var query = $('.IPAInput').val();
		
		if (query == '') {
			
			// Clear all output fields and ask user for a query
			$('.alert').css('visibility', 'visible');
			$('.audio').html('');
			$('.pro').html('');
			$('.word').html('');
		
		} else {

			$('.alert').css('visibility', 'hidden');
			
			// Send request to dictionary API and extract data from returned XML string
			 $.ajax({
	            async: true,
	            url: "http://localhost:8080/",
	            data: { word: query }
	   		}).done(function(msg) {

	   			// parse returned string into XML DOM object
		    	var parser = new DOMParser();
		    	var xmlDoc = parser.parseFromString(msg, "text/xml");

		    	// access sound files and get correct URL
		    	var wav = xmlDoc.getElementsByTagName("wav")[0].childNodes[0].nodeValue;
		    	var wavURL = "http://media.merriam-webster.com/soundc11/";
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

		  		// access pronunciation
		    	var pro = xmlDoc.getElementsByTagName("pr")[0].childNodes[0].nodeValue;
		    	var order = "document.getElementById('sound').play()";

		    	// fill output fields with data, separate pronunciation string into spans
		    	$('.word').html(query);
		    	$('.audio').html('<audio id="sound" src='+wavURL+'></audio><div><button id = "button" class= "btn btn-success" onclick='+order+'>click me!</button></div>');
		    	$('.pro').html('');
		    	for (var i = 0; i < pro.length; i++) {
		    		var text = pro.substring(i, i+1);
		    		$('.pro').append('<span>'+text+'</span>');
		    	}

		    	// Attach audio to each character in the pronunciation
		    	var n = 2
		    	$('span').each(function() {
		    		var id = 'sound'+n;
		    		var sound = $('<audio id='+id+' src='+charsToSounds[$(this).html()]+'></audio>');
		    		$(this).append(sound);
		    		$(this).on('mouseover', function() {
		    			document.getElementById(id).play();
		    			$(this).css('background-color', 'lightgrey');
		    		});
		    		$(this).on('mouseleave', function() {
		    			document.getElementById(id).pause();
		    			$(this).css('background-color', 'white');
		    		});
		    		n += 1;
		    	})
		    });
		}

	}

	var setup = function(div) {

		// HTML layout of widget
		var header = $('<legend class = "IPAHeaderText">IPA Converter</legend>');
		var alert = $('<div class="alert alert-error">Please enter a query.</div>');
		var input = $('<div><input class = "IPAInput" placeholder = "Input word here"></input>');
		var button = $('<button id = "submit" class = "btn btn-success">Submit</button></div>');
		var IPA = $('<div><h3>Pronunciation:</h3></div><div><h4 class = "pro"></h4></div>');
		var word = $('<div><h3 style="text-align:left;">Word:</h3></div><div><h4 class = "word"></h4></div>');
		var audio = $('<div><h3>Listen: </h3></div><div><h1 class = "audio"></h1></div>');
		div.append(header, alert, input, button, word, IPA, audio);

		// create click handler for submit button
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
