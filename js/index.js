var signinEmail=document.querySelector("input#signinEmail")
var signinPassword=document.querySelector("input#signinPassword")
var loginbutton = document.querySelector("a")
    var paragraph=document.getElementById("incorrect")

var signUpArray = JSON.parse(localStorage.getItem("users")) 
loginbutton.addEventListener("click" , login);

function signinEmpty() {
  if (signinEmail.value == "" || signinPassword.value == "") {
    return false
  }
  else {
    return true
  }
}

function login(){
  if(signinEmpty() == false)
  {
    paragraph.innerHTML='<span class="text-danger m-3">All inputs is required</span>'
    return false
}
for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signinEmail.value.toLowerCase() && signUpArray[i].password.toLowerCase() == signinPassword.value.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUpArray[i].name)
            loginbutton.href = "./home.html"

        } else {
            paragraph.innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }

}


