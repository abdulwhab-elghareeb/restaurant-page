import icedAmericano from "../assets/imgs/iced-americano.svg"
import icedLemonLatte from "../assets/imgs/iced-lemon-latte.svg"
import pannaCotta from "../assets/imgs/panna-cotta.svg"
import tiramisu from "../assets/imgs/tiramisu.svg"

export default function(){
    document.body.setAttribute("id", "menu")

    const mainContent = document.querySelector("#main-content")

    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")

    const cardContainer = document.createElement("div")
    cardContainer.setAttribute("id", "card-container")

    // beverages
    const beveragesCardsContainer = document.createElement("div")
    beveragesCardsContainer.setAttribute("id", "beverages")

    const beveragesTitle = document.createElement("div")
    beveragesTitle.setAttribute("id", "beverages-title")
    beveragesTitle.textContent = "Beverages"

    // beverages card1
    const beveragesCard1 = document.createElement("div")
    beveragesCard1.classList.add("card")

    const beveragesCard1Title = document.createElement("div")
    beveragesCard1Title.classList.add("card-title")
    beveragesCard1Title.textContent = "Iced Americano"

    const beveragesCard1Img = document.createElement("img")
    beveragesCard1Img.src = icedAmericano
    
    const beveragesCard1Price = document.createElement("div")
    beveragesCard1Price.classList.add("card-price")
    beveragesCard1Price.textContent = "99$"

    beveragesCard1.append(beveragesCard1Title, beveragesCard1Img, beveragesCard1Price)
    // beverages card1

    //beverages card2
    const beveragesCard2 = document.createElement("div")
    beveragesCard2.classList.add("card")

    const beveragesCard2Title = document.createElement("div")
    beveragesCard2Title.classList.add("card-title")
    beveragesCard2Title.textContent = "Iced Lemon Latte"

    const beveragesCard2Img = document.createElement("img")
    beveragesCard2Img.src = icedLemonLatte
    
    const beveragesCard2Price = document.createElement("div")
    beveragesCard2Price.classList.add("card-price")
    beveragesCard2Price.textContent = "499$"

    beveragesCard2.append(beveragesCard2Title, beveragesCard2Img, beveragesCard2Price)
    // beverage card2

    beveragesCardsContainer.append(beveragesTitle, beveragesCard1, beveragesCard2)
    // beverages

    const hr = document.createElement("hr")

    // desserts
    const dessertsCardContainer = document.createElement("div")
    dessertsCardContainer.setAttribute("id", "desserts")

    const dessertsTitle = document.createElement("div")
    dessertsTitle.setAttribute("id", "desserts-title")
    dessertsTitle.textContent = "Desserts"

    // desserts card1
    const dessertsCard1 = document.createElement("div")
    dessertsCard1.classList.add("card")

    const dessertsCard1Title = document.createElement("div")
    dessertsCard1Title.classList.add("card-title")
    dessertsCard1Title.textContent = "Panna Cotta"

    const dessertsCard1Img = document.createElement("img")
    dessertsCard1Img.src = pannaCotta
    
    const dessertsCard1Price = document.createElement("div")
    dessertsCard1Price.classList.add("card-price")
    dessertsCard1Price.textContent = "899$"

    dessertsCard1.append(dessertsCard1Title, dessertsCard1Img, dessertsCard1Price)
    // deserts card1

    //desserts card2
    const dessertsCard2 = document.createElement("div")
    dessertsCard2.classList.add("card")

    const dessertsCard2Title = document.createElement("div")
    dessertsCard2Title.classList.add("card-title")
    dessertsCard2Title.textContent = "Tiramisu"

    const dessertsCard2Img = document.createElement("img")
    dessertsCard2Img.src = tiramisu
    
    const dessertsCard2Price = document.createElement("div")
    dessertsCard2Price.classList.add("card-price")
    dessertsCard2Price.textContent = "4999$"

    dessertsCard2.append(dessertsCard2Title, dessertsCard2Img, dessertsCard2Price)
    // desserts card2

    dessertsCardContainer.append(dessertsTitle, dessertsCard1, dessertsCard2)
    // desserts
    
    cardContainer.append(beveragesCardsContainer, hr, dessertsCardContainer)
    wrapper.append(cardContainer)
    mainContent.append(wrapper)


}