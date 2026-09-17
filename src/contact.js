export default function(){
    document.startViewTransition(() =>{
        document.body.setAttribute("id", "contact")
        
        const main = document.querySelector("#main-content")
        
        const wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")
        
        // left grid
        const leftGrid = document.createElement("div")
        leftGrid.setAttribute("id", "left-grid-column")

        // info
        const info = document.createElement("div")
        info.setAttribute('id', 'info')

        const infoTitle = document.createElement("h1")
        infoTitle.setAttribute("id", "info-title")
        infoTitle.textContent = "Visit Us"
        

        const location = document.createElement("div")
        location.setAttribute("id", 'location')
        location.textContent = "8996+RCF Pembroke, Virginia, USA"

        const phoneNumber = document.createElement("div")
        phoneNumber.setAttribute("id", 'phone-number')
        phoneNumber.textContent = "+000 111 222 3333"

        info.append(infoTitle, location, phoneNumber)
        // info

        // opening hours
        const openingHours = document.createElement("div")
        openingHours.setAttribute("id", "opening-hours")

        const openingHoursTitle = document.createElement("h2")
        openingHoursTitle.textContent = "Opening Hours"

        const p1 = document.createElement("p")
        const days1 = document.createElement("span")
        days1.textContent = "Monday - Wednesday"
        const hours1 = document.createElement("span")
        hours1.textContent = "1:00 AM - 1:10 AM"
        p1.append(days1, hours1)

        const p2 = document.createElement("p")
        const days2 = document.createElement("span")
        days2.textContent = "Thursday - Saturday"
        const hours2 = document.createElement("span")
        hours2.textContent = "1:10 AM - 1:14 AM"
        p2.append(days2, hours2)

        const p3 = document.createElement("p")
        const days3 = document.createElement("span")
        days3.textContent = "Sunday"
        const hours3 = document.createElement("span")
        hours3.textContent = "1:20 AM - 1:21 AM"
        p3.append(days3, hours3)

        openingHours.append(openingHoursTitle, p1, p2, p3)
        // opening hours
        
        leftGrid.append(info, openingHours)
        // left grid

        // right grid
        const rightGrid = document.createElement("div")
        rightGrid.setAttribute("id", 'right-grid-column')
        
        const rightGridTitle = document.createElement("h1")
        rightGridTitle.setAttribute("id", "contact-us-title")
        rightGridTitle.textContent = 'Contact Us?'

        // form
        const form = document.createElement("form")
        
        // name input
        const nameInputContainer = document.createElement("div")

        const nameLabel = document.createElement("label")
        nameLabel.setAttribute("for", "username")
        nameLabel.textContent = "Name:"

        const nameInput = document.createElement("input")
        Object.assign(nameInput, {
            // assigning attributes to the name input
            type: "text",
            name: "username",
            id: "username",
            minLength: "3",
            maxLength: "60",
            required: true,
            placeholder: "John"
        })

        nameInputContainer.append(nameLabel, nameInput)
        // name input
        
        // email input
        const emailInputContainer = document.createElement("div")
        
        const emailLabel = document.createElement("label")
        emailLabel.setAttribute("for", "user-email")
        emailLabel.textContent = "Email:"

        const emailInput = document.createElement("input")
        Object.assign(emailInput, {
            // assigning attributes to the email input
            type: "email",
            name: "user-email",
            id: "user-email",
            placeholder : "john123@gmail.com",
            required: true,
        })

        emailInputContainer.append(emailLabel, emailInput)
        // email input

        // tel input
        const telInputContainer = document.createElement("div")
        
        const telLabel = document.createElement("label")
        telLabel.setAttribute("for", "user-phone")
        telLabel.textContent = "Phone Number:"

        const telInput = document.createElement("input")
        Object.assign(telInput, {
            // assigning attributes to the tel input
            type: "tel",
            name: "user-phone",
            id: "user-phone",
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            placeholder: "555-123-4567",
            minLength: "12",
            maxLength: "12",
            required: true,
            inputMode: "numeric"
        })

        telInputContainer.append(telLabel, telInput)
        // tel input

        // submit btn
        const formBtn = document.createElement("button")
        formBtn.textContent = "Submit"
        // submit btn

        form.append(nameInputContainer, emailInputContainer, telInputContainer, formBtn)
        rightGrid.append(rightGridTitle, form)
        // form
        // right grid

        wrapper.append(leftGrid, rightGrid)
        main.append(wrapper)
    })
}