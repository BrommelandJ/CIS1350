"use strict";

/*
   Event Timer
   Author: Jacob Brommeland
   Date:   11/2/2017

*/

showClock();
setInterval("showClock()" , 1000); // step 7

function showClock()
{//start of function showDate
	/* Store the current Data and Time */
	var thisDay = new Date();
	var localDate = thisDay.toLocaleDateString();
	var localTime = thisDay.toLocaleTimeString();
	
	// Display Current Date and Time		
	document.getElementById("currentTime").innerHTML = 
	"<span>" + localDate + "</span>" +
	"<span>" + localTime + "</span>";
	
		
	var j4Date = nextJuly4(thisDay);
	j4Date.setHours(21);
	
	// calculations
	var days = (j4Date - thisDay ) / (1000 * 60 * 60 * 24) ;
	var hrs  = (days - Math.floor(days)) * 24 ;
	var mins = (hrs - Math.floor(hrs)) * 60 ;
	var secs = (mins - Math.floor(mins)) * 60 ;
	
	// Display counter	
	document.getElementById("dLeft").textContent = Math.floor(days);
	document.getElementById("hLeft").textContent = Math.floor(hrs);
	document.getElementById("mLeft").textContent = Math.floor(mins);
	document.getElementById("sLeft").textContent = Math.floor(secs);
	
}//end of function showDate

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

