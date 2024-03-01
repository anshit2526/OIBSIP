const heading = document.getElementsByTagName('h1')[0];
const convertingTempMQ = document.getElementById("converting-temperature-small-dvc");
const convertingTemp = document.getElementById("converting-temperature");
const resultingTempMQ = document.getElementById("resulting-temperature-small-dvc");
const resultingTemp = document.getElementById("resulting-temperature");
const divContainer = document.getElementsByClassName('container')[1];

function mobileXS280(screenSize) {
    if (screenSize.matches) {
        document.addEventListener('DOMContentLoaded', async () => {

            const optionElements = document.getElementsByTagName('option');
            const optionStyle = {
                'fontSize': '15px',
            }

            for (let i = 0; i < optionElements.length; i++) {
                Object.assign(optionElements[i].style, optionStyle)
            }
        })

        heading.style.width = '100dvw';
        heading.style.textAlign = 'center';

        convertingTemp.classList = 'd-none';
        resultingTemp.classList = 'd-none';
        convertingTempMQ.classList = 'fs-4 px-3 w-75 my-2';
        resultingTempMQ.classList = 'fs-4 px-1 mx-2 w-75 my-2';

        divContainer.classList = 'container d-flex flex-column justify-content-center align-items-center w-auto mt-5 p-5 shadow';
    }
}

function mobileS320(screenSize) {
    if (screenSize.matches) {
        document.addEventListener('DOMContentLoaded', () => {
            const optionElements = document.getElementsByTagName('option');
            const optionStyle = {
                'fontSize': '12px',
            }
            for (let i = 0; i < optionElements.length; i++) {
                Object.assign(optionElements[i].style, optionStyle)
            }
        })
        heading.style.width = '100dvw';
        heading.style.textAlign = 'center';

        convertingTemp.classList = 'd-none';
        resultingTemp.classList = 'd-none';
        convertingTempMQ.classList = 'fs-4 px-3 w-75 my-2';
        resultingTempMQ.classList = 'fs-4 px-1 mx-2 w-75 my-2';

        divContainer.classList = 'container d-flex flex-column justify-content-center align-items-center w-auto p-5 shadow';
    }
}

function mobileM375(screenSize) {
    if (screenSize.matches) {
        document.addEventListener('DOMContentLoaded', () => {
            const optionElements = document.getElementsByTagName('option');
            const optionStyle = {
                'fontSize': '12px'
            }
            for (let i = 0; i < optionElements.length; i++) {
                Object.assign(optionElements[i].style, optionStyle)
            }
        })

        heading.style.width = '100dvw';
        heading.style.textAlign = 'center';

        convertingTemp.classList = 'd-none';
        resultingTemp.classList = 'd-none';
        convertingTempMQ.classList = 'fs-4 px-3 w-75 my-2';
        resultingTempMQ.classList = 'fs-4 px-1 mx-2 w-75 my-2';

        divContainer.classList = 'container d-flex flex-column justify-content-center align-items-center w-auto mt-5 p-5 shadow';
    }
}

function mobileM414(screenSize) {
    if (screenSize.matches) {
        document.addEventListener('DOMContentLoaded', () => {
            const optionElements = document.getElementsByTagName('option');
            const optionStyle = {
                'fontSize': '12px'
            }
            for (let i = 0; i < optionElements.length; i++) {
                Object.assign(optionElements[i].style, optionStyle)
            }
        })

        heading.style.width = '100dvw'
        heading.style.textAlign = 'center';

        convertingTemp.classList = 'd-none';
        resultingTemp.classList = 'd-none';
        convertingTempMQ.classList = 'fs-4 px-3 w-75 my-2';
        resultingTempMQ.classList = 'fs-4 px-1 mx-2 w-75 my-2';

        divContainer.classList = 'container d-flex flex-column justify-content-center align-items-center w-auto mt-5 p-5 shadow';
    }
}

function mobileL430(screenSize) {
    if (screenSize.matches) {
        document.addEventListener('DOMContentLoaded', () => {
            const optionElements = document.getElementsByTagName('option');
            const optionStyle = {
                'fontSize': '12px'
            }
            for (let i = 0; i < optionElements.length; i++) {
                Object.assign(optionElements[i].style, optionStyle)
            }
        })
        heading.style.width = '100dvw';
        heading.style.textAlign = 'center';

        convertingTemp.classList = 'd-none';
        resultingTemp.classList = 'd-none';
        convertingTempMQ.classList = 'fs-4 px-3 w-75 my-2';
        resultingTempMQ.classList = 'fs-4 px-1 mx-2 w-75 my-2'

        divContainer.classList = 'container d-flex flex-column justify-content-center align-items-center w-auto mt-5 p-5 shadow';
    }
}

function mobileL720(screenSize) {
    if (screenSize.matches) {
        document.addEventListener('DOMContentLoaded', () => {
            const optionElements = document.getElementsByTagName('option');
            const optionStyle = {
                'fontSize': '12px'
            }
            for (let i = 0; i < optionElements.length; i++) {
                Object.assign(optionElements[i].style, optionStyle)
            }
        })
        heading.style.width = '100dvw';
        heading.style.textAlign = 'center'

        convertingTemp.classList = 'd-none';
        resultingTemp.classList = 'd-none';
        convertingTempMQ.classList = 'fs-4 px-3 w-75 my-2';
        resultingTempMQ.classList = 'fs-4 px-1 mx-2 w-75 my-2';

        divContainer.classList = 'container d-flex flex-column justify-content-center align-items-center w-auto mt-5 p-5 shadow';

    }
}

function laptopComputer(screenSize) {
    if (screenSize.matches) {
        document.addEventListener('DOMContentLoaded', () => {
            const optionElements = document.getElementsByTagName('option');
            const optionStyle = {
                'fontSize': '1.20rem'
            }
            for (let i = 0; i < optionElements.length; i++) {
                Object.assign(optionElements[i].style, optionStyle)
            }
        })

        heading.classList = 'text-white text-center';

        convertingTemp.classList = 'fs-4 px-1 mx-2';
        resultingTemp.classList = 'fs-4 px-1 mx-2';
        convertingTempMQ.classList = 'd-none';
        resultingTempMQ.classList = 'd-none';

        divContainer.classList = 'container d-flex flex-column justify-content-center align-items-center w-auto mt-5 p-5 shadow';

    }
}

const screen280 = window.matchMedia('(min-width: 0px) and (max-width: 280px)');
const screen320 = window.matchMedia('(min-width: 281px) and (max-width: 320px)');
const screen375 = window.matchMedia('(min-width: 321px) and (max-width: 375px)');
const screen414 = window.matchMedia('(min-width: 376px) and (max-width: 414px)');
const screen430 = window.matchMedia('(min-width: 415px) and (max-width: 430px)');
const screen720 = window.matchMedia('(min-width: 431px) and (max-width: 720px)');
const screenDefault = window.matchMedia('(min-width: 721px)');

mobileXS280(screen280);
mobileS320(screen320);
mobileM375(screen375);
mobileM414(screen414);
mobileL430(screen430);
mobileL720(screen720);
laptopComputer(screenDefault);

window.onresize = () => {
    if (window.outerWidth >= 0 && window.outerWidth <= 280) {
        mobileXS280(screen280);
    }
    if (window.outerWidth >= 281 && window.outerWidth <= 320) {
        mobileS320(screen320);
    }
    if (window.outerWidth >= 321 && window.outerWidth <= 375) {
        mobileM375(screen375);
    }
    if (window.outerWidth >= 376 && window.outerWidth <= 414) {
        mobileM414(screen414);
    }
    if (window.outerWidth >= 415 && window.outerWidth <= 430) {
        mobileL430(screen430);
    }
    if (window.outerWidth >= 431 && window.outerWidth <= 720) {
        mobileL720(screen720);
    }
    if (window.outerWidth >= 721) {
        laptopComputer(screenDefault);
    }
}
window.onload = () => {
    if (window.outerWidth >= 0 && window.outerWidth <= 280) {
        mobileXS280(screen280);
    }
    if (window.outerWidth >= 281 && window.outerWidth <= 320) {
        mobileS320(screen320);
    }
    if (window.outerWidth >= 321 && window.outerWidth <= 375) {
        mobileM375(screen375);
    }
    if (window.outerWidth >= 376 && window.outerWidth <= 414) {
        mobileM414(screen414);
    }
    if (window.outerWidth >= 415 && window.outerWidth <= 430) {
        mobileL430(screen430);
    }
    if (window.outerWidth >= 431 && window.outerWidth <= 720) {
        mobileL720(screen720);
    }
    if (window.outerWidth >= 721) {
        laptopComputer(screenDefault);
    }
}
