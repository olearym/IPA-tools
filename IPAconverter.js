var IPAConverter = (function() {

	var exports = {};

	var server = "http://ipaserver.herokuapp.com/"

	var submit = function() {

		var query = $('.IPAInput').val();

		if (query == '') {

			// Clear all output fields and ask user for a query
			$('.alert').html("Please enter a query");
			$('.alert').css('visibility', 'visible');
			$('.audio').html('');
			$('.pro').html('');
			$('.word').html('');


		} else {
			$('.alert').css('visibility', 'hidden');

			// Send request to dictionary API and extract data from returned XML string
			 $.ajax({
	            async: true,
	            url: server,
	            data: { word: query }
	   		}).done(function(msg) {

	   			// parse returned string into XML DOM object
		    	var parser = new DOMParser();
		    	var xmlDoc = parser.parseFromString(msg, "text/xml");
		    	console.log(xmlDoc);

		    	// access sound files and get correct URL
		    	if (xmlDoc.getElementsByTagName("entry")[0].getElementsByTagName("pr")[0] === undefined){
		    		$('.alert').html("Input not found");
		    		$('.alert').css('visibility', 'visible');
		    		$('.audio').html('');
					$('.pro').html('');
					$('.word').html('');
		    	} else {
			    	var wav = xmlDoc.getElementsByTagName("entry")[0].getElementsByTagName("wav")[0].childNodes[0].nodeValue;
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
			    		

			    	if (pro.indexOf(':') !== -1) {
			    		pro = pro.replace(':', 'ː');
			    	}

			    	// fill output fields with data
			    	$('.word').html(query);
			    	var order = "document.getElementById('sound').play()";
			    	$('.audio').html('<audio id="sound" src='+wavURL+'></audio><div><button id = "button" class= "btn btn-success" onclick='+order+'>click me!</button><img src="http://www.dictionaryapi.com/images/info/branding-guidelines/mw-logo-light-background-50x50.png" style = "position: relative; right: -66.5px;"></div>');
			    	$('.pro').html('');

			    	// separate string into spans of one character
			    	var twice = false
			    	for (var i = 0; i < pro.length; i++) {
			    		var text = pro.substring(i, i+1);
			    		if (twice) {
			    			twice = false
			    			text = ''
			    		}
			    		if (pro.substring(i+1, i+2) == 'ː') {
			    			text = pro.substring(i, i+2);
			    			twice = true
			    		}
			    		$('.pro').append('<span>'+text+'</span>');
			    	}

			    	// Attach audio and popover connections to each span in the pronunciation
			    	var n = 2
			    	$('span').each(function() {
			    		var id = 'sound'+n;
			    		var sound = $('<audio id='+id+' src='+charsToSounds[$(this).html()]+'></audio>');
			    		$(this).append(sound);
			    		$(this).on('mouseenter', function() {
			    			$(this).css('cursor', 'pointer');
						    var textHTML = String($(this).html());
						    var letter = textHTML.charAt(0);

						    for(var r = 1; r <= 8; r++){ // Looking through IPAPulmonic
							    for(var c = 1; c <= 22; c++){
								    var identifierP = $(".IPAPulmonic table" + " " + ".row" + r + " " + "#col" + c + " " + "div" + " " + "button");
								    var rowColIdP = $(".IPAPulmonic table" + " " + ".row" + r + " " + "#col" + c);
								    // If the current row is odd, to get the corresponding label row, add 1, and then divide by 2
								    // If the current row is even, simply multiply by 2;

								    if (identifierP.html() == letter){
									    if ($('.tabbable #PCTab').attr('class') != 'active'){
										    $("#chartTabs .active").removeClass('active');
										    $("#chartTabs .tab-content .active").removeClass('active');
										    $(".tabbable #PCTab").addClass('active');
										    $(".tabbable .tab-content #tab1").addClass('active');
								    }

								    if(c % 2 !== 0){
									    var colLabelNum = ((c+1)/2);
									    var colLabel = $(".IPAPulmonic table" + " " + ".row0" + " " + "#col" + colLabelNum + " " + ".desc");
									    var rowLabel = $(".IPAPulmonic table" + " " + ".row" + r + " " + "#col0" + " " + ".desc");
									    colLabel.popover("show");
									    rowLabel.popover("show");

								    }else{
									    var colLabelNum = (c/2);
									    var colLabel = $(".IPAPulmonic table" + " " + ".row0" + " " + "#col" + colLabelNum + " " + ".desc");
									    var rowLabel = $(".IPAPulmonic table" + " " + ".row" + r + " " + "#col0" + " " + ".desc");
									    colLabel.popover("show");
									    rowLabel.popover("show");
								    }
								    identifierP.css("color", "white");
								    identifierP.css("background-color", "black");
								    //rowColIdP.css("background-color", "light-blue");

								    break;
								    }else{

								    }
							    }

						    }

						    for(var r = 1; r <= 5; r++){ // Looking through IPANonPulmonic
							    for(var c = 1; c <= 3; c++){
								    var identifierNP = $(".IPANonPulmonic table" + " " + ".np-row" + r + " " + "#col" + c + " " + "div" + " " + "button");
								    var rowColIdNP = $(".IPANonPulmonic table" + " " + ".np-row" + r + " " + "#col" + c);
								    // If the current row is odd, to get the corresponding label row, add 1, and then divide by 2
								    // If the current row is even, simply multiply by 2;

								    if (identifierNP.html() == letter){
									    if ($('.tabbable #NPCTab').attr('class') != 'active'){
										    $("#chartTabs .active").removeClass('active');
										    $("#chartTabs .tab-content .active").removeClass('active');
										    $(".tabbable #NPCTab").addClass('active');
										    $(".tabbable .tab-content #tab2").addClass('active');
								    }

								    var colLabel = $(".IPANonPulmonic table" + " " + ".np-row0" + " " + "#np-col" + c);
								    colLabel.popover("show")
								    identifierNP.css("color", "white");
								    identifierNP.css("background-color", "black");
								    //rowColIdNP.css("background-color", "light-blue");

								    break;
								    }else{

								    }
							    }

						    }

						    for(var r = 1; r <= 7; r++){ // Looking through IPAVowels ***Unfinished***
						    for(var c = 1; c <= 15; c++){
						    var identifierV = $(".IPAVowels table" + " " + "#Vrow" + r + " " + "#Vcol" + c + " " + "div" + " " + "button");
						    var rowColIdV = $(".IPAVowels table" + " " + "Vrow" + r + " " + "#Vcol" + c);
						    // If the current row is odd, to get the corresponding label row, add 1, and then divide by 2
						    // If the current row is even, simply multiply by 2;

						    if (identifierV.html() == letter){
							    if ($('.tabbable #NounTab').attr('class') != 'active'){
								    $("#chartTabs .active").removeClass('active');
								    $("#chartTabs .tab-content .active").removeClass('active');
								    $(".tabbable #NounTab").addClass('active');
								    $(".tabbable .tab-content #tab3").addClass('active');
							    }
							    if (r == 1){ //Triggers popovers for symbols in row 1
								    var colLabelNum = Math.ceil(c/3);
								    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
								    var rowLabel = $(".IPAVowels table" + " " + "#Vrow1" + " " + "#Vcol0" + " " + ".desc");
								    colLabel.popover("show");
								    rowLabel.popover("show");
							    }
							    if (r == 2){ // Row 2
								    var colLabelNum = Math.ceil(c/3);
								    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
								    var rowLabel = $(".IPAVowels table" + " " + "#Vrow2" + " " + "#Vcol0" + " " + ".desc");
								    colLabel.popover("show");
								    rowLabel.popover("show");
							    }
							    if (r == 3){ // Row 3
								    if(c == 3 || c == 8 || c == 13){
								    	var colLabelNum = Math.ceil(c/3);
								    }else{
								    	var colLabelNum = Math.floor(c/3);
								    }
									    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
									    var rowLabel = $(".IPAVowels table" + " " + "#Vrow3" + " " + "#Vcol0" + " " + ".desc");
									    colLabel.popover("show");
									    rowLabel.popover("show");
							    }
							    if (r == 4){ // Row 4
								    var colLabelNum = Math.ceil(c/3);
								    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
								    var rowLabel = $(".IPAVowels table" + " " + "#Vrow4" + " " + "#Vcol0" + " " + ".desc");
								    colLabel.popover("show");
								    rowLabel.popover("show");
							    }
							    if (r == 5){ // Row 5
								    if (c <= 12){
									    var c = c-2;
									    if (c == 5){
									    	var colLabelNum = Math.floor(c/3);
									    }else{
									    	var colLabelNum = Math.ceil(c/3);
									    }
								    }else{
								    	var colLabelNum = Math.ceil(c/3);
								    }
								    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
								    var rowLabel = $(".IPAVowels table" + " " + "#Vrow5" + " " + "#Vcol0" + " " + ".desc");
								    colLabel.popover("show");
								    rowLabel.popover("show");
							    }
							    if (r == 6){ // Row 6 
								    var c = c-1;
								    var colLabelNum = Math.floor(c/3);
								    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
								    var rowLabel = $(".IPAVowels table" + " " + "#Vrow6" + " " + "#Vcol0" + " " + ".desc");
								    colLabel.popover("show");
								    rowLabel.popover("show");
							    }
							    if (r == 7){ // Row 7
								    if (c <= 9){
									    var c = c-4;
									    var colLabelNum = Math.floor(c/3);
								    }else{
								    	var colLabelNum = Math.ceil(c/3);
								    }
								    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
								    var rowLabel = $(".IPAVowels table" + " " + "#Vrow7" + " " + "#Vcol0" + " " + ".desc");
								    colLabel.popover("show");
								    rowLabel.popover("show");
							    }

							    identifierV.css("color", "white");
							    identifierV.css("background-color", "black");
							    //rowColIdP.css("background-color", "light-blue");

							    break;
						    }else{

						    }
						    }

						    }

						    //document.getElementById(id).play();
						    $(this).css('background-color', 'grey');
						    $(this).css('color', 'white');
						    $(".IPAPulmonic table")
						    })

						    $(this).on('mouseleave', function() {
							    var textHTML = String($(this).html());
							    var letter = textHTML.charAt(0);
							    $(this).css('background-color', 'white');
							    $(this).css('color', 'black');

							    for(var r = 1; r <= 8; r++){ // Looking through PulmonicTable
								    for(var c = 1; c <= 22; c++){
									    var identifierP = $(".IPAPulmonic table" + " " + ".row" + r + " " + "#col" + c + " " + "div" + " " + "button");
									    var rowColIdP = $(".IPAPulmonic table" + " " + ".row" + r + " " + "#col" + c);
									    // If the current row is odd, to get the corresponding label row, add 1, and then divide by 2
									    // If the current row is even, simply multiply by 2;

									    if (identifierP.html() == letter){
										    if(c % 2 !== 0){
											    var colLabelNum = ((c+1)/2);
											    var colLabel = $(".IPAPulmonic table" + " " + ".row0" + " " + "#col" + colLabelNum + " " + ".desc");
											    var rowLabel = $(".IPAPulmonic table" + " " + ".row" + r + " " + "#col0" + " " + ".desc");
											    colLabel.popover("hide");
											    rowLabel.popover("hide");

										    }else{
											    var colLabelNum = (c/2);
											    var colLabel = $(".IPAPulmonic table" + " " + ".row0" + " " + "#col" + colLabelNum + " " + ".desc");
											    var rowLabel = $(".IPAPulmonic table" + " " + ".row" + r + " " + "#col0" + " " + ".desc");
											    colLabel.popover("hide");
											    rowLabel.popover("hide");
										    }

										    identifierP.css("color", "black");
										    identifierP.css("background-color", "white");
										    //rowColIdP.css("background-color", "light-blue");

										    break;
									    }else{

									    }
								    }
							    }
							    for(var r = 1; r <= 7; r++){ // Looking through IPAVowels ***Unfinished***
								    for(var c = 1; c <= 15; c++){
									    var identifierV = $(".IPAVowels table" + " " + "#Vrow" + r + " " + "#Vcol" + c + " " + "div" + " " + "button");
									    var rowColIdV = $(".IPAVowels table" + " " + "Vrow" + r + " " + "#Vcol" + c);
									    // If the current row is odd, to get the corresponding label row, add 1, and then divide by 2
									    // If the current row is even, simply multiply by 2;

									    if (identifierV.html() == letter){    
										    if (r == 1){ // Hides popovers for symbols in row 1
											    var colLabelNum = Math.ceil(c/3);
											    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
											    var rowLabel = $(".IPAVowels table" + " " + "#Vrow1" + " " + "#Vcol0" + " " + ".desc");
											    colLabel.popover("hide");
											    rowLabel.popover("hide");
										    }
										    if (r == 2){ // Row 2
											    var colLabelNum = Math.ceil(c/3);
											    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
											    var rowLabel = $(".IPAVowels table" + " " + "#Vrow2" + " " + "#Vcol0" + " " + ".desc");
											    colLabel.popover("hide");
											    rowLabel.popover("hide");
										    }
										    if (r == 3){ // Row 3
											    if(c == 3 || c == 8 || c == 13){
											    	var colLabelNum = Math.ceil(c/3);
											    }else{
											    	var colLabelNum = Math.floor(c/3);
											    }
												    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
												    var rowLabel = $(".IPAVowels table" + " " + "#Vrow3" + " " + "#Vcol0" + " " + ".desc");
												    colLabel.popover("hide");
												    rowLabel.popover("hide");
										    }
										    if (r == 4){ // Row 4
											    var colLabelNum = Math.ceil(c/3);
											    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
											    var rowLabel = $(".IPAVowels table" + " " + "#Vrow4" + " " + "#Vcol0" + " " + ".desc");
											    colLabel.popover("hide");
											    rowLabel.popover("hide");
										    }
										    if (r == 5){ // Row 5
										    if (c <= 12){
										    	var c = c-2;
										    if (c == 5){
										    	var colLabelNum = Math.floor(c/3);
										    }else{
										    	var colLabelNum = Math.ceil(c/3);
										    }
										    }else{
										    	var colLabelNum = Math.ceil(c/3);
										    }
										    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
										    var rowLabel = $(".IPAVowels table" + " " + "#Vrow5" + " " + "#Vcol0" + " " + ".desc");
										    colLabel.popover("hide");
										    rowLabel.popover("hide");
										    }
										    if (r == 6){ // Row 6 
											    var c = c-1;
											    var colLabelNum = Math.floor(c/3);
											    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
											    var rowLabel = $(".IPAVowels table" + " " + "#Vrow6" + " " + "#Vcol0" + " " + ".desc");
											    colLabel.popover("hide");
											    rowLabel.popover("hide");
										    }
										    if (r == 7){ // Row 7
											    if (c <= 9){
												    var c = c-4;
												    var colLabelNum = Math.floor(c/3);
											    }else{
											    	var colLabelNum = Math.ceil(c/3);
											    }
											    var colLabel = $(".IPAVowels table" + " " + "#Vrow0" + " " + "#Vcol" + colLabelNum + " " + ".desc");
											    var rowLabel = $(".IPAVowels table" + " " + "#Vrow7" + " " + "#Vcol0" + " " + ".desc");
											    colLabel.popover("hide");
											    rowLabel.popover("hide");
										    }
										    identifierV.css("color", "black");
										    identifierV.css("background-color", "white");
										    //rowColIdP.css("background-color", "light-blue");

										    break;
									    }else{

									    }
								    }

							    }
						    });
				    		$(this).on('click', function() {
				    			document.getElementById(id).play();
				    		});
				    		$(this).on('mouseleave', function() {
				    			$(this).css('background-color', 'white');
				    		});

				    		n += 1;
			    	})
				}
		    });
		}

	}

	// create html layout of the converter within the specified div, attach click handler to submit button
	var setup = function(div) {

		// HTML layout of widget
		var header = $('<legend class = "IPAHeaderText">IPA Converter</legend>');
		var alert = $('<div class="alert alert-error">Please enter a query.</div>');
		var input = $('<div><input class = "IPAInput" placeholder = "Input word here""></input>');
		var button = $('<button id = "submit" class = "btn btn-success">Submit</button></div>');
		var IPA = $('<div><h3>Pronunciation:</h3></div><div><h4 class = "pro"></h4></div>');
		var word = $('<div><h3 style="text-align:left;">Word:</h3></div><div><h4 class = "word"></h4></div>');
		var audio = $('<div><h3>Listen: </h3></div><div><h1 class = "audio"></h1></div>');
		var img = $('<img src="http://www.dictionaryapi.com/images/info/branding-guidelines/mw-logo-light-background-50x50.png">')
		var audio = $('<div><h3>Listen: </h3></div><div><h1 class = "audio"><img src="http://www.dictionaryapi.com/images/info/branding-guidelines/mw-logo-light-background-50x50.png" style = "position: relative; right: -150px;"></h1></div>');
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