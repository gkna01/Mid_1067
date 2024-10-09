window.onload = loginLoad;
function loginLoad()
{
	var forms = document.getElementById("myLogin");
	forms.onsubmit = checkLogin;
}

function checkLogin()
{
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);

	var usernameR = urlParams.get('username')
	var passwordR = urlParams.get('password')

	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

	if(usernameR != username.value)
	{
		alert("Log in ไม่ผ่าน");
		return false;
	}
	if(passwordR != password.value)
	{
		alert("Log in ไม่ผ่าน");
		return false;
	}
	alert("Log in ผ่านแล้ว");
}