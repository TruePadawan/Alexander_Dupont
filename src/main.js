const openMenuButton = document.getElementById("hamburger-menu-btn");
const closeMenuButton = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavEls = mobileMenu.querySelectorAll("nav a");
const engSwitch = document.getElementById("eng-switch");
const frSwitch = document.getElementById("fr-switch");

function closeMobileMenu() {
    const menuIsClosed = openMenuButton.classList.toggle("menu-open") === false;
    if (menuIsClosed) {
        mobileMenu.classList.add("hidden")
    }
}

function openMobileMenu() {
    const menuIsOpen = openMenuButton.classList.toggle("menu-open");
    if (menuIsOpen) {
        mobileMenu.classList.remove("hidden")
    }
}

function switchLanguage() {
    engSwitch.classList.toggle("text-orange-400");
    frSwitch.classList.toggle("text-orange-400");
}

openMenuButton.onclick = openMobileMenu
closeMenuButton.onclick = closeMobileMenu

mobileNavEls.forEach(anchorEl => {
    anchorEl.addEventListener("click", closeMobileMenu)
})

engSwitch.addEventListener("click", switchLanguage);
frSwitch.addEventListener("click", switchLanguage);
