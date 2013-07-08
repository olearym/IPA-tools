var IPAVowels = (function(){
	var exports = {};
	var setup = function(div){
		var table = $("<table class = 'table table-hover table-bordered'></table>");

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

		/*-------For loop adds columns to rows-------*/

		
		for (var r = 1; r <= 7; r++){ // Adds rows and columns to table, initially with no content
			var newRow = $("<tr id = 'Vrow" + r + "'></tr>");
			for (var c = 0; c <= 15; c++){
				var rowID = "#Vrow" + r;

				/*if statement applies the row labels*/
				if (c == 0){
					var newCol = $("<td class = 'tableLabel' id = 'Vcol" + c + "'></td>");
					if (r == 1){
						console.log("column 0 row 1 reached");
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
		 	console.log("man there should really be some symbols up there");
			var rowIndex = String(charsToLinks[i]["Vrow"]);
			var colIndex = String(charsToLinks[i]["Vcolumn"]);

			if (charsToLinks[i]["VdecCode"] != ""/* || charsToLinks[i]["VdecCode"] !== undefined*/){
				var label = charsToLinks[i]["VdecCode"];
				console.log(charsToLinks[i]["VdecCode"]);
			} else {
				var label = charsToLinks[i]["char"];
				console.log(charsToLinks[i]["char"]);
			}
			var identifier = "#Vrow" + rowIndex + " " + "#Vcol" + colIndex;
			 
			if ($(identifier).html() === ""){
				var audioID = "'"+"Vcol"+colIndex+"Vrow"+rowIndex+"'";
				var audio = $('<audio id='+audioID+' src='+'"'+charsToLinks[i].url+'"'+'></audio><div><button onclick="document.getElementById('+audioID+').play()">'+label+'</button></div>')
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
