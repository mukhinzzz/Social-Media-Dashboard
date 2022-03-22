'use strict';

let darkModeBlock = document.querySelector('.dark-mode-block');
let darkModeDescr = document.querySelector('.dark-mode-descr');
let darkModeSwitcherBg = document.querySelector('.dark-mode-switcher-bg');
let darkModeSwitcherButton = document.querySelector('.dark-mode-switcher-button');

darkModeBlock.addEventListener('mouseenter', changeColorThemeSwitcher);
darkModeBlock.addEventListener('mouseleave', changeColorThemeSwitcher);
darkModeBlock.addEventListener('click', changeTheme)

function changeColorThemeSwitcher() {
    darkModeDescr.classList.toggle('dark-mode-descr-hover');
    darkModeSwitcherButton.classList.toggle('dark-mode-switcher-button-hover');
}

function changeTheme() {

}