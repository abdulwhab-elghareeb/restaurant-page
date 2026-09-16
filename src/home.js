export default function(){
    document.body.setAttribute("id", "home") // adding id to the body to be able to style each page separately

    const heroTitle = document.createElement("div")
    heroTitle.setAttribute("id", "hero-title")
    heroTitle.innerHTML = "Random <br> Coffee Shop"

    const btn1 = document.createElement("button")
    btn1.textContent = "Explore Menu"

    const btn2 = document.createElement("button")
    btn2.textContent = "About Us"

    const heroBtnsContainer = document.createElement("div")
    heroBtnsContainer.setAttribute("id", "hero-btns")
    heroBtnsContainer.append(btn1, btn2)

    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    wrapper.append(heroTitle, heroBtnsContainer)
    

    const mainContent = document.querySelector("#main-content");
    mainContent.appendChild(wrapper)
}   