import "./styles.css";
import { displayContactPage } from "./home";

const content = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

home.addEventListener("click", () => {
    content.append(displayContactPage());
});