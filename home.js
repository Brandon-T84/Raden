var realname = localStorage.getItem("firstname");

document.getElementById("name").innerHTML = realname;

var resetValue = ""; 

localStorage.setItem("firstname", resetValue);
