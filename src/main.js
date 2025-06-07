const openMenuButton = document.getElementById("hamburger-menu-btn");
const closeMenuButton = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavEls = mobileMenu.querySelectorAll("nav a");
const engSwitch = document.querySelectorAll(".eng-switch");
const frSwitch = document.querySelectorAll(".fr-switch");

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
    engSwitch.forEach(el => {
        el.classList.toggle("text-orange-400");
    })
    frSwitch.forEach(el => {
        el.classList.toggle("text-orange-400");
    });
}

openMenuButton.onclick = openMobileMenu
closeMenuButton.onclick = closeMobileMenu

mobileNavEls.forEach(anchorEl => {
    anchorEl.addEventListener("click", closeMobileMenu)
})

engSwitch.forEach(el => {
    el.addEventListener("click", switchLanguage);
})
frSwitch.forEach(el => {
    el.addEventListener("click", switchLanguage);
})