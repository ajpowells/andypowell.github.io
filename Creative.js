//alert("Welcome To My Skiing Page");
//function ItisaFunction() {
	//document.open();
	//document.write("<p>To Learn More, Please Feel Free To Contact Me</p>");
		
		
	//document.close();
//}
function WhatYearFunction() {
	var ByYear = document.getElementById("myInput").value;
	var text;
	if (ByYear <= 4) {
			text= "Close enough, Try Again";
	}
	else if (ByYear <= 6) {
		text="You got it";
	}
	else {
		text="Please enter an integer 0-6";
	}
	document.getElementById("Years").innerHTML = text;
	//document.getElementById("Time").style.display = "none";
	
}
function MoreInformation () {
	var Information = window.open("https://www.skimag.com/ski-resort-life/top-30-resorts-of-2019/", "MessageWindow", "width = 500, height=100");
	Information.document.write("Click Again To Access The Page");


	
}
