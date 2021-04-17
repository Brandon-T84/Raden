function sendsalary(){
var salary1 = document.getElementById('salary').value;
	var partners_salary1 = document.getElementById('partners salary').value;
	var amountofkids1 = document.getElementById('kids').value;

var salary = parseInt(salary1);
if (partners_salary1 > 0) {
var partners_salary = parseInt(partners_salary1);
}else{

	partners_salary = partners_salary1;
}

if (amountofkids1 > 0) {
var amountofkids = parseInt(amountofkids1);
}else{

	amountofkids = amountofkids1;

}
var totalsalary = salary+partners_salary;
var housing = totalsalary*0.33;
var food = totalsalary*0.13*amountofkids;
var secondfood = totalsalary*0.13;
var transportation = totalsalary*0.16;
var healthcare = totalsalary*0.082;
var insurance = totalsalary*0.11;
var otherexpenses = totalsalary*0.058;

localStorage.setItem("myValue", housing);

if (amountofkids == 0) {


localStorage.setItem("food", secondfood);
}else{

	localStorage.setItem("food", food);
}


localStorage.setItem("transportation", transportation); 

localStorage.setItem("healthcare", healthcare);

localStorage.setItem("insurance", insurance);

localStorage.setItem("otherexpenses", otherexpenses);
window.location.href="resultsofform.html";
}


/*

	
*/