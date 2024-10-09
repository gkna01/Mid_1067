window.onload = pageLoad;


function pageLoad()
{   
    var firstname = document.forms["myRegister"]["firstname"];
    var lastname = document.forms["myRegister"]["lastname"];
    var gender = document.forms["myRegister"]["gender"];
    var bday = document.forms["myRegister"]["bday"];
    var email = document.forms["myRegister"]["email"];
    var username = document.forms["myRegister"]["username"];
    var password = document.forms["myRegister"]["password"][0];
    var retypePassword = document.forms["myRegister"]["password"][1];
    var forms = document.getElementById("myRegister");
	forms.onsubmit = validateForm;
    firstname.value = "JoJo" ;
    lastname.value = "JoJo" ;
    gender.value = "male" ;
    bday.value = "07/07/2003" ;
    email.value = "JoJo@gmail.com" ;
    username.value = "JoJo" ;
    password.value = "JoJo" ;
    retypePassword.value = "JoJo" ;

}

function validateForm() 
{
    var firstname = document.forms["myRegister"]["firstname"];
    var lastname = document.forms["myRegister"]["lastname"];
    var gender = document.forms["myRegister"]["gender"];
    var bday = document.forms["myRegister"]["bday"];
    var email = document.forms["myRegister"]["email"];
    var username = document.forms["myRegister"]["username"];
    var password = document.forms["myRegister"]["password"][0];
    var retypePassword = document.forms["myRegister"]["password"][1];
    
    var errorMsg = document.getElementById("errormsg");

    if(firstname.value == "")
    {
        errorMsg.innerHTML = "กรอกข้อมูลไม่ครบ กรุณาลองใหม่!";
        return false;
    }
    if(lastname.value == "")
    {
        errorMsg.innerHTML = "กรอกข้อมูลไม่ครบ กรุณาลองใหม่!";

        return false;
    }

    if(gender.value == "")
    {
        errorMsg.innerHTML = "กรอกข้อมูลไม่ครบ กรุณาลองใหม่!";
        return false;
    }
    if(bday.value == "")
    {
        errorMsg.innerHTML = "กรอกข้อมูลไม่ครบ กรุณาลองใหม่!";
        return false;
    }
    if(email.value == "")
    {
        errorMsg.innerHTML = "กรอกข้อมูลไม่ครบ กรุณาลองใหม่!";
        return false;
    }
    if(username.value == "")
    {
        errorMsg.innerHTML = "กรอกข้อมูลไม่ครบ กรุณาลองใหม่!";
        return false;
    }
    
    if(password.value != retypePassword.value)
    {
        errorMsg.innerHTML = "รหัสผ่านไม่ตรงกัน!";
        return false;
    }
}
