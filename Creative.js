//alert("Welcome To My Page");
//function ItisaFunction() {
	//document.open();
	//document.write("<p>To Learn More, Please Feel Free To Contact Me</p>");
		
		
	//document.close();
//}
function WhatYearFunction() {
	var ByYear = document.getElementById("myInput").value;
	var text;
	if (ByYear <= 11) {
			text= "Close enough, Try Again";
	}
	else if (ByYear <= 12) {
		text="You got it";
	}
	else {
		text="Please enter an integer 0-12";
	}
	document.getElementById("Years").innerHTML = text;
	//document.getElementById("Time").style.display = "none";
	
}
function MoreInformation () {
	var Information = window.open("https://www.hplct.org/assets/uploads/files/backgrounder_bhutanese.pdf", "MessageWindow", "width = 500, height=100");
	Information.document.write("Click Again To Access The Page");


	
}

