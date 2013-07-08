$(document).ready(function(){
	$("#submit").on("click", function(){
		var input = /*"'" + */($(".IPAInput").val())/* + "'"*/; // The actual word that we will be looking up the pronunciation for
		$.ajax({
            async: true,
            url: "http://localhost:8080/",
            data: { word: input }
            
		}).done(function(msg) {
		   	console.log("input: " + input);

			var parser = new DOMParser();
		   
			var xmlDoc = parser.parseFromString(msg, "text/xml");

		   
			//access sound files and get correct URL
		   
			var wav = xmlDoc.getElementsByTagName("wav")[0].childNodes[0].nodeValue;
		   
			var wavURL = "http://media.merriam-webster.com/soundc11/"
		   
			if (wav.substring(0,3) == 'bix') {
		   
				wavURL += 'bix/'+wav;
		   
			} else if (wav.substring(0,2) == 'gg') {
		   
				wavURL += 'gg/'+wav;
		   
			} else if (parseInt(wav.substring(0,1)) == NaN) {
		   
				wavURL += 'number/'+wav;
		   
			} else {
		 
				wavURL += wav.substring(0,1)+"/"+wav;
		 
			}

		 
			//access pronunciation
		   
			var pro = xmlDoc.getElementsByTagName("pr")[0].childNodes[0].nodeValue;
		   
			console.log(wavURL);
		   
			console.log(pro);
			$(".proText").html(pro);
			$(".wordText").html(input);
			order = "document.getElementById('sound').play()"

			$('.audio').html('<audio id="sound" src='+wavURL+'></audio><div><button id = "button" class= "btn btn-info" onclick='+order+'>Click Me!</button></div>')
		});


	});
	$(".IPAInput").keydown(function(event){
		if(event.keyCode == 13){
			$("#submit").click();
		}
	});
	
});
