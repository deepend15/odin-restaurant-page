import worldImage from "./images/world.png";

export function loadAbout() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = `About Us`;
    contentDiv.appendChild(h1);
    const aboutTextContainer = document.createElement("div");
    aboutTextContainer.classList.add("about-text-container");
    contentDiv.appendChild(aboutTextContainer);
    const aboutTextP1 = document.createElement("p");
    aboutTextP1.textContent = `At World Pizza, we believe that every culture brings something special to the table — especially when it comes to pizza! Our mission is to take your taste buds on a global adventure, serving up authentic and inspired pizza creations from around the world. From the classic Neapolitan of Italy, to the bold flavors of Mexico’s taco pizza, we bring international flavors straight to your plate.`;
    aboutTextContainer.appendChild(aboutTextP1);
    const aboutTextP2 = document.createElement("p");
    aboutTextP2.textContent = `Using only the freshest ingredients and traditional techniques, we craft each pizza with passion and creativity. Whether you're a fan of the classics, or eager to explore something new, World Pizza is your passport to a delicious journey.`;
    aboutTextContainer.appendChild(aboutTextP2);
    const aboutTextP3 = document.createElement("p");
    aboutTextP3.textContent = `Come visit us and experience the world — one slice at a time!`;
    aboutTextContainer.appendChild(aboutTextP3);
    const aboutImgContainer = document.createElement("div");
    aboutImgContainer.classList.add("about-img-container");
    contentDiv.appendChild(aboutImgContainer);
    const img = document.createElement("img");
    img.setAttribute("src", worldImage);
    img.setAttribute("alt", "An animated image of planet Earth.");
    img.classList.add("about-img");
    aboutImgContainer.appendChild(img);
    const imgCredit = document.createElement("p");
    imgCredit.textContent = `Icon designed by `;
    aboutImgContainer.appendChild(imgCredit);
    const freepikLink = document.createElement("a");
    freepikLink.href = "https://www.freepik.com/icon/planet-earth_921490#fromView=search&page=1&position=0&uuid=e9232251-7115-4d9e-8a91-59ce2f4ac6d4";
    freepikLink.textContent = `Freepik`;
    imgCredit.appendChild(freepikLink);
}