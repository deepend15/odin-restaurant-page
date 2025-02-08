export function loadMenu() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = `Menu`;
    contentDiv.appendChild(h1);
}