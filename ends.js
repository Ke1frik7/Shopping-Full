let sum = window.localStorage.getItem("sum")
let olinganlar = JSON.parse(window.localStorage.getItem("sotibOlinganlar"))
let array = olinganlar
let template = document.querySelector("template").content
console.log(template)
let parentElement = document.querySelector(".cards")
document.querySelector(".pricing").textContent = sum + " " +"$"
let input = document.querySelector(".ends_input")
let Endbtn = document.querySelector(".ends_btn")
Endbtn.addEventListener("click", handleClick)
let h2 = document.querySelector(".ends-title-h2")
function handleClick(){
    if(input.value.length === 13){
        console.log(true)
        h2.style.display = 'none'
        setTimeout(() => {
            confirm("Biroz kuting ... ")
            setTimeout(() => {
                alert("Tulov muvaffaqiyatli amalga oshirildi ...")
                input.value = " "
            }, 1500)
        }, 1000)
    }else{
        console.log(false)
        h2.style.display = 'block'
        console.log(h2)
    }

}
function renders(array){    
    for(let i = 0; i<array.length; i++){
        let clone = template.cloneNode(true)
        let img = clone.querySelector(".card-img-top")
        img.src = array[i].poster
        let name = clone.querySelector(".card-title")
        name.textContent = array[i].name
        let razmer = clone.querySelector(".card-razmer")
        razmer.textContent = array[i].ulcham
        let tok = clone.querySelector(".card-tok")
        tok.textContent = array[i].tok
        console.log(tok)
        let hotira = clone.querySelector(".card-hotira")
        if(array[i].hotira){
            hotira.textContent = array[i].hotira
        }else{
            hotira.textContent = "Bu qurilmada hotira mavjud emas"
        }
        let qushimcha = clone.querySelector(".card-qushimcha")
        let qushimchaArray = array[i].qushimcha
        for(let i = 0; i<qushimchaArray.length; i++){
            qushimcha.textContent = qushimchaArray[i]
        }
        if(array[i].poster == "./Images/kisspng-playstation-vr-playstation-4-computer-icons-playst-playstation-the-official-magazine-5b1b3f5da80ee0.4944373915285123496884.png"){
            img.style.filter = "invert(2)"
        }
       
        parentElement.appendChild(clone)
    }
}
renders(array)