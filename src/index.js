import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import { loadContact } from "./contact.js";

const header = document.querySelector("header");
const headerName = header.querySelector("p");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
const contactBtn = document.querySelector(".contact-btn");

loadHome();

headerName.addEventListener("click", loadHome);
homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);
aboutBtn.addEventListener("click", loadAbout);
contactBtn.addEventListener("click", loadContact);