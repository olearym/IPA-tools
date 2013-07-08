var newArray = [];
$(whatever).each(function(){
	newArray.push({"char": character, "link": link})
})

$($('.wikitable')[0]).find('tr').find('big').map(function(){
	charList.push(this.innerText);
});

//charList now has all the characters: charList = [a, b, c, ...]

// Desired Result: push to newArray such that newArray will contain:
// newArray = [{"char": character, "link", link}]
// We now have means of getting a character, our charList now contains them all
// We need to use these characters to get the links associated with them, 

// ^^^ HOW ^^^

// 

chars = []
links = []
$($('.wikitable')[0]).find('tr').map(function() {
links.push($(this).find('.audiolink').find('a').prop('href'));
})

$($('.wikitable')[0]).find('tr').map(function() {
chars.push($(this).find('big').prop('innerText'));
})