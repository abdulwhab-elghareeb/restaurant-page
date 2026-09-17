import "./style.css"
import homePage from "./home.js"
import menuPage from "./menu.js"
import contactPage from "./contact.js"

homePage() // initial render

export default function wipeContent(){
    document.body.removeAttribute("id")
    document.querySelector("#main-content").replaceChildren() // if called with no arguments: empties the element of all child nodes
} 

const headerHomeBtn = document.querySelector("#home-btn")
headerHomeBtn.addEventListener("click", () =>{
    if (document.body.id == "home") return
    wipeContent()
    homePage()
})

const headerMenuBtn = document.querySelector("#menu-btn")
headerMenuBtn.addEventListener("click", () =>{
    if (document.body.id == "menu") return
    wipeContent()
    menuPage()
})

const headerContactBtn = document.querySelector("#contact-btn")
headerContactBtn.addEventListener("click", () =>{
    if (document.body.id == "contact") return
    wipeContent()
    contactPage()
})

