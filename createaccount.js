function getaccountdata() {

	var email = document.getElementById('Email').value;
	var password = document.getElementById('password').value;
	var firstname = document.getElementById('First Name').value;
if (email.indexOf('@') > -1)
{
  

	localStorage.setItem("email", email);
	localStorage.setItem("password", password);
	localStorage.setItem("firstname", firstname);
}else{

	alert("Invalid Email");
}

if (email == "" || password == ""){

	alert("Please Fill Out All Of The Required Fields")
}else{

	window.location.href="success.html";
}

}

function gotologin() {

	window.location.href="login.html"
}