
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

var charsToCodes = {"æ": "&#230",
 "ç": "&#231",
 "ð": "&#240",
 "ø": "&#248",
 "ħ": "&#295",
 "ŋ": "&#331",
 "œ": "&#339",
 "ǀ": "&#448",
 "ǁ": "&#449",
 "ǂ": "&#450",
 "ǃ": "&#451",
 "ɐ": "&#592",
 "ɑ": "&#593",
 "ɒ": "&#594",
 "ɓ": "&#595",
 "ɔ": "&#596",
 "ɕ": "&#597",
 "ɖ": "&#598",
 "ɗ": "&#599",
 "ɘ": "&#600",
 "ə": "&#601",
 "ɚ": "&#602",
 "ɛ": "&#603",
 "ɜ": "&#604",
 "ɝ": "&#605",
 "ɞ": "&#606",
 "ɟ": "&#607",
 "ɠ": "&#608",
 "ɡ": "&#609",
 "ɢ": "&#610",
 "ɣ": "&#611",
 "ɤ": "&#612",
 "ɥ": "&#613",
 "ɦ": "&#614",
 "ɧ": "&#615",
 "ɨ": "&#616",
 "ɪ": "&#618",
 "ɫ": "&#619",
 "ɬ": "&#620",
 "ɭ": "&#621",
 "ɮ": "&#622",
 "ɯ": "&#623",
 "ɰ": "&#624",
 "ɱ": "&#625",
 "ɲ": "&#626",
 "ɳ": "&#627",
 "ɴ": "&#628",
 "ɵ": "&#629",
 "ɶ": "&#630",
 "ɸ": "&#632",
 "ɹ": "&#633",
 "ɺ": "&#634",
 "ɻ": "&#635",
 "ɽ": "&#637",
 "ɾ": "&#638",
 "ʀ": "&#640",
 "ʁ": "&#641",
 "ʂ": "&#642",
 "ʃ": "&#643",
 "ʄ": "&#644",
 "ʈ": "&#648",
 "ʉ": "&#649",
 "ʊ": "&#650",
 "ʋ": "&#651",
 "ʌ": "&#652",
 "ʍ": "&#653",
 "ʎ": "&#654",
 "ʏ": "&#655",
 "ʐ": "&#656",
 "ʑ": "&#657",
 "ʒ": "&#658",
 "ʔ": "&#660",
 "ʕ": "&#661",
 "ʘ": "&#664",
 "ʙ": "&#665",
 "ʛ": "&#667",
 "ʜ": "&#668",
 "ʝ": "&#669",
 "ʟ": "&#671",
 "ʡ": "&#673",
 "ʢ": "&#674",
 "ʤ": "&#676",
 "ʧ": "&#679",
 "β": "&#946",
 "θ": "&#952",
 "χ": "&#967",
 "ⱱ": "&#113"}

var charsToLinks = [{'char': "a", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "aː", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "b", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg", "row": 1, "column": 2, "decCode": ""},
{'char': "c", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/5d/Voiceless_palatal_plosive.ogg", "row": 1, "column": 13, "decCode": ""},
{'char': "dz", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d8/Voiced_alveolar_sibilant_affricate.oga", "row": "", "column": "", "decCode": ""},
{'char': "d", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg", "row": 1, "column": 8, "decCode": ""},
{'char': "dʐ", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/58/Voiced_retroflex_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "dʑ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c1/Voiced_alveolo-palatal_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "dʒ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e6/Voiced_palato-alveolar_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "e", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "eː", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "f", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/33/Voiceless_labiodental_fricative.ogg", "row": 5, "column": 3, "decCode": ""},
{'char': "h", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/da/Voiceless_glottal_fricative.ogg", "row": 5, "column": 21, "decCode": ""},
{'char': "i", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "iː", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "j", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg", "row": 7, "column": 14, "decCode": ""},
{'char': "k", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg", "row": 1, "column": 15, "decCode": ""},
{'char': "l", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg", "row": 8, "column": 8, "decCode": ""},
{'char': "m", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg", "row": 2, "column": 2, "decCode": ""},
{'char': "n", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg", "row": 2, "column": 8, "decCode": ""},
{'char': "o", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "oː", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "p", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg", "row": 1, "column": 1, "decCode": ""},
{'char': "q", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/19/Voiceless_uvular_plosive.ogg", "row": 1, "column": 17, "decCode": ""},
{'char': "r", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/ce/Alveolar_trill.ogg", "row": 3, "column": 8, "decCode": ""},
{'char': "s", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg", "row": 5, "column": 7, "decCode": ""},
{'char': "ts", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/9d/Voiceless_alveolar_sibilant_affricate.oga", "row": "", "column": "", "decCode": ""},
{'char': "t", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg", "row": 1, "column": 7, "decCode": ""},
{'char': "tɕ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c4/Voiceless_alveolo-palatal_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "tʂ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e9/Voiceless_retroflex_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "tʃ", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/97/Voiceless_palato-alveolar_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "u", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "uː", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "v", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/85/Voiced_labiodental_fricative.ogg", "row": 5, "column": 4, "decCode": ""},
{'char': "w", 'url': "http://upload.wikimedia.org/wikipedia/commons/f/f2/Voiced_labio-velar_approximant.ogg", "row": 7, "column": "", "decCode": ""},
{'char': "x", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_velar_fricative.ogg", "row": 5, "column": 15, "decCode": ""},
{'char': "y", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "yː", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "z", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg", "row": 5, "column": 8, "decCode": ""},
{'char': "ä", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/50/Open_central_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "æ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c9/Near-open_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ç", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/ab/Voiceless_palatal_fricative.ogg", "row": 5, "column": 13, "decCode": ""},
{'char': "ð", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/6a/Voiced_dental_fricative.ogg", "row": 5, "column": 6, "decCode": ""},
{'char': "ø", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "øː", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ħ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b2/Voiceless_pharyngeal_fricative.ogg", "row": 5, "column": 19, "decCode": ""},
{'char': "ŋ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/39/Velar_nasal.ogg", "row": 2, "column": 16, "decCode": ""},
{'char': "œ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "œː", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "œ̃", 'url': "No link found", "decCode": ""},
{'char': "ǀ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/1f/Dental_click.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ǁ", 'url': "http://upload.wikimedia.org/wikipedia/commons/f/f4/Alveolar_lateral_click.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ǃ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/3c/Postalveolar_click.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɐ", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/22/Near-open_central_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɑ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɑː", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɑ̃", 'url': "No link found", "decCode": ""},
{'char': "ɒ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/0a/Open_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɓ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/31/Voiced_bilabial_implosive.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɔ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/02/Open-mid_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɔː", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/02/Open-mid_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɔ̃", 'url': "No link found", "decCode": ""},
{'char': "ɕ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/0b/Voiceless_alveolo-palatal_sibilant.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɖ", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_retroflex_stop.oga", "row": 1, "column": 12, "decCode": ""},
{'char': "ɗ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c3/Voiced_alveolar_implosive.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ə", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɚ", 'url': "No link found", "decCode": ""},
{'char': "ɛ", 'url': "http://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɛ̃", 'url': "No link found", "decCode": ""},
{'char': "ɜ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/01/Open-mid_central_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɝ", 'url': "No link found", "decCode": ""},
{'char': "ɟ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/1d/Voiced_palatal_plosive.ogg", "row": 1, "column": 14, "decCode": ""},
{'char': "ɠ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/a8/Voiced_velar_implosive.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɡ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b4/Voiced_velar_plosive.ogg", "row": 1, "column": 16, "decCode": ""},
{'char': "ɢ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b6/Voiced_uvular_stop.oga", "row": 1, "column": 18, "decCode": ""},
{'char': "ɣ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/47/Voiced_velar_fricative.ogg", "row": 5, "column": 16, "decCode": ""},
{'char': "ɤ", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/26/Close-mid_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɥ", 'url': "http://upload.wikimedia.org/wikipedia/commons/f/fe/Labial-palatal_approximant.ogg", "row": 7, "column": "", "decCode": ""},
{'char': "ɦ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e2/Voiced_glottal_fricative.ogg", "row": 5, "column": 22, "decCode": ""},
{'char': "ɧ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/42/Voiceless_dorso-palatal_velar_fricative.ogg", "row": 5, "column": "", "decCode": ""},
{'char': "ɨ", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/53/Close_central_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɪ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/4c/Near-close_near-front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɫ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d3/Velarized_alveolar_lateral_approximant.ogg", "row": 8, "column": "", "decCode": ""},
{'char': "ɬ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/ea/Voiceless_alveolar_lateral_fricative.ogg", "row": 6, "column": 7, "decCode": ""},
{'char': "ɭ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d1/Retroflex_lateral_approximant.ogg", "row": 8, "column": 12, "decCode": ""},
{'char': "ɮ", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/6f/Voiced_alveolar_lateral_fricative.ogg", "row": 6, "column": 8, "decCode": ""},
{'char': "ɯ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e8/Close_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɰ", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/5c/Voiced_velar_approximant.ogg", "row": 7, "column": 16, "decCode": ""},
{'char': "ɱ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/18/Labiodental_nasal.ogg", "row": 2, "column": 4, "decCode": ""},
{'char': "ɲ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg", "row": 2, "column": 14, "decCode": ""},
{'char': "ɳ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/af/Retroflex_nasal.ogg", "row": 2, "column": 12, "decCode": ""},
{'char': "ɴ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/3e/Uvular_nasal.ogg", "row": 2, "column": 18, "decCode": ""},
{'char': "ɵ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b5/Close-mid_central_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɸ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/41/Voiceless_bilabial_fricative.ogg", "row": 5, "column": 1, "decCode": ""},
{'char': "ɹ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/1f/Alveolar_approximant.ogg", "row": 7, "column": 8, "decCode": ""},
{'char': "ɺ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/df/Alveolar_lateral_flap.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɻ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d2/Retroflex_approximant.ogg", "row": 7, "column": 12, "decCode": ""},
{'char': "ɽ", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/87/Retroflex_flap.ogg", "row": 4, "column": 12, "decCode": ""},
{'char': "ɾ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/a0/Alveolar_tap.ogg", "row": 4, "column": 8, "decCode": ""},
{'char': "ʀ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/cb/Uvular_trill.ogg", "row": 3, "column": 18, "decCode": ""},
{'char': "ʁ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg", "row": 5, "column": 18, "decCode": ""},
{'char': "ʂ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b1/Voiceless_retroflex_sibilant.ogg", "row": 5, "column": 11, "decCode": ""},
{'char': "ʃ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg", "row": 5, "column": 9, "decCode": ""},
{'char': "ʄ", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_palatal_implosive.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʈ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b0/Voiceless_retroflex_stop.oga", "row": 1, "column": 11, "decCode": ""},
{'char': "ʉ", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/66/Close_central_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʊ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d5/Near-close_near-back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʋ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/ee/Labiodental_approximant.ogg", "row": 7, "column": 4, "decCode": ""},
{'char': "ʌ", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/92/Open-mid_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʍ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/a7/Voiceless_labio-velar_fricative.ogg", "row": 5, "column": 15, "decCode": ""},
{'char': "ʎ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d9/Palatal_lateral_approximant.ogg", "row": 8, "column": 14, "decCode": ""},
{'char': "ʏ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e3/Near-close_near-front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʐ", 'url': "http://upload.wikimedia.org/wikipedia/commons/7/7f/Voiced_retroflex_sibilant.ogg", "row": 5, "column": 12, "decCode": ""},
{'char': "ʑ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/15/Voiced_alveolo-palatal_sibilant.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʒ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg", "row": 5, "column": 10, "decCode": ""},
{'char': "ʔ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/4d/Glottal_stop.ogg", "row": 1, "column": 21, "decCode": ""},
{'char': "ʕ", 'url': "http://upload.wikimedia.org/wikipedia/en/0/0c/Voiced_pharyngeal_fricative1.ogg", "row": 5, "column": 20, "decCode": ""},
{'char': "ʙ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e7/Bilabial_trill.ogg", "row": 3, "column": 2, "decCode": ""},
{'char': "ʝ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/ac/Voiced_palatal_fricative.ogg", "row": 5, "column": 14, "decCode": ""},
{'char': "ʰ", 'url': "No link found", "decCode": ""},
{'char': "ʲ", 'url': "No link found", "decCode": ""},
{'char': "ʷ", 'url': "No link found", "decCode": ""},
{'char': "β", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/37/Voiced_bilabial_fricative.ogg", "row": 5, "column": 2, "decCode": ""},
{'char': "θ", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/80/Voiceless_dental_fricative.ogg", "row": 5, "column": 5, "decCode": ""},
{'char': "χ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c8/Voiceless_uvular_fricative.ogg", "row": 5, "column": 17, "decCode": ""},
{'char': "L", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d3/Velar_lateral_approximant.ogg", "row": 8, "column": 16, "decCode": "&#671"},
{'char': "ⱱ", 'url': "https://upload.wikimedia.org/wikipedia/commons/2/2c/Labiodental_flap.ogg", "row": 4, "column": 4, "decCode": ""}]

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
$("tr .labels").hover(function(){
target = $(this);
target.css("background-color", "#96c4d3");
// target.css("color", "white");
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

$(".row1 #col0 .desc").popover({trigger: "hover", animation: false, placement: "left", content: "Complete obstruction followed by release"});
$(".row2 #col0 .desc").popover({trigger: "hover", animation: false, placement: "left", content: "Complete obstruction of the air flow in the mouth but with the velum open so that air can escape from the nose producing a humming sound"});
$(".row3 #col0 .desc").popover({trigger: "hover", animation: false, placement: "left", content: "Sound made by the rapid vibration of one articulator against another"});
$(".row4 #col0 .desc").popover({trigger: "hover", animation: false, placement: "left", content: "Sound made using a brief but complete closure of the vocal tract"});
$(".row5 #col0 .desc").popover({trigger: "hover", animation: false, placement: "left", content: "Sound made by narrowing the vocal tract enough to cause turbulent airflow"});
$(".row6 #col0 .desc").popover({trigger: "hover", animation: false, placement: "left", content: "A fricative where the airflow is blocked centrally and escapes sideways"});
$(".row7 #col0 .desc").popover({trigger: "hover", animation: false, placement: "left", content: "Sound made by narrowing the vocal tract, but not enough to cause turbulent airflow"});
$(".row8 #col0 .desc").popover({trigger: "hover", animation: false, placement: "left", content: "An approximant where the airflow escapes sideways and is blocked centrally"});
 
});