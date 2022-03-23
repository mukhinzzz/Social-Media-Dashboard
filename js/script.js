'use strict';

let darkModeBlock = document.querySelector('.dark-mode-block');
let darkModeDescr = document.querySelector('.dark-mode-descr');
let darkModeSwitcherBg = document.querySelector('.dark-mode-switcher-bg');
let darkModeSwitcherButton = document.querySelector('.dark-mode-switcher-button');

let mainWrapper = document.querySelector('.main-wrapper');
let lightPartOfWrapper = document.querySelector('.light-part-of-wrapper');
let mainHeader = document.querySelector('.main-header');
let totalFollowersSubheader = document.querySelector('.total-followers-subheader');

let bigCard = document.querySelectorAll('.big-card');
let nickname = document.querySelectorAll('.nickname');
let bigNumber = document.querySelectorAll('.big-number');
let bigNumberDescr = document.querySelectorAll('.big-number-descr');

let overview = document.querySelector('.overview');

let gridCard = document.querySelectorAll('.grid-card');
let gridCardDescr = document.querySelectorAll('.grid-card-descr');
let gridCardNumber = document.querySelectorAll('.grid-card-number');
// let  = document.querySelector('.');
// let  = document.querySelector('.');

let isLightTheme = false;

darkModeBlock.addEventListener('mouseenter', changeColorThemeSwitcher);
darkModeBlock.addEventListener('mouseleave', changeColorThemeSwitcher);
darkModeBlock.addEventListener('click', changeTheme);

function changeColorThemeSwitcher() {
    if (!isLightTheme) {
        darkModeDescr.classList.toggle('dark-mode-descr-hover');
        darkModeSwitcherButton.classList.toggle('dark-mode-switcher-button-hover');
    } else {
        darkModeSwitcherBg.classList.toggle('dark-mode-switcher-bg-light-hover');
    }
}

function changeTheme() {
    isLightTheme = !isLightTheme;
    mainWrapper.classList.toggle('main-wrapper-light');

    lightPartOfWrapper.classList.toggle('light-part-of-wrapper-light');
    mainHeader.classList.toggle('main-header-light');
    totalFollowersSubheader.classList.toggle('total-followers-subheader-light');
    darkModeDescr.classList.toggle('dark-mode-descr-light');
    darkModeSwitcherBg.classList.toggle('dark-mode-switcher-bg-light');
    darkModeSwitcherButton.classList.toggle('dark-mode-switcher-button-light');

    for (let i = 0; i < bigCard.length; i++) {
        bigCard[i].classList.toggle('big-card-light');
        nickname[i].classList.toggle('nickname-light');
        bigNumber[i].classList.toggle('big-number-light');
        bigNumberDescr[i].classList.toggle('big-number-descr-light');
    }

    overview.classList.toggle('overview-light');

    for (let i = 0; i < gridCard.length; i++) {
        gridCard[i].classList.toggle('grid-card-light')
        gridCardDescr[i].classList.toggle('grid-card-descr-light')
        gridCardNumber[i].classList.toggle('grid-card-number-light')
    }
    darkModeSwitcherBg.classList.toggle('dark-mode-switcher-bg-light-hover');
}