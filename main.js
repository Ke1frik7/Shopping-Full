window.addEventListener("load", () => {
    let form = document.querySelector("form")
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let pass = document.querySelector(".pass")
    let titleText = document.getElementById("title")
    let array = []
    form.addEventListener("submit", handleSub)
    function handleSub(e){
        console.log(e)
        e.preventDefault()
        array = [...array, name.value.trim(), email.value.trim(), pass.value.trim()]
        window.localStorage.setItem("token", JSON.stringify(array))
        let arrays =  JSON.parse(window.localStorage.getItem("token"))
        console.log(arrays)
        if(array.length >=3){
            titleText.textContent = "Token yaratildi"
            confirm("Muvaffaqiyatli ruyhattan utdingiz ... ")
            window.location.replace("some.html")
        }
    }
})