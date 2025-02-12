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
    const orderNowText = document.createElement("span");
    orderNowText.classList.add("order-now-text");
    orderNowText.textContent = `Order Now!`;
    imgWrapper.appendChild(orderNowText);
    const tag = document.createElement("p");
    const orderNowDialog = document.createElement("dialog");
    orderNowDialog.id = "order-now-dialog";
    contentDiv.appendChild(orderNowDialog);
    const dialogWrapper = document.createElement("div");
    dialogWrapper.classList.add("dialog-wrapper");
    orderNowDialog.appendChild(dialogWrapper);
    const dialogText = document.createElement("p");
    dialogText.textContent = `Sorry, online ordering is not yet available.`;
    dialogWrapper.appendChild(dialogText);
    const dialogOKButton = document.createElement("button");
    dialogOKButton.textContent = `OK`;
    dialogWrapper.appendChild(dialogOKButton);
    tag.classList.add("home-text");
    tag.textContent = `Serving up the best wood-fired flavors from around the globe.`;
    contentDiv.appendChild(tag);

    imgWrapper.addEventListener("click", () => {
        orderNowDialog.showModal();
        dialogOKButton.addEventListener("click", () => orderNowDialog.close());
    });
}