var heading =document.getElementById("username")
var username =localStorage.getItem('sessionUsername')
if (username) {
    heading.innerHTML = "Welcome " + username
}
var logoutButton = document.querySelector("a.logout")
logoutButton.addEventListener("click" , logout)
function logout() {
    localStorage.removeItem('sessionUsername')
}