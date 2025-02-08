export function loadContact() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = `Contact Us`;
    contentDiv.appendChild(h1);
}