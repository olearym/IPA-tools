
// *************************************************************************************************//
// ******Code to get array of characters and links from http://en.wikipedia.org/wiki/Help:IPA******//
// chars = [];
// links = [];
// $($('.wikitable')[0]).find('tr').map(function() {
// 	links.push($(this).find('.audiolink').find('a').prop('href'));
// })

// $($('.wikitable')[0]).find('tr').map(function() {
// 	chars.push($(this).find('big').prop('innerText'));
// })

// charsToLinks = {};
// for (var i = 0; i < links.length; i++) {
// 	if (!(chars[i] == undefined)) {

// 		if (!(links[i] == undefined)) {
// 			charsToLinks[chars[i]] = links[i];
// 		} else {
// 			charsToLinks[chars[i]] = "No link found";
// 		}	
// 	} 
// }


//  code for getting character codes from http://www.phon.ucl.ac.uk/home/wells/ipa-unicode.htm
// chars = []
// codes = []
// charsToCodes = {}

// $('.myTable').find('tr').map(function() {
// 	cha = $($(this).find('td')[0]).text()[0]
// 	code = '&#' + $($(this).find('td')[1]).text().substring(0,3)
// 	if (!(cha == undefined)) {
// 		charsToCodes[cha] = code
// 	}
// })


var IPAPulmonic = (function(){
	var exports = {};

	// fills a specified div within IPAPulmonic with an html table containing the pulmonic consanants
	
	var setupChart = function(div){
		var table = $("<table class ='table table-hover table-bordered'></table>");
		var notice = $("<p>Within each column, symbols on the right represent voiced consonants</p>")
		/*--------------Rows-------------*/

		var row0 =  $("<tr class = 'row0'></tr>");
		var row1 =  $("<tr class = 'row1'></tr>");
		var row2 =  $("<tr class = 'row2'></tr>");
		var row3 =  $("<tr class = 'row3'></tr>");
		var row4 =  $("<tr class = 'row4'></tr>");
		var row5 =  $("<tr class = 'row5'></tr>");
		var row6 =  $("<tr class = 'row6'></tr>");
		var row7 =  $("<tr class = 'row7'></tr>");
		var row8 =  $("<tr class = 'row8'></tr>");
		/*--------------Row0 Columns---------------*/

		var r0col0 = $("<td id = 'col0'></td>");
		var r0col1 = $("<td class = 'labels' id = 'col1' colspan = '2'><div class = 'desc'>Bilabial</div></td>");
		var r0col2 = $("<td class = 'labels' id = 'col2' colspan = '2'><div class = 'desc'>Labiodental</div></td>");
		var r0col3 = $("<td class = 'labels' id = 'col3' colspan = '2'><div class = 'desc'>Dental</div></td>");
		var r0col4 = $("<td class = 'labels' id = 'col4' colspan = '2'><div class = 'desc'>Alveolar</div></td>");
		var r0col5 = $("<td class = 'labels' id = 'col5' colspan = '2'><div class = 'desc'>Postalveolar</div></td>");
		var r0col6 = $("<td class = 'labels' id = 'col6' colspan = '2'><div class = 'desc'>Retroflex</div></td>");
		var r0col7 = $("<td class = 'labels' id = 'col7' colspan = '2'><div class = 'desc'>Palatal</div></td>");
		var r0col8 = $("<td class = 'labels' id = 'col8' colspan = '2'><div class = 'desc'>Velar</div></td>");
		var r0col9 = $("<td class = 'labels' id = 'col9' colspan = '2'><div class = 'desc'>Uvular</div></td>");
		var r0col10 = $("<td class = 'labels' id = 'col10' colspan = '2'><div class = 'desc'>Pharyngeal</div></td>");
		var r0col11 = $("<td class = 'labels' id = 'col11' colspan = '2'><div class = 'desc'>Glottal</div></td>");

		$(row0).append(r0col0, r0col1, r0col2, r0col3, r0col4, r0col5, r0col6, r0col7, r0col8, r0col9, r0col10, r0col11);


		/*--------------Row1 Columns---------------*/

		var r1col0 = $("<td class = 'labels' id = 'col0'><div class = 'desc'>Plosive</div></td>");
		var r1col1 = $("<td id = 'col1'></td>");
		var r1col2 = $("<td id = 'col2'></td>");
		var r1col3 = $("<td id = 'col3'></td>");
		var r1col4 = $("<td id = 'col4'></td>");
		var r1col5 = $("<td id = 'col5'></td>");
		var r1col6 = $("<td id = 'col6'></td>");
		var r1col7 = $("<td id = 'col7'></td>");
		var r1col8 = $("<td id = 'col8'></td>");
		var r1col9 = $("<td id = 'col9'></td>");
		var r1col10 = $("<td id = 'col10'></td>");
		var r1col11 = $("<td id = 'col11'></td>");
		var r1col12 = $("<td id = 'col12'></td>");
		var r1col13 = $("<td id = 'col13'></td>");
		var r1col14 = $("<td id = 'col14'></td>");
		var r1col15 = $("<td id = 'col15'></td>");
		var r1col16 = $("<td id = 'col16'></td>");
		var r1col17 = $("<td id = 'col17'></td>");
		var r1col18 = $("<td id = 'col18'></td>");
		var r1col19 = $("<td id = 'col19'></td>");
		var r1col20 = $("<td id = 'col20'></td>");
		var r1col21 = $("<td id = 'col21'></td>");
		var r1col22 = $("<td id = 'col22'></td>");

		$(row1).append(r1col0, r1col1, r1col2, r1col3, r1col4, r1col5, r1col6, r1col7, r1col8, r1col9, r1col10, r1col11, r1col12, r1col13, r1col14, r1col15, r1col16, r1col17, r1col18, r1col19, r1col20, r1col21, r1col22);


		/*--------------Row2 Columns---------------*/

		var r2col0 = $("<td class = 'labels' id = 'col0'><div class = 'desc'>Nasal</div></td>");
		var r2col1 = $("<td id = 'col1'></td>");
		var r2col2 = $("<td id = 'col2'></td>");
		var r2col3 = $("<td id = 'col3'></td>");
		var r2col4 = $("<td id = 'col4'></td>");
		var r2col5 = $("<td id = 'col5'></td>");
		var r2col6 = $("<td id = 'col6'></td>");
		var r2col7 = $("<td id = 'col7'></td>");
		var r2col8 = $("<td id = 'col8'></td>");
		var r2col9 = $("<td id = 'col9'></td>");
		var r2col10 = $("<td id = 'col10'></td>");
		var r2col11 = $("<td id = 'col11'></td>");
		var r2col12 = $("<td id = 'col12'></td>");
		var r2col13 = $("<td id = 'col13'></td>");
		var r2col14 = $("<td id = 'col14'></td>");
		var r2col15 = $("<td id = 'col15'></td>");
		var r2col16 = $("<td id = 'col16'></td>");
		var r2col17 = $("<td id = 'col17'></td>");
		var r2col18 = $("<td id = 'col18'></td>");
		var r2col19 = $("<td id = 'col19'></td>");
		var r2col20 = $("<td id = 'col20'></td>");
		var r2col21 = $("<td id = 'col21'></td>");
		var r2col22 = $("<td id = 'col22'></td>");

		$(row2).append(r2col0, r2col1, r2col2, r2col3, r2col4, r2col5, r2col6, r2col7, r2col8, r2col9, r2col10, r2col11, r2col12, r2col13, r2col14, r2col15, r2col16, r2col17, r2col18, r2col19, r2col20, r2col21, r2col22);


		/*--------------Row3 Columns---------------*/

		var r3col0 = $("<td class = 'labels' id = 'col0'><div class = 'desc'>Trill</div></td>");
		var r3col1 = $("<td id = 'col1'></td>");
		var r3col2 = $("<td id = 'col2'></td>");
		var r3col3 = $("<td id = 'col3'></td>");
		var r3col4 = $("<td id = 'col4'></td>");
		var r3col5 = $("<td id = 'col5'></td>");
		var r3col6 = $("<td id = 'col6'></td>");
		var r3col7 = $("<td id = 'col7'></td>");
		var r3col8 = $("<td id = 'col8'></td>");
		var r3col9 = $("<td id = 'col9'></td>");
		var r3col10 = $("<td id = 'col10'></td>");
		var r3col11 = $("<td id = 'col11'></td>");
		var r3col12 = $("<td id = 'col12'></td>");
		var r3col13 = $("<td id = 'col13'></td>");
		var r3col14 = $("<td id = 'col14'></td>");
		var r3col15 = $("<td id = 'col15'></td>");
		var r3col16 = $("<td id = 'col16'></td>");
		var r3col17 = $("<td id = 'col17'></td>");
		var r3col18 = $("<td id = 'col18'></td>");
		var r3col19 = $("<td id = 'col19'></td>");
		var r3col20 = $("<td id = 'col20'></td>");
		var r3col21 = $("<td id = 'col21'></td>");
		var r3col22 = $("<td id = 'col22'></td>");

		$(row3).append(r3col0, r3col1, r3col2, r3col3, r3col4, r3col5, r3col6, r3col7, r3col8, r3col9, r3col10, r3col11, r3col12, r3col13, r3col14, r3col15, r3col16, r3col17, r3col18, r3col19, r3col20, r3col21, r3col22);


		/*--------------Row4 Columns---------------*/

		var r4col0 = $("<td class = 'labels' id = 'col0'><div class = 'desc'>Tap or Flap</div></td>");
		var r4col1 = $("<td id = 'col1'></td>");
		var r4col2 = $("<td id = 'col2'></td>");
		var r4col3 = $("<td id = 'col3'></td>");
		var r4col4 = $("<td id = 'col4'></td>");
		var r4col5 = $("<td id = 'col5'></td>");
		var r4col6 = $("<td id = 'col6'></td>");
		var r4col7 = $("<td id = 'col7'></td>");
		var r4col8 = $("<td id = 'col8'></td>");
		var r4col9 = $("<td id = 'col9'></td>");
		var r4col10 = $("<td id = 'col10'></td>");
		var r4col11 = $("<td id = 'col11'></td>");
		var r4col12 = $("<td id = 'col12'></td>");
		var r4col13 = $("<td id = 'col13'></td>");
		var r4col14 = $("<td id = 'col14'></td>");
		var r4col15 = $("<td id = 'col15'></td>");
		var r4col16 = $("<td id = 'col16'></td>");
		var r4col17 = $("<td id = 'col17'></td>");
		var r4col18 = $("<td id = 'col18'></td>");
		var r4col19 = $("<td id = 'col19'></td>");
		var r4col20 = $("<td id = 'col20'></td>");
		var r4col21 = $("<td id = 'col21'></td>");
		var r4col22 = $("<td id = 'col22'></td>");

		$(row4).append(r4col0, r4col1, r4col2, r4col3, r4col4, r4col5, r4col6, r4col7, r4col8, r4col9, r4col10, r4col11, r4col12, r4col13, r4col14, r4col15, r4col16, r4col17, r4col18, r4col19, r4col20, r4col21, r4col22);


		/*--------------Row5 Columns---------------*/

		var r5col0 = $("<td class = 'labels' id = 'col0'><div class = 'desc'>Fricative</div></td>");
		var r5col1 = $("<td id = 'col1'></td>");
		var r5col2 = $("<td id = 'col2'></td>");
		var r5col3 = $("<td id = 'col3'></td>");
		var r5col4 = $("<td id = 'col4'></td>");
		var r5col5 = $("<td id = 'col5'></td>");
		var r5col6 = $("<td id = 'col6'></td>");
		var r5col7 = $("<td id = 'col7'></td>");
		var r5col8 = $("<td id = 'col8'></td>");
		var r5col9 = $("<td id = 'col9'></td>");
		var r5col10 = $("<td id = 'col10'></td>");
		var r5col11 = $("<td id = 'col11'></td>");
		var r5col12 = $("<td id = 'col12'></td>");
		var r5col13 = $("<td id = 'col13'></td>");
		var r5col14 = $("<td id = 'col14'></td>");
		var r5col15 = $("<td id = 'col15'></td>");
		var r5col16 = $("<td id = 'col16'></td>");
		var r5col17 = $("<td id = 'col17'></td>");
		var r5col18 = $("<td id = 'col18'></td>");
		var r5col19 = $("<td id = 'col19'></td>");
		var r5col20 = $("<td id = 'col20'></td>");
		var r5col21 = $("<td id = 'col21'></td>");
		var r5col22 = $("<td id = 'col22'></td>");

		$(row5).append(r5col0, r5col1, r5col2, r5col3, r5col4, r5col5, r5col6, r5col7, r5col8, r5col9, r5col10, r5col11, r5col12, r5col13, r5col14, r5col15, r5col16, r5col17, r5col18, r5col19, r5col20, r5col21, r5col22);


		/*--------------Row6 Columns---------------*/

		var r6col0 = $("<td class = 'labels' id = 'col0'><div class = 'desc'>Lateral Fricative</div></td>");
		var r6col1 = $("<td id = 'col1'></td>");
		var r6col2 = $("<td id = 'col2'></td>");
		var r6col3 = $("<td id = 'col3'></td>");
		var r6col4 = $("<td id = 'col4'></td>");
		var r6col5 = $("<td id = 'col5'></td>");
		var r6col6 = $("<td id = 'col6'></td>");
		var r6col7 = $("<td id = 'col7'></td>");
		var r6col8 = $("<td id = 'col8'></td>");
		var r6col9 = $("<td id = 'col9'></td>");
		var r6col10 = $("<td id = 'col10'></td>");
		var r6col11 = $("<td id = 'col11'></td>");
		var r6col12 = $("<td id = 'col12'></td>");
		var r6col13 = $("<td id = 'col13'></td>");
		var r6col14 = $("<td id = 'col14'></td>");
		var r6col15 = $("<td id = 'col15'></td>");
		var r6col16 = $("<td id = 'col16'></td>");
		var r6col17 = $("<td id = 'col17'></td>");
		var r6col18 = $("<td id = 'col18'></td>");
		var r6col19 = $("<td id = 'col19'></td>");
		var r6col20 = $("<td id = 'col20'></td>");
		var r6col21 = $("<td id = 'col21'></td>");
		var r6col22 = $("<td id = 'col22'></td>");

		$(row6).append(r6col0, r6col1, r6col2, r6col3, r6col4, r6col5, r6col6, r6col7, r6col8, r6col9, r6col10, r6col11, r6col12, r6col13, r6col14, r6col15, r6col16, r6col17, r6col18, r6col19, r6col20, r6col21, r6col22);


		/*--------------Row7 Columns---------------*/

		var r7col0 = $("<td class = 'labels' id = 'col0'><div class = 'desc'>Approximant</div></td>");
		var r7col1 = $("<td id = 'col1'></td>");
		var r7col2 = $("<td id = 'col2'></td>");
		var r7col3 = $("<td id = 'col3'></td>");
		var r7col4 = $("<td id = 'col4'></td>");
		var r7col5 = $("<td id = 'col5'></td>");
		var r7col6 = $("<td id = 'col6'></td>");
		var r7col7 = $("<td id = 'col7'></td>");
		var r7col8 = $("<td id = 'col8'></td>");
		var r7col9 = $("<td id = 'col9'></td>");
		var r7col10 = $("<td id = 'col10'></td>");
		var r7col11 = $("<td id = 'col11'></td>");
		var r7col12 = $("<td id = 'col12'></td>");
		var r7col13 = $("<td id = 'col13'></td>");
		var r7col14 = $("<td id = 'col14'></td>");
		var r7col15 = $("<td id = 'col15'></td>");
		var r7col16 = $("<td id = 'col16'></td>");
		var r7col17 = $("<td id = 'col17'></td>");
		var r7col18 = $("<td id = 'col18'></td>");
		var r7col19 = $("<td id = 'col19'></td>");
		var r7col20 = $("<td id = 'col20'></td>");
		var r7col21 = $("<td id = 'col21'></td>");
		var r7col22 = $("<td id = 'col22'></td>");

		$(row7).append(r7col0, r7col1, r7col2, r7col3, r7col4, r7col5, r7col6, r7col7, r7col8, r7col9, r7col10, r7col11, r7col12, r7col13, r7col14, r7col15, r7col16, r7col17, r7col18, r7col19, r7col20, r7col21, r7col22);


		/*--------------Row8 Columns---------------*/

		var r8col0 = $("<td class = 'labels' id = 'col0'><div class = 'desc'>Lateral Approximant</div></td>");
		var r8col1 = $("<td id = 'col1'></td>");
		var r8col2 = $("<td id = 'col2'></td>");
		var r8col3 = $("<td id = 'col3'></td>");
		var r8col4 = $("<td id = 'col4'></td>");
		var r8col5 = $("<td id = 'col5'></td>");
		var r8col6 = $("<td id = 'col6'></td>");
		var r8col7 = $("<td id = 'col7'></td>");
		var r8col8 = $("<td id = 'col8'></td>");
		var r8col9 = $("<td id = 'col9'></td>");
		var r8col10 = $("<td id = 'col10'></td>");
		var r8col11 = $("<td id = 'col11'></td>");
		var r8col12 = $("<td id = 'col12'></td>");
		var r8col13 = $("<td id = 'col13'></td>");
		var r8col14 = $("<td id = 'col14'></td>");
		var r8col15 = $("<td id = 'col15'></td>");
		var r8col16 = $("<td id = 'col16'></td>");
		var r8col17 = $("<td id = 'col17'></td>");
		var r8col18 = $("<td id = 'col18'></td>");
		var r8col19 = $("<td id = 'col19'></td>");
		var r8col20 = $("<td id = 'col20'></td>");
		var r8col21 = $("<td id = 'col21'></td>");
		var r8col22 = $("<td id = 'col22'></td>");

		$(row8).append(r8col0, r8col1, r8col2, r8col3, r8col4, r8col5, r8col6, r8col7, r8col8, r8col9, r8col10, r8col11, r8col12, r8col13, r8col14, r8col15, r8col16, r8col17, r8col18, r8col19, r8col20, r8col21, r8col22);



		$(table).append(row0, row1, row2, row3, row4, row5, row6, row7, row8);
		$(div).append(table, notice);

	}
	exports.setupChart = setupChart;
	return exports;
}());

$(document).ready(function(){
	$(".IPAPulmonic").each(function(){
		IPAPulmonic.setupChart(this);
	})
});


for ( var i = 0; i < charsToLinks.length; i++ ) {
	cha = charsToLinks[i].char;
	if (!(charsToCodes[cha] == undefined)) {
		charsToLinks[i].decCode = charsToCodes[cha];
	}
}

var keysList = [];
for(var key in charsToLinks){
	if(charsToLinks.hasOwnProperty(key)){
		keysList.push(key);
	}
}
 

// The dict above will have values for row: and column:
// Below we will add to the html the values of these rows and columns

$(document).ready(function(){


//For loop: gets rid of excess border within table
	for (var x = 1; x <= 8; x++){
		for (var y = 1; y <= 22; y++){
			var tempRow = x;
			var tempCol = y;
			var tempID = ".row" + tempRow + " " + "#col" + tempCol;
			if (tempCol % 2 == 0){
				$(tempID).css("border-left", "0px");
			}else{
				$(tempID).css("border-right", "0px");
			}
		}
	}
	for (var i = 0; i < keysList.length; i++){
		if (charsToLinks[i]["row"] !== undefined && charsToLinks[i]["column"] !== undefined){
		 
			var rowIndex = String(charsToLinks[i]["row"]);
			var colIndex = String(charsToLinks[i]["column"]);

			if (charsToLinks[i]["decCode"] != ""){
				var label = charsToLinks[i]["decCode"];
			} else {
				var label = charsToLinks[i]["char"];
			}
			var identifier = ".row" + rowIndex + " " + "#col" + colIndex;
			 
			if ($(identifier).html() === ""){
				var audioID = "'"+"col"+colIndex+"row"+rowIndex+"'";
				var audio = $('<audio id='+audioID+' src='+'"'+charsToLinks[i].url+'"'+'></audio><div><button onclick="document.getElementById('+audioID+').play()">'+label+'</button></div>')
				$(identifier).html(audio);
			}
		}
	}

	// ---------------- Hover Functions --------------------//
	$(".labels").hover(function(){
	target = $(this);
	target.css("background-color", "#96c4d3");
	// target.css("color", "white");
	}, function(){
	target = $(this);
	target.css("background-color", "white");
	target.css("color", "black");
	});

	//Use for loop below
	$(".row0 #col1 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with both lips"});
	$(".row0 #col2 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with both lower lip and upper teeth"});
	$(".row0 #col3 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated on or between the teeth"});
	$(".row0 #col4 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the tip of the tongue and the alveolar ridge"});
	$(".row0 #col5 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the tip of the tongue just behind the alveolar ridge"});
	$(".row0 #col6 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the tip of the tongue curling backwards"});
	$(".row0 #col7 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the mid tongue at the hard palate"});
	$(".row0 #col8 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the back of the tongue at the soft palate"});
	$(".row0 #col9 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the back of the tongue at the uvula"});
	$(".row0 #col10 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the back of the tongue and the pharynx"});
	$(".row0 #col11 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated at the glottis (the vocal folds)"});

	$(".row1 #col0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Complete obstruction followed by release"});
	$(".row2 #col0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Complete obstruction of the air flow in the mouth but with the velum open so that air can escape from the nose producing a humming sound"});
	$(".row3 #col0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Sound made by the rapid vibration of one articulator against another"});
	$(".row4 #col0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Sound made using a brief but complete closure of the vocal tract"});
	$(".row5 #col0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Sound made by narrowing the vocal tract enough to cause turbulent airflow"});
	$(".row6 #col0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "A fricative where the airflow is blocked centrally and escapes sideways"});
	$(".row7 #col0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Sound made by narrowing the vocal tract, but not enough to cause turbulent airflow"});
	$(".row8 #col0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "An approximant where the airflow escapes sideways and is blocked centrally"});
	 
});
