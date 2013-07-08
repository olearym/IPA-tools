var IPANonPulmonic = (function(){
	var exports = {};

	// Fill a specificied div within IPANonPulmonic.html with an html table containing the nonpulmonic consanants
	// Each element within the table has an audio player already attached to it
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
		$(div).css("margin-top", "100px");
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
	$(".labels").hover(function(){
	target = $(this);
	target.css("background-color", "#96c4d3");
	// target.css("color", "white");
	}, function(){
	target = $(this);
	target.css("background-color", "white");
	target.css("color", "black");
	});

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
	