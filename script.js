//region variables
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menuTopNav = document.querySelector("#menuTopNav");
const breakpoint = window.matchMedia("(width < calc(600 / 16 * 1rem))");
//endregion

//region functions
const animateMenu = () => {
    menuTopNav.classList.add("animating");

    setTimeout(() => {
        menuTopNav.classList.remove("animating");
    }, 300);
};

const openCloseMobileMenu = value => {
    if (value) {
        btnOpen.setAttribute("aria-expanded", "true")
        menuTopNav.removeAttribute("inert")
        main.setAttribute("inert", "");
        footer.setAttribute("inert", "");
    } else {
        btnOpen.setAttribute("aria-expanded", "false");
        menuTopNav.setAttribute("inert", "");
        main.removeAttribute("inert");
        footer.removeAttribute("inert");
    }
    animateMenu();
    if (value) {
        bodyScrollLockUpgrade.disableBodyScroll(menuTopNav);
        btnClose.focus();
    } else {
        bodyScrollLockUpgrade.enableBodyScroll(menuTopNav);
        btnOpen.focus();
    }
};

const setupTopNav = () => {
    if (breakpoint.matches) {
        // mobile
        menuTopNav.setAttribute("inert", "");
    } else {
        // tablet/desktop
        openCloseMobileMenu(false);
        menuTopNav.removeAttribute("inert");
    }
};

const closeMenuOnEscape = (ev) => {
    if (ev.key === "Escape") {
        openCloseMobileMenu(false);
    }
};
//endregion

//region events
btnOpen.addEventListener("click", () => openCloseMobileMenu(true));
btnClose.addEventListener("click", () => openCloseMobileMenu(false));
breakpoint.addEventListener("change", () => setupTopNav());
document.addEventListener("keyup", closeMenuOnEscape);
//endregion

//region execute
setupTopNav();
//endregion