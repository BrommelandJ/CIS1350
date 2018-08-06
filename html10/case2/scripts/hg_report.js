"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Jacob Brommeland
   Date:   11/9/2017
   
   Filename: hg_report.js
	
*/


var gameReport;

gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2> By: " + itemManufacturer + "</h2>";
gameReport += '<img src="images/hg_' + itemID + '.png" alt="' + itemID + ' "id = gameImg" />';
gameReport += "<table>";
gameReport += "<tr><th>Product ID </th><td>" 	+ itemID 		+ "</td></tr>";
gameReport += "<tr><th>List Price </th><td>" 	+ itemPrice 	+ "</td></tr>";
gameReport += "<tr><th>Platform </th><td>" 		+ itemPlatform 	+ "</td></tr>";
gameReport += "<tr><th>ESRB Rating </th><td>" 	+ itemESRB 		+ "</td></tr>";
gameReport += "<tr><th>Condition </th><td>"		+ itemCondition + "</td></tr>";
gameReport += "<tr><th>Release </th><td>" 		+ itemRelease 	+ "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;
//Display article stuff
/*
	 
*/
document.getElementsByTagName("article")[0].innerHTML = gameReport;
var ratingSum = 0;
var ratingsCount = ratings.length;

for (var index = 0 ; index < ratingsCount ; index++  )
{
	ratingSum += ratings[index];
	
}
var ratingAVG = (ratingSum / ratingsCount);
var ratingReport;

	ratingReport =	"<h1>Customer Reviews</h1>";
	ratingReport +=	"<h2>" + ratingAVG + " out of 5 stars " + ratingsCount + " reviews </h2>";

for (var index = 0; index <3 ; index++ )
{//outer loop
	ratingReport += '<div class ="review">';
	ratingReport += '<h1>' + ratingTitles[index] + '</h1>';
	ratingReport += "<table>";
	ratingReport += "<tr><th>By </th><td>" 			+ ratingAuthors[index] 	+ "</td></tr>";
	ratingReport += "<tr><th>Review Date </th><td>" + ratingDates[index] 	+ "</td></tr>";
	ratingReport += "<tr><th>Platform </th><td>";
	
	for(var i = 1 ; i < ratings[index]; i++)
	{
		ratingReport += '<img src="images/hg_star.png" />';
	}
	
	ratingReport += "</td></tr>";
	ratingReport += "</table>";
	ratingReport += ratingSummaries[index];
	ratingReport += "</div>";
}

	document.getElementsByTagName("aside")[0].innerHTML = ratingReport;











