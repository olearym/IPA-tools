var IPAConverter = (function() {

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
		    	order = "document.getElementById('sound').play()"

		    	$('.word').html(query)
		    	$('.audio').html('<audio id="sound" src='+wavURL+'></audio><div><button id = "button" class= "btn btn-info" onclick='+order+'>click me!</button></div>')
		    	$('.pro').html(pro)
		    });
		}

	}

	var setup = function(div) {

		// HTML layout of widget
		var header = $('<legend class = "IPAHeaderText">IPA Converter</legend>')
		var alert = $('<div class="alert alert-error"></div>')
		var input = $('<div><input class = "IPAInput" placeholder = "Input word here"></input>')
		var button = $('<button id = "submit" class = "btn btn-success">Submit</button></div>')
		var IPA = $('<div><h3>Pronunciation:</h3></div><div><h3 class = "pro"></h3></div>')
		var word = $('<div><h3 style="text-align:left;">Word:</h3></div><div><h3 class = "word"></h3></div>')
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
