//null
var dollar = "$";

var space = " ";
var perweek = "/week"
var bracket1 = "("
var bracket2 = ")"
var b = localStorage.getItem("myValue");
var food = localStorage.getItem("food");
var transportationvalue = localStorage.getItem("transportation");
var healthcarevalue = localStorage.getItem("healthcare");
console.log(healthcarevalue);
var insurancevalue = localStorage.getItem("insurance");
var otherexpenses = localStorage.getItem("otherexpenses");


var housing1 = localStorage.getItem("housing1")
document.getElementById('message').innerHTML = housing1


if (document.getElementById('message').innerHTML == ""){

	document.getElementById('message').innerHTML = dollar+b+space+bracket1+dollar+Math.floor(b/52)+perweek+bracket2;
}else{
document.getElementById('message').innerHTML = housing1

}
var food3 = localStorage.getItem("sendfood1");

document.getElementById('food').innerHTML = food3


if (document.getElementById('food').innerHTML == "") {
	document.getElementById('food').innerHTML = dollar+food+space+bracket1+dollar+Math.floor(food/52)+perweek+bracket2;;
}else{
document.getElementById('food').innerHTML = food3

}
var transportation1 = localStorage.getItem("sendtransportation1");



	


document.getElementById('transportation').innerHTML = transportation1


if (document.getElementById('transportation').innerHTML == "") {
	document.getElementById('transportation').innerHTML = dollar+transportationvalue+space+bracket1+dollar+Math.floor(transportationvalue/52)+perweek+bracket2;;
}else{
document.getElementById('transportation').innerHTML = transportation1

}


var healthcare1 = localStorage.getItem("sendhealthcare1");

document.getElementById('healthcare').innerHTML = healthcare1

if (document.getElementById('healthcare').innerHTML == "") {
	document.getElementById('healthcare').innerHTML = dollar+healthcarevalue+space+bracket1+dollar+Math.floor(healthcarevalue/52)+perweek+bracket2;;
}else{
document.getElementById('healthcare').innerHTML = healthcare1

}
var insurance1 = localStorage.getItem("sendinsurance1");

document.getElementById('insurance').innerHTML = insurance1


if (document.getElementById('insurance').innerHTML == "") {
	document.getElementById('insurance').innerHTML = dollar+insurancevalue+space+bracket1+dollar+Math.floor(insurancevalue/52)+perweek+bracket2;;
}else{
document.getElementById('insurance').innerHTML = insurance1

}
var expenses1 = localStorage.getItem("sendotherexpenses1");

document.getElementById('otherexpenses').innerHTML = expenses1


if (document.getElementById('otherexpenses').innerHTML == "") {
	document.getElementById('otherexpenses').innerHTML = dollar+otherexpenses+space+bracket1+dollar+Math.floor(otherexpenses/52)+perweek+bracket2;;
}else{
document.getElementById('otherexpenses').innerHTML = expenses1

}
var y = localStorage.getItem("b");

document.getElementById('housing2').innerHTML = dollar+y;

if (document.getElementById('housing2').innerHTML == "$null"){

	document.getElementById('housing2').innerHTML = dollar+b;
}else{

	document.getElementById('housing2').innerHTML = dollar+y;
}

var sendfoods = localStorage.getItem("sendf");

document.getElementById('food2').innerHTML = dollar+sendfoods;


if (document.getElementById('food2').innerHTML == "$null"){

	document.getElementById('food2').innerHTML = dollar+food;
}else{

	document.getElementById('housing2').innerHTML = dollar+sendfoods;
}

var sendtransport = localStorage.getItem("sendt");

document.getElementById('transportation2').innerHTML = dollar+sendtransport;



if (document.getElementById('transportation2').innerHTML == "$null"){

	document.getElementById('transportation2').innerHTML = dollar+transportationvalue;
}else{

	document.getElementById('transportation2').innerHTML = dollar+sendtransport;
}

var sendhealthcare = localStorage.getItem("sendh");

document.getElementById('healthcare2').innerHTML = dollar+sendhealthcare;



if (document.getElementById('healthcare2').innerHTML == "$null"){

	document.getElementById('healthcare2').innerHTML = dollar+healthcarevalue;
}else{

	document.getElementById('healthcare2').innerHTML = dollar+sendhealthcare;
}


var sendinsurance = localStorage.getItem("sendi");

document.getElementById('insurance2').innerHTML = dollar+sendinsurance;



if (document.getElementById('insurance2').innerHTML == "$null"){

	document.getElementById('insurance2').innerHTML = dollar+insurancevalue;
}else{

	document.getElementById('insurance2').innerHTML = dollar+sendinsurance;
}

var sendexpenses = localStorage.getItem("sendo");

document.getElementById('otherexpenses2').innerHTML = dollar+sendexpenses;



if (document.getElementById('otherexpenses2').innerHTML == "$null"){

	document.getElementById('otherexpenses2').innerHTML = dollar+otherexpenses;
}else{

	document.getElementById('otherexpenses2').innerHTML = dollar+sendexpenses;
}