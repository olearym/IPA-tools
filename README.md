MITx Project 1
==============

IPA Learning Tools
------------------

###Introduction

The IPA Learning Tools contain three modules for use in learning the 
International Phonetic Alphabet. There is an interactive table of IPA
symbols and sounds, a module which converts many common English words
to their IPA representations, and a small quiz module for learning the
IPA symbols and sounds present in the English language. Each module can
be used as a standalone object.

List of files:
IPAapp.css
IPAdata.js
IPAconverter.js
IPAquiz.js
IPAcharts.js

###Embedding Instructions

All of the files are located in the IPA-Interface directory within the MITx-Project-1 repository.
Save all the files to a folder of your choice, just make sure you know where.

To use any of the three modules, you need the IPAdata.js file. This contains
information used by all of the modules to connect sound to the IPA characters and provides a list of 
IPA characters to be used in the quiz module.
The IPAdata.js file should be included in a script tag in the head of your HTML file before 
any other IPA tool files.
Make sure to also include the IPAapp.css file as a stylesheet in your HTML file. You can edit this css file
to change the visual properties of all the modules. A pasteable version of all of the tags you need to include
in your HTML file is available at the end of this section.

To embed the IPA tables:
Each of the three available tables can be used separately.
To place a table, create a div in your HTML file with one of the following
classes: "IPAPulmonic", "IPANonPulmonic", "IPAVowels"
In the head of your HTML file, add a script tag with the source being the path
to IPAcharts.js. Make sure that the script tag for the IPAdata.js file
is included in your HTML file and comes before the script tag for IPAcharts.js.

To embed the IPA converter:
In the head of your HTML file, add a script tag:
script src="IPAconverter.js
In the body of your document, place a div with the class "IPAConverter"
wherever you want the IPA converter to be.

To embed the IPA quiz:
In the head of your HTML file, add a script tag:
script src="IPAquiz.js
In the body of your document, place a div with the class "IPAQuiz"
wherever you want the quiz module to be.

Pastable HTML tags (you need all of these.):
	
	<META http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<script src="IPAdata.js"></script>
	<script src="IPAconverter.js"></script>
	<script src="IPAcharts.js"></script>
	<script src="IPAquiz.js"></script>
	<script src = "js/bootstrap.min.js"></script>
	<link href = "css/bootstrap.css" rel = "stylesheet"></link>
	<link href = "IPAapp.css" rel = "stylesheet"></link>

###Interactions Between Modules

IPA Converter and IPA Charts:
In the IPA Converter module, the user can enter a word and the application will return the IPA pronunciation
of the word and a sound file that will play the entire word. Within the IPA pronunciation, the user can hover
over individual symbols and they will be highlighted in the chart, if the charts are present on the page.

IPA Quiz and IPA Charts:
The IPA Quiz initially selects a random symbol from the English IPA to quiz the user over. However, if the IPA
charts are present on the page, the user can also click on a symbol in either the vowel chart or the pulmonic
consonant chart to change the quiz character. 
	
