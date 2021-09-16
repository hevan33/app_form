$(document).ready(function(){
    $("#submit").click(function(){
        var emailValidationRegularExpression = /\S+@\S+\.\S+/;
//Validate TextBox value against the Regex.
var validation = emailValidationRegularExpression.test(document.getElementById("e_mail").value);
document.write(e_mail);
if (!validation) {
alert("Not an email address");
} else {
alert("Valid email address!");
var name = document.getElementById("name");
 var surname = document.getElementById("surname");
 var e_mail = document.getElementById("e_mail");
document.getElementById("text").innerHTML="Successful application!";
}











        
    })
})

$(document).ready(function(){
    $("#clear").click(function(){
        
        document.getElementById("name").value=" ";
        document.getElementById("surname").value=" ";
        document.getElementById("e_mail").value=" ";
    })
})