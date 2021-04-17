
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
document.getElementById('message').innerHTML = dollar+b+space+bracket1+dollar+Math.floor(b/52)+perweek+bracket2;
document.getElementById('housing2').innerHTML = dollar+b;
document.getElementById('food').innerHTML = dollar+food+space+bracket1+dollar+Math.floor(food/52)+perweek+bracket2;;
document.getElementById('food2').innerHTML = dollar+food;
document.getElementById("transportation").innerHTML = dollar+trasportationvalue+space+bracket1+dollar+Math.floor(trasportationvalue/52)+perweek+bracket2;;
document.getElementById("transportation2").innerHTML = dollar+trasportationvalue;
document.getElementById("healthcare").innerHTML = dollar+healthcarevalue+space+bracket1+dollar+Math.floor(healthcarevalue/52)+perweek+bracket2;
document.getElementById("healthcare2").innerHTML = dollar+healthcarevalue;
document.getElementById("insurance").innerHTML = dollar+insurancevalue+space+bracket1+dollar+Math.floor(insurancevalue/52)+perweek+bracket2;
document.getElementById("insurance2").innerHTML = dollar+insurancevalue;
document.getElementById("otherexpenses").innerHTML= dollar+otherexpenses+space+bracket1+dollar+Math.floor(otherexpenses/52)+perweek+bracket2;
document.getElementById("otherexpenses2").innerHTML= dollar+otherexpenses
var resetValue = 0; 





function gotoaddcost(){


var cost = document.getElementById("description").value;
var getcheckeditem = document.querySelector('input[name="item"]:checked').value;

if (cost.indexOf('1') > -1 || cost.indexOf('2') > -1 || cost.indexOf('3') > -1 || cost.indexOf('4') > -1 || cost.indexOf('5') > -1 || cost.indexOf('6') > -1 || cost.indexOf('7') > -1 || cost.indexOf('8') > -1 || cost.indexOf('9') > -1 || cost.indexOf('0') > -1)
{
  if (getcheckeditem == "Housing"){
b = b-cost;
  	document.getElementById('message').innerHTML = dollar+b+space+bracket1+dollar+Math.floor(b/52)+perweek+bracket2;
  	document.getElementById('housing2').innerHTML = dollar+b;

  	if (b<=0){

  		alert("You have gone over your budget");
  	}
  }

  if (getcheckeditem == "Food"){

  	food = food-cost;
  	document.getElementById('food').innerHTML = dollar+food+space+bracket1+dollar+Math.floor(food/52)+perweek+bracket2;;
document.getElementById('food2').innerHTML = dollar+food;

	if (food<=0){

  		alert("You have gone over your budget");
  	}
  }

  if (getcheckeditem == "Transportation"){

  	trasportationvalue = trasportationvalue-cost;

  	document.getElementById("transportation").innerHTML = dollar+trasportationvalue+space+bracket1+dollar+Math.floor(trasportationvalue/52)+perweek+bracket2;;
document.getElementById("transportation2").innerHTML = dollar+trasportationvalue;
	if (trasportationvalue<=0){

  		alert("You have gone over your budget");
  	}
  }

  if (getcheckeditem == "Healthcare"){

  	healthcarevalue = healthcarevalue-cost;
  	document.getElementById("healthcare").innerHTML = dollar+healthcarevalue+space+bracket1+dollar+Math.floor(healthcarevalue/52)+perweek+bracket2;
document.getElementById("healthcare2").innerHTML = dollar+healthcarevalue;

	if (healthcarevalue<=0){

  		alert("You have gone over your budget");
  	}
  }

  if (getcheckeditem == "Insurance"){

  	insurancevalue = insurancevalue-cost; 
document.getElementById("insurance").innerHTML = dollar+insurancevalue+space+bracket1+dollar+Math.floor(insurancevalue/52)+perweek+bracket2;
document.getElementById("insurance2").innerHTML = dollar+insurancevalue;

	if (insurancevalue<=0){

  		alert("You have gone over your budget");
  	}

  }

  if (getcheckeditem == "Other Expenses"){
otherexpenses = otherexpenses-cost;
document.getElementById("otherexpenses").innerHTML= dollar+otherexpenses+space+bracket1+dollar+Math.floor(otherexpenses/52)+perweek+bracket2;
document.getElementById("otherexpenses2").innerHTML= dollar+otherexpenses
	if (otherexpenses<=0){

  		alert("You have gone over your budget");
  	}

  }

	
}else{

	alert("Please Enter Only Numbers, Do Not Include The Dollar Symbol");
}
}

