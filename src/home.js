import menuPage from "./menu.js"
import contactPage from "./contact.js"
import wipeContent from "./index.js"

export default function(){
    document.startViewTransition(()=>{
        document.body.setAttribute("id", "home") // adding id to the body to be able to style each page separately
            
        const heroTitle = document.createElement("div")
        heroTitle.setAttribute("id", "hero-title")
        heroTitle.innerHTML = "Just A Random <br> Coffee Shop"
        
        const menuBtn = document.createElement("button")
        menuBtn.textContent = "Explore Menu"
        menuBtn.addEventListener("click", ()=>{
            wipeContent()
            menuPage()
        })

        const contactBtn = document.createElement("button")
        contactBtn.textContent = "Contact Us"
        contactBtn.addEventListener("click", () => {
            wipeContent()
            contactPage()
        })

        const heroBtnsContainer = document.createElement("div")
        heroBtnsContainer.setAttribute("id", "hero-btns")
        heroBtnsContainer.append(menuBtn, contactBtn)

        const wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")
        wrapper.append(heroTitle, heroBtnsContainer)
        

        const mainContent = document.querySelector("#main-content");
        mainContent.appendChild(wrapper)
    })   
}