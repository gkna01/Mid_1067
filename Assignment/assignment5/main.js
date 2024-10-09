
window.onload = function() {
    document.getElementById('top').innerText = 'Welcome to the Forum';
    
};
var postNum = 1;
function postFunction() 
{
    var post = document.getElementById("message").value;
    if (postNum == 1) 
    {
        document.getElementById("topic").innerText = post;
    } 
    else if (postNum == 2) 
    {
        document.getElementById("reply1").innerText = post;
    } 
    else if (postNum == 3) 
    {
        document.getElementById("reply2").innerText = post;
    }
    postNum++ ; 
}

function clearFunction() 
{
    document.getElementById('message').value = "";
    document.getElementById('topic').innerText = "";
    document.getElementById('reply1').innerText = "";
    document.getElementById('reply2').innerText = "";
}