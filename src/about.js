export function loadAbout() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = `About Us`;
    contentDiv.appendChild(h1);
}