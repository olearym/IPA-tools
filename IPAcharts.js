var IPAPulmonic = (function(){
	var exports = {};
	var setupChart = function(div){
		var table = $("<table class ='table table-hover table-bordered'></table>");

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

		var r1col0 = $("<td id = 'col0'><div class = 'desc'>Plosive</div></td>");
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

		var r2col0 = $("<td id = 'col0'><div class = 'desc'>Nasal</div></td>");
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

		var r3col0 = $("<td id = 'col0'><div class = 'desc'>Trill</div></td>");
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

		var r4col0 = $("<td id = 'col0'><div class = 'desc'>Tap or Flap</div></td>");
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

		var r5col0 = $("<td id = 'col0'><div class = 'desc'>Fricative</div></td>");
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

		var r6col0 = $("<td id = 'col0'><div class = 'desc'>Lateral Fricative</div></td>");
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

		var r7col0 = $("<td id = 'col0'><div class = 'desc'>Approximant</div></td>");
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

		var r8col0 = $("<td id = 'col0'><div class = 'desc'>Lateral Approximant</div></td>");
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
		$(div).append(table);
		$(div).css("margin-top", "70px");

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
		[i].decCode = charsToCodes[cha];
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

	for (var x = 1; x <= 8; x++){
			for (var y = 1; y <= 22; y++) {
			var tempRow = x;
			var tempCol = y;
			var tempID = ".row" + tempRow + " " + "#col" + tempCol;
			if (tempCol % 2 == 0){
				$(tempID).css("border-left", "0px");
			} else {
				$(tempID).css("border-right", "0px");
			}
		}
	}
	for (var i = 0; i < keysList.length; i++){
		if (charsToLinks[i]["row"] !== undefined && charsToLinks[i]["column"] !== undefined) {

			var rowIndex = String(charsToLinks[i]["row"]);
			var colIndex = String(charsToLinks[i]["column"]);

			if (charsToLinks[i]["decCode"] != ""){
				var label = charsToLinks[i]["decCode"];
			} else {
				var label = charsToLinks[i]["char"];
			}
			var identifier = ".row" + rowIndex + " " + "#col" + colIndex;

			if ($(identifier).html() === ""){
			var audioID = "col"+colIndex+"row"+rowIndex;
			var order1 = 'document.getElementById("'+audioID+'").play()'
			var order2 = "$('#IPAQuiz-Sound').html('Sound:"+label+"')"
			var order3 = "$('#IPAQuiz-Play').empty()"
			var audio = $('<audio id='+audioID+' src='+'"'+charsToLinks[i].url+'"'+'></audio><div><button onclick='+order1+';'+order2+';'+order3+'>'+label+'</button></div>')
			$(identifier).html(audio);
			}
		}
	}

	// ---------------- Hover Functions --------------------//
	$("tr .labels").hover(function(){
			target = $(this);
			target.css("background-color", "#96c4d3");

		}, function(){
			target = $(this);
			target.css("background-color", "white");
			target.css("color", "black");
		});

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



var IPANonPulmonic = (function(){
	var exports = {};
	var setupChart = function(div){
		var table = $("<table class='np-consonants table table-hover table-bordered' border = 1></table>");
		var row0 = $("<tr class = 'np-row0'></tr>");
		var row1 = $("<tr class = 'np-row1'></tr>");
		var row2 = $("<tr class = 'np-row2'></tr>");
		var row3 = $("<tr class = 'np-row3'></tr>");
		var row4 = $("<tr class = 'np-row4'></tr>");
		var row5 = $("<tr class = 'np-row5'></tr>");

		var r0col1 = $("<td class = 'labels' id = 'clicks'><div id = 'clicksDiv'>Clicks</div></td>");
		var r0col2 = $("<td class = 'labels' id = 'voiced-implosives'><div id = 'voicedImplosivesDiv'>Voiced Implosives</div></td>");
		var r0col3 = $("<td class = 'labels' id = 'ejectives'><div id = 'ejectivesDiv'>Ejectives</div></td>");

		var r1col1 = $("<td id = 'np-col1'><audio id='bilabialClick' src='http://upload.wikimedia.org/wikipedia/commons/2/2b/Clic_bilabial_sourd.ogg'></audio><div><button id = 'button' >&#664</button></div>Bilabial</td>");
		var r1col2 = $("<td id = 'np-col2'><audio id='bilabialImplosive' src='http://upload.wikimedia.org/wikipedia/commons/3/31/Voiced_bilabial_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('bilabialClick').play()'>&#595</button></div>Bilabial</td>");
		var r1col3 = $("<td id = 'np-col3'><div><button id = 'button'>'</button></div>Examples:</td>");

		var r2col1 = $("<td id = 'np-col1'><audio id='dentalClick' src='http://upload.wikimedia.org/wikipedia/commons/2/2b/Clic_bilabial_sourd.ogg'></audio><div><button id = 'button' onclick='document.getElementById('dentalClick').play()'>&#448</button></div>Dental</td>");
		var r2col2 = $("<td id = 'np-col2'><audio id='dentalImplosive' src='http://upload.wikimedia.org/wikipedia/commons/c/c3/Voiced_alveolar_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('dentalImplosive').play()'>&#599</button></div>Dental/alveolar</td>");
		var r2col3 = $("<td id = 'np-col3'><audio id='bilabialEjective' src='http://upload.wikimedia.org/wikipedia/commons/6/64/Bilabial_ejective_plosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('bilabialEjective').play()'>p'</button></div>Bilabial</td>");

		var r3col1 = $("<td id = 'np-col1'><audio id='postalveolarClick' src='http://upload.wikimedia.org/wikipedia/commons/3/3c/Postalveolar_click.ogg'></audio><div><button id = 'button' onclick='document.getElementById('postalveolarClick').play()'>&#451</button></div>(Post)alveolar</td>");
		var r3col2 = $("<td id = 'np-col2'><audio id='palatalImplosive' src='http://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_palatal_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('palatalImplosive').play()'>&#644</button></div>Palatal</td>");
		var r3col3 = $("<td id = 'np-col3'><audio id='dentalEjective' src='http://upload.wikimedia.org/wikipedia/commons/d/d7/Alveolar_ejective_plosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('dentalEjective').play()'>t'</button></div>Dental/alveolar</td>");

		var r4col1 = $("<td id = 'np-col1'><audio id='palatoalveolarClick' src='http://upload.wikimedia.org/wikipedia/commons/8/89/Palatoalveolar_click.ogg'></audio><div><button id = 'button' onclick='document.getElementById('palatoalveolarClick').play()'>&#450</button></div>Palatoalveolar</td>");
		var r4col2 = $("<td id = 'np-col2'><audio id='velarImplosive' src='http://upload.wikimedia.org/wikipedia/commons/a/a8/Voiced_velar_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('velarImplosive').play()'>&#608</button></div>Velar</td>");
		var r4col3 = $("<td id = 'np-col3'><audio id='velarEjective' src='http://upload.wikimedia.org/wikipedia/commons/a/a0/Velar_ejective_plosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('velarEjective').play()'>k'</button></div>Velar</td>");

		var r5col1 = $("<td id = 'np-col1'><audio id='alveolarLateral' src='http://upload.wikimedia.org/wikipedia/commons/f/f4/Alveolar_lateral_click.ogg'></audio><div><button id = 'button' onclick='document.getElementById('alveolarLateral').play()'>&#449</button></div>Alveolar lateral</td>");
		var r5col2 = $("<td id = 'np-col2'><audio id='uvularImplosive' src='http://upload.wikimedia.org/wikipedia/commons/0/00/Voiced_uvular_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('uvularImplosive').play()'>&#667</button></div>Uvular</td>");
		var r5col3 = $("<td id = 'np-col3'><audio id='fricativeEjective' src='http://upload.wikimedia.org/wikipedia/commons/7/7c/Alveolar_ejective_fricative.ogg'></audio><div><button id = 'button' onclick='document.getElementById('fricativeEjective').play()'>s'</button></div>Alveolar fricative</td>");

		$(row0).append(r0col1, r0col2, r0col3);
		$(row1).append(r1col1, r1col2, r1col3);
		$(row2).append(r2col1, r2col2, r2col3);
		$(row3).append(r3col1, r3col2, r3col3);
		$(row4).append(r4col1, r4col2, r4col3);
		$(row5).append(r5col1, r5col2, r5col3);

		$(table).append(row0, row1, row2, row3, row4, row5);
		$(div).append(table);
		$(div).css("margin-top", "70px");
	}
	exports.setupChart = setupChart;
	return exports;
}());

$(document).ready(function(){
	$(".IPANonPulmonic").each(function(){
	IPANonPulmonic.setupChart(this);
	})
});

$(document).ready(function(){
	$ (".np-consonants #clicksDiv").popover({trigger: "hover", animation: false, placement: "top", content: "Clicks are made by creating a suction-like pressure in the mouth which is suddenly released, drawing air into the mouth.  The place of articulation is where the pressure/release occurs."});
	$(".np-consonants #voicedImplosivesDiv").popover({trigger: "hover", animation: false, placement: "top", content: "Voiced implosives are made with an inward moving airstream which is formed by suction created by the downward movement of the larynx while another complete stop/obstruction is held further forward in the mouth."});
	$(".np-consonants #ejectivesDiv").popover({trigger: "hover", animation: false, placement: "top", content: "Ejectives are made by squeezing air trapped between the glottis and closure that is further forward in the mouth, and releasing it suddenly or through a brief fricative-like action."});

	$(".np-row1 #np-col1 button").on("click", function(){ document.getElementById("bilabialClick").play();});
	$(".np-row1 #np-col2 button").on("click", function(){ document.getElementById("bilabialImplosive").play();});
	//$(".np-row1 #np-col3 button").on("click", function(){ document.getElementById("bilabialClick").play();});

	$(".np-row2 #np-col1 button").on("click", function(){ document.getElementById("dentalClick").play();});
	$(".np-row2 #np-col2 button").on("click", function(){ document.getElementById("dentalImplosive").play();});
	$(".np-row2 #np-col3 button").on("click", function(){ document.getElementById("bilabialEjective").play();});

	$(".np-row3 #np-col1 button").on("click", function(){ document.getElementById("postalveolarClick").play();});
	$(".np-row3 #np-col2 button").on("click", function(){ document.getElementById("palatalImplosive").play();});
	$(".np-row3 #np-col3 button").on("click", function(){ document.getElementById("dentalEjective").play();});

	$(".np-row4 #np-col1 button").on("click", function(){ document.getElementById("palatoalveolarClick").play();});
	$(".np-row4 #np-col2 button").on("click", function(){ document.getElementById("velarImplosive").play();});
	$(".np-row4 #np-col3 button").on("click", function(){ document.getElementById("velarEjective").play();});

	$(".np-row5 #np-col1 button").on("click", function(){ document.getElementById("alveolarLateral").play();});
	$(".np-row5 #np-col2 button").on("click", function(){ document.getElementById("uvularImplosive").play();});
	$(".np-row5 #np-col3 button").on("click", function(){ document.getElementById("fricativeEjective").play();});


});
 
var IPAVowels = (function(){
	var exports = {};
	var setup = function(div){
		/*function DrawLine(x1, y1, x2, y2){

		    if(y1 < y2){
		        var pom = y1;
		        y1 = y2;
		        y2 = pom;
		        pom = x1;
		        x1 = x2;
		        x2 = pom;
		    }

		    var a = Math.abs(x1-x2);
		    var b = Math.abs(y1-y2);
		    var c;
		    var sx = (x1+x2)/2 ;
		    var sy = (y1+y2)/2 ;
		    var width = Math.sqrt(a*a + b*b ) ;
		    var x = sx - width/2;
		    var y = sy;

		    a = width / 2;

		    c = Math.abs(sx-x);

		    b = Math.sqrt(Math.abs(x1-x)*Math.abs(x1-x)+Math.abs(y1-y)*Math.abs(y1-y) );

		    var cosb = (b*b - a*a - c*c) / (2*a*c);
		    var rad = Math.acos(cosb);
		    var deg = (rad*180)/Math.PI

		    htmlns = "http://www.w3.org/1999/xhtml";
		    div = document.createElementNS(htmlns, "div");
		    div.setAttribute('style','border:1px solid black;width:'+width+'px;height:0px;-moz-transform:rotate('+deg+'deg);-webkit-transform:rotate('+deg+'deg);position:absolute;top:'+y+'px;left:'+x+'px;');   

		    document.getElementById("myElement").appendChild(div);

		}*/
		var table = $("<table class = 'table table-hover'></table>");

		/*For the first row, we manually add the labels because they span multiple columns, and thus would not work with the for loop*/
		var row0 = $("<tr id = 'Vrow0'></tr>");
		var emptyLabel1 = $("<td class = 'empty1'></td>");

		var frontLabel = $("<td class = 'tableLabel' id = 'Vcol1' colspan = '3' style = 'text-align: center'><div class = 'desc'>Front</div></td>");
		var nearFrontLabel = $("<td class = 'tableLabel' id = 'Vcol2' colspan = '3' style = 'text-align: center'><div class = 'desc'>Near-front</div></td>");
		var centralLabel = $("<td class = 'tableLabel' id = 'Vcol3' colspan = '3' style = 'text-align: center'><div class = 'desc'>Central</div></td>");
		var nearBackLabel = $("<td class = 'tableLabel' id = 'Vcol4' colspan = '3' style = 'text-align: center'><div class = 'desc'>Near-back</div></td>");
		var backLabel = $("<td class = 'tableLabel' id = 'Vcol5' colspan = '3' style = 'text-align: center'><div class = 'desc'>Back</div></td>");
		/*var firstEmptyLabel3 = $("<td class = 'empty3' colspan = '3'></td>");
		var secondEmptyLabel3 = $("<td class = 'empty3' colspan = '3'></td>");*/ // Needed to make 2 variables with the same data, because append will not read duplicates

		row0.append(emptyLabel1, frontLabel, nearFrontLabel, centralLabel, nearBackLabel, backLabel);
		table.append(row0);

		/*DrawLine(100, 100, 500, 500);*/

		/*-------For loop adds columns to rows-------*/

		for (var r = 1; r <= 7; r++){ // Adds rows and columns to table, initially with no content
			var newRow = $("<tr id = 'Vrow" + r + "'></tr>");
			for (var c = 0; c <= 15; c++){
				var rowID = "#Vrow" + r;

				/*if statement applies the row labels*/
				if (c == 0){
					var newCol = $("<td class = 'tableLabel' id = 'Vcol" + c + "'></td>");
					if (r == 1){

						newCol.append("<div class = 'desc'>Close</div>");
					}else if (r == 2){
						newCol.append("<div class = 'desc'>Near-Close</div>");
					}else if (r == 3){
						newCol.append("<div class = 'desc'>Close-Mid</div>");
					}else if (r == 4){
						newCol.append("<div class = 'desc'>Mid</div>");
					}else if (r == 5){
						newCol.append("<div class = 'desc'>Open-Mid</div>");
					}else if (r == 6){
						newCol.append("<div class = 'desc'>Near-Open</div>");
					}else if (r == 7){
						newCol.append("<div class = 'desc'>Open</div>");
					}
				}else{
				var newCol = $("<td id = 'Vcol" + c + "'></td>");
				}
				newRow.append(newCol);
			}
			table.append(newRow);
		}
		$(div).append(table);
		$(div).css("margin-top", "30px");

	}

	exports.setup = setup;
	return exports
}());

$(document).ready(function(){
		$(".IPAVowels").each(function(){
			IPAVowels.setup(this);
		});

	// for loop adds decCodes if they exist to the charsToLinks data
	for ( var i = 0; i < charsToLinks.length; i++ ) {
		cha = charsToLinks[i].char;
		if (!(charsToCodes[cha] == undefined)) {
			charsToLinks[i].VdecCode = charsToCodes[cha];
		}
	}

	// Here we simply make a list of keys from charsToLinks.  This list contains the symbols
	var keyList = [];
	for (var key in charsToLinks){
		if (charsToLinks.hasOwnProperty(key)){
			keyList.push(key);
		}
	}

	for (var i = 0; i < keyList.length; i++){ // Adds content to the cells of the table

		if (charsToLinks[i]["Vrow"] !== undefined && charsToLinks[i]["Vcolumn"] !== undefined){

			var rowIndex = String(charsToLinks[i]["Vrow"]);
			var colIndex = String(charsToLinks[i]["Vcolumn"]);

			if (charsToLinks[i]["VdecCode"] != ""/* || charsToLinks[i]["VdecCode"] !== undefined*/){
				var label = charsToLinks[i]["VdecCode"];

			} else {
				var label = charsToLinks[i]["char"];

			}
			var identifier = "#Vrow" + rowIndex + " " + "#Vcol" + colIndex;

			if ($(identifier).html() === ""){
				var audioID = "Vcol"+colIndex+"Vrow"+rowIndex;
				var order1 = 'document.getElementById("'+audioID+'").play()'
				var order2 = "$('#IPAQuiz-Sound').html('Sound:"+label+"')"
				var order3 = "$('#IPAQuiz-Play').empty()"
				var audio = $('<audio id='+audioID+' src='+'"'+charsToLinks[i].url+'"'+'></audio><div><button onclick='+order1+';'+order2+';'+order3+'>'+label+'</button></div>')
				$(identifier).html(audio);

			}
		}
	}

	$(".tablelabel").hover(function(){ // Gives labels a blue background upon hover
		target = $(this);
		target.css("background-color", "#96c4d3");
		// target.css("color", "white");
	}, function(){
		target = $(this);
		target.css("background-color", "white");
		target.css("color", "black");
	});

	$("#Vrow0 #Vcol1 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the highest point of the tongue arching toward the front of the mouth, below the hard palate"});
	$("#Vrow0 #Vcol2 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the highest point of the tongue placed between front and central vowels"});
	$("#Vrow0 #Vcol3 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the highest point of the tongue close to the center of the mouth, between the front and back vowels"});
	$("#Vrow0 #Vcol4 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the highest point of the tongue placed between central and back vowels"});
	$("#Vrow0 #Vcol5 .desc").popover({trigger: "hover", animation: false, placement: "top", content: "Articulated with the highest point of the tongue drawn back toward the back of the mouth, below the soft palate"});

	$("#Vrow1 #Vcol0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Articulated with the jaw relatively closed and the highest point of the tongue close to the roof of the mouth"});
	$("#Vrow2 #Vcol0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Articulated with the jaw slightly open, and the highest point of the tongue almost at the roof of the mouth"});
	$("#Vrow3 #Vcol0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Articulated with the jaw at the midpoint between closed and the middle of the mouth"});
	$("#Vrow4 #Vcol0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Articulated with the jaw halfway open and the tongue positioned mid-way between open and closed vowels"});
	$("#Vrow5 #Vcol0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Articulated with the jaw and tongue halfway between the midpoint of the mouth and fully open"});
	$("#Vrow6 #Vcol0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Articulated with the jaw and tongue slightly more constricted than that of an open vowel"});
	$("#Vrow7 #Vcol0 .desc").popover({trigger: "hover", animation: false, placement: "bottom", content: "Articulated with the jaw relatively open and the highest point of the tongue far from the roof of the mouth"});
});