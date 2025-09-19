const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.textContent = navigation.classList.contains("show") ? "X" : "☰";
});


const yearElement = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} | Murillo de Jesus | São Bento do Sul, Brazil`;

const lastModifiedElement = document.getElementById('last-modified');
lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;