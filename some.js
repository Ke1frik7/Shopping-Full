let arrays =  JSON.parse(window.localStorage.getItem("token"))
let tokenObject = {
    name: arrays[0],
    email: arrays[1],
    password: arrays[2]
}
let result = []
let template = document.querySelector("template").content
let paretElement = document.querySelector(".cards")
result = [...result, tokenObject]
let array = prodocts
function renders (array) {
    paretElement.innerHTML = null
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
        let btn = clone.querySelector(".btn-korzina")
        btn.dataset.id = array[i].id
        paretElement.appendChild(clone)
    }
}
window.addEventListener("load", () => {
    let input = document.querySelector(".search")
    let btn = document.querySelector(".btn")
    btn.addEventListener("click", handleClick)
    function handleClick(e){
        let array = []
            let value = input.value
            let rejex = new RegExp(value, "gi")
            if(value == "all"){
                array = prodocts
            }else if(value !== "all"){
                array = prodocts.filter((item) => item.name.match(rejex))
            }
            renders(array)        
    }
})
renders(array)
let arrayPrice = []
let korzina = document.querySelector(".karzina-align")
window.addEventListener("click", (e) => {
    if(e.target.matches(".locals-korzina-btn")){
        korzina.classList.toggle("block")
    }
    if(e.target.matches(".btn-korzina")){
        let id = e.target.dataset.id
        for(let i  = 0; i<array.length; i++){
            if(array[i].id == id){         
                let li = document.createElement("li")
                li.className = "locals-shop-element"
                let h2 = document.createElement("h2")
                h2.appendChild(document.createTextNode(array[i].name))
                let btn = document.createElement("button")
                btn.dataset.id = array[i].id
                btn.appendChild(document.createTextNode("O'chirish"))
                li.appendChild(h2)
                li.appendChild(btn)
                korzina.appendChild(li)
                
                arrayPrice = [...arrayPrice,array[i]] 
                console.log(arrayPrice)
                btn.addEventListener("click", (e) => {
                    for(let i = 0; i<arrayPrice.length; i++){
                        if(e.target.dataset.id ==arrayPrice[i].id){
                            arrayPrice.splice(i, 1)
                        }
                    }
                    if(e.target.parentNode){
                        let parent = e.target.parentNode
                        parent.remove()
                    }
                    window.localStorage.setItem("sotibOlinganlar", JSON.stringify(arrayPrice))
                    
                })
            }
        }      
    }
    if(e.target.matches(".dows")){
        let sum = 0
        for(let i = 0; i<arrayPrice.length; i++){
            let object = arrayPrice[i]
            sum+=Number(object.price)
        }
        window.localStorage.setItem("sum", sum)
        window.location.replace("shops.html")
    }
})
let korzinaBtn = document.querySelector(".locals-korzina-btn")
let time = setTimeout(() => {
    korzinaBtn.classList.add("fix")
    korzina.classList.add("fix")
}, 4000)
window.addEventListener("scroll", () => {
    korzina.classList.add("fix")
    korzinaBtn.classList.toggle("fix", window.scrollY > 0, clearInterval(time))
})