import pizzaImage from "./images/pizza-main.jpg";

export function loadHome() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = `World Pizza`;
    contentDiv.appendChild(h1);
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");
    contentDiv.appendChild(imgWrapper);
    const img = document.createElement("img");
    img.setAttribute("src", pizzaImage);
    img.setAttribute("alt", "An oval-shaped, flatbread-style, exotic-looking pizza laid atop a wooden board. The pizza is topped with crumbled beef of some sort, with dark spices and tomatoes peppered throughout. It is surrounded by what appear to be Mediterranean-style side dishes/dips, as well as a second pizza of the same variety.");
    imgWrapper.appendChild(img);
    const tag = document.createElement("p");
    tag.textContent = `Serving up the best wood-fired flavors from around the globe.`;
    contentDiv.appendChild(tag);
}