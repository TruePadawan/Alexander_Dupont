const openMenuButton = document.getElementById("hamburger-menu-btn");
const closeMenuButton = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

openMenuButton.onclick = (ev) => {
    // Trigger the button animation
    const menuIsOpen = openMenuButton.classList.toggle("menu-open");
    if (menuIsOpen) {
        mobileMenu.classList.remove("hidden")
    }
}

closeMenuButton.onclick = (ev) => {
    const menuIsClosed = openMenuButton.classList.toggle("menu-open") === false;
    if (menuIsClosed) {
        mobileMenu.classList.add("hidden")
    }
}