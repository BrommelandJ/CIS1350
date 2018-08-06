"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Jacob Brommeland
   Date:   11/9/2017

	
*/

var thisDay = new Date("August 30, 2018");
var tableHTML ;
tableHTML = '<table id="eventTable">';
tableHTML += "<caption>Upcoming Events </caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr><tr>";
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

for (var i=0 ; i < eventDates.length ; i++ )
{
	var eventDate = new Date(eventDates[i]);
	var eventDay = eventDate.toDateString();
	var eventTime = eventDate.toLocaleTimeString();	
	
	if( thisDay <= eventDate && eventDate <= endDate)
	{
		tableHTML += "<tr>";
		tableHTML += "<td>" + eventDay + "@" 		+ eventTime + "</td>";
		tableHTML += "<td>" + eventDescriptions[i] 				+ "</td>";
		tableHTML += "<td>" + eventPrices[i] 					+ "</td>";
		tableHTML += "</tr>";
	}
	
}

	tableHTML += '</table>';

document.getElementById("eventList").innerHTML = tableHTML;


