

function Checkusername() {

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var realusername = localStorage.getItem("email");
	var realpassword = localStorage.getItem("password");
if (username == realusername && password == realpassword){

	window.location.replace("home.html");
}else{

	alert("Incorrect Username or Password");
}


}