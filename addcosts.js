var dollar = "$"
var space = " ";
var perweek = "/week"
var bracket1 = "("
var bracket2 = ")"
var b = localStorage.getItem("myValue");
var food = localStorage.getItem("food");
var trasportationvalue = localStorage.getItem("transportation");
var healthcarevalue = localStorage.getItem("healthcare");
var insurancevalue = localStorage.getItem("insurance");
var otherexpenses = localStorage.getItem("otherexpenses");

function gotoaddcost(){


var cost = document.getElementById("description").value;
var description = document.getElementById("description2").value;

var getcheckeditem = document.querySelector('input[name="item"]:checked').value;
var sendcost = localStorage.setItem("cost", cost)
var sendescription = localStorage.setItem("description", description);
var sendcheckeditem = localStorage.setItem("sendcheckeditem", getcheckeditem);
if (cost.indexOf('1') > -1 || cost.indexOf('2') > -1 || cost.indexOf('3') > -1 || cost.indexOf('4') > -1 || cost.indexOf('5') > -1 || cost.indexOf('6') > -1 || cost.indexOf('7') > -1 || cost.indexOf('8') > -1 || cost.indexOf('9') > -1 || cost.indexOf('0') > -1)
{
  if (getcheckeditem == "Housing"){
b = b-cost;
var housing = dollar+b+space+bracket1+dollar+Math.floor(b/52)+perweek+bracket2;
var housing1 = localStorage.setItem("housing1", housing);
  var sendb = localStorage.setItem("b", b)

  	if (b<=0){

  		alert("You have gone over your budget");
  	}
  }



  if (getcheckeditem == "Food"){

  	food = food-cost;
  	var sendfood = dollar+food+space+bracket1+dollar+Math.floor(food/52)+perweek+bracket2;;
var sendfood1 = localStorage.setItem("sendfood1", sendfood);
var sendf = localStorage.setItem("sendf", food);
	if (food<=0){

  		alert("You have gone over your budget");
  	}
  }

  if (getcheckeditem == "Transportation"){

  	trasportationvalue = trasportationvalue-cost;

  	var sendtransportation = dollar+trasportationvalue+space+bracket1+dollar+Math.floor(trasportationvalue/52)+perweek+bracket2;;
var sendtransportation1 = localStorage.setItem("sendtransportation1", sendtransportation)

var sendt = localStorage.setItem("sendt", trasportationvalue);
	if (trasportationvalue<=0){

  		alert("You have gone over your budget");
  	}
  }

  if (getcheckeditem == "Healthcare"){

  	healthcarevalue = healthcarevalue-cost;
  var sendhealthcare = dollar+healthcarevalue+space+bracket1+dollar+Math.floor(healthcarevalue/52)+perweek+bracket2;
var sendhealthcare1 = localStorage.setItem("sendhealthcare1", sendhealthcare);

var sendh = localStorage.setItem("sendh", healthcarevalue);
	if (healthcarevalue<=0){

  		alert("You have gone over your budget");
  	}
  }

  if (getcheckeditem == "Insurance"){

  	insurancevalue = insurancevalue-cost; 
var sendinsurance = dollar+insurancevalue+space+bracket1+dollar+Math.floor(insurancevalue/52)+perweek+bracket2;
var sendinsurance1 = localStorage.setItem("sendinsurance1", sendinsurance);
var sendi = localStorage.setItem("sendi", insurancevalue)
	if (insurancevalue<=0){

  		alert("You have gone over your budget");
  	}

  }

  if (getcheckeditem == "Other Expenses"){
otherexpenses = otherexpenses-cost;
var sendotherexpenses = dollar+otherexpenses+space+bracket1+dollar+Math.floor(otherexpenses/52)+perweek+bracket2;
var sendotherexpenses1 = localStorage.setItem("sendotherexpenses1", sendotherexpenses)
var sendo = localStorage.setItem("sendo", otherexpenses)
	if (otherexpenses<=0){

  		alert("You have gone over your budget");
  	}

  }

	
}else{

	alert("Please Enter Only Numbers, Do Not Include The Dollar Symbol");
}

}

function getaccountdata() {

  
window.location.href="savedresultsofform.html";
}
