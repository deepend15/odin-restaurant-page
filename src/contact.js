export function loadContact() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = `Contact Us`;
    contentDiv.appendChild(h1);
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contentDiv.appendChild(contactContainer);
    const contactLeft = document.createElement("div");
    contactContainer.appendChild(contactLeft);
    const hours = document.createElement("h3");
    hours.textContent = `Hours:`
    contactLeft.appendChild(hours);
    const hourItems = document.createElement("div");
    hourItems.classList.add("hour-items");
    contactLeft.appendChild(hourItems);
    const sunday = document.createElement("p");
    sunday.textContent = `Sunday: 12PM -- 9PM`;
    hourItems.appendChild(sunday);
    const monday = document.createElement("p");
    monday.textContent = `Monday: CLOSED`;
    hourItems.appendChild(monday);
    const tuesday = document.createElement("p");
    tuesday.textContent = `Tuesday: CLOSED`;
    hourItems.appendChild(tuesday);
    const wednesday = document.createElement("p");
    wednesday.textContent = `Wednesday: 11AM -- 9PM`;
    hourItems.appendChild(wednesday);
    const thursday = document.createElement("p");
    thursday.textContent = `Thursday: 11AM -- 9PM`;
    hourItems.appendChild(thursday);
    const friday = document.createElement("p");
    friday.textContent = `Friday: 11AM -- 11PM`;
    hourItems.appendChild(friday);
    const saturday = document.createElement("p");
    saturday.textContent = `Saturday: 11AM -- 11PM`;
    hourItems.appendChild(saturday);
    const contactRight = document.createElement("div");
    contactRight.classList.add("contact-right");
    contactContainer.appendChild(contactRight);
    const address = document.createElement("div");
    address.classList.add("address");
    contactRight.appendChild(address);
    const street = document.createElement("p");
    street.textContent = "123 Main St.";
    address.appendChild(street);
    const cityStateZip = document.createElement("p");
    cityStateZip.textContent = `Beverly Hills, CA 12345`
    address.appendChild(cityStateZip);
    const phoneDiv = document.createElement("div");
    contactRight.appendChild(phoneDiv);
    const phone = document.createElement("h3");
    phone.textContent = `Phone:`;
    phoneDiv.appendChild(phone);
    const number = document.createElement("p");
    number.textContent = `(555) 123-4567`;
    phoneDiv.appendChild(number);
    const emailDiv = document.createElement("div");
    contactRight.appendChild(emailDiv);
    const emailTitle = document.createElement("h3");
    emailTitle.textContent = `Email:`;
    emailDiv.appendChild(emailTitle);
    const email = document.createElement("p");
    email.textContent = `worldpizza@realemail.com`;
    emailDiv.appendChild(email);
}