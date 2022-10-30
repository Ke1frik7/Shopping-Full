let result = JSON.parse(window.localStorage.getItem("token"))
console.log(result)
let object = {
    name: result[0],
    email: result[1],
    password: result[2]
}
let sum = window.localStorage.getItem("sum")
console.log(sum)
window.addEventListener("load", () => {
    let error = document.querySelector(".error-title")
    let token_name = document.querySelector(".name_token")
    let token_email = document.querySelector(".email_token")
    let token_password = document.querySelector(".password_token")
    let form = document.querySelector("form")
    form.addEventListener("submit", shops)
    function shops(e){
        e.preventDefault()
        console.log(object)
        if(token_name.value === object.name && token_email.value === object.email && token_password.value === object.password){
            error.style.display = 'block'
            error.textContent = "Ma'lumotlar tug'ri kiritildi ... "
            error.style.color = 'aqua'
            console.log("ishladi") // Good
            setTimeout(() => {
                window.location.replace("ends.html")
                // password 3838833883 
            }, 1500)
        }else{
            error.style.display = 'block'
        }
    }
})