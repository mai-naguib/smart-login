var signUpButton = document.querySelector("a")
var signupName = document.querySelector("input#userName")
var signupEmail = document.querySelector("input#signinEmail")
var signupPassword = document.querySelector("input#signinPassword")
var paragraph=document.getElementById("incorrect")

signUpButton.addEventListener("click" , signUp)
function isEmpty() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
    if (isEmpty() == false) {
        paragraph.innerHTML='<span class="text-danger m-3">All inputs is required</span>'
    return false
    }
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        paragraph.innerHTML= '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
       paragraph.innerHTML= '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
       paragraph.innerHTML= '<span class="text-success m-3">Success</span>'

    }


}
