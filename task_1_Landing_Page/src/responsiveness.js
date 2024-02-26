const navbar = document.getElementsByTagName('nav')[0];
const logoLink = document.getElementsByTagName('a')[0];
const logo = document.getElementsByTagName('img')[0];
const logoText = document.getElementsByTagName('span')[0];
const navItems = document.getElementsByTagName('ul')[0];
const mainContainer = document.getElementsByTagName('div')[2];
const greetingPara = document.getElementsByTagName('p')[0];
const h1Elem = document.getElementsByTagName('h1')[0];
const nameHeading = document.getElementById('h-name');
const skillsPara = document.getElementsByTagName('p')[1];
const exploreBtn = document.getElementsByTagName('button')[0];
const exploreBtnIcon = document.getElementsByTagName('svg')[0];
const profileImg = document.getElementsByTagName('img')[2];

function mobileS280(screenSize) {
    if (screenSize.matches) {
        mainContainer.classList = 'flex flex-col mt-32 p-5 text-main-h';
        greetingPara.classList = 'font-semibold text-2xl';
        h1Elem.classList = 'text-2xl font-semibold';
        nameHeading.classList = 'text-3xl';
        skillsPara.classList = 'font-semibold text-[#222222]';
        exploreBtn.classList = 'flex rounded-2xl font-semibold mt-3 bg-nav text-[#D0D0D0] ring-1 ring-slate-500 text-xs p-1';
        exploreBtnIcon.classList = 'w-4 h-4 ml-2';
    }
}

function mobileSM320(screenSize) {
    if (screenSize.matches) {
        mainContainer.classList = 'flex flex-col mt-32 p-5 text-main-h'
        greetingPara.classList = 'font-semibold text-3xl'
        h1Elem.classList = 'font-semibold text-3xl'
        nameHeading.classList = 'text-4xl font-semibold'
        skillsPara.classList = 'font-semibold text-[#222222]'
        exploreBtn.classList = 'flex rounded-2xl font-semibold mt-3 bg-nav text-[#D0D0D0] ring-1 ring-slate-500 text-xs p-1'
        exploreBtnIcon.classList = 'w-4 h-4 ml-2'
    }
}

function mobileM375(screenSize) {
    if (screenSize.matches) {
        mainContainer.classList = 'flex flex-col p-5 text-main-h mt-32'
        greetingPara.classList = 'font-semibold text-3xl'
        h1Elem.classList = 'font-semibold text-3xl'
        nameHeading.classList = 'text-3xl'
        skillsPara.classList = 'font-semibold text-[#222222]'
        exploreBtn.classList = 'flex rounded-2xl font-semibold mt-3 bg-nav text-[#D0D0D0] ring-1 ring-slate-500 text-xs p-1'
        exploreBtnIcon.classList = 'w-4 h-4 ml-2'
    }
}

function mobileML414(screenSize) {
    if (screenSize.matches) {
        navbar.classList = 'fixed w-dvw flex justify-between bg-nav';
        logoLink.classList = 'flex items-center text-4xl';
        mainContainer.classList = 'flex flex-col p-5 text-main-h mt-40';
        greetingPara.classList = 'font-semibold text-2xl';
        h1Elem.classList = 'text-2xl font-semibold';
        nameHeading.classList = 'text-3xl';
        skillsPara.classList = 'font-semibold text-[#222222]'
        exploreBtn.classList = 'flex rounded-2xl font-semibold mt-3 bg-nav text-[#D0D0D0] ring-1 ring-slate-500 text-xs p-1';
        exploreBtnIcon.classList = 'w-4 h-4 ml-2';
    }
}

function mobileL430(screenSize) {
    if (screenSize.matches) {
        navbar.classList = 'fixed w-dvw flex justify-between bg-nav';
        logoLink.classList = 'flex items-center text-4xl';
        mainContainer.classList = 'flex flex-col p-5 text-main-h mt-32';
        greetingPara.classList = 'font-semibold text-3xl';
        h1Elem.classList = 'text-2xl font-semibold';
        nameHeading.classList = 'text-3xl';
        exploreBtn.classList = 'flex rounded-2xl font-semibold mt-3 bg-nav text-[#D0D0D0] ring-1 ring-slate-500 text-xs p-1';
        exploreBtnIcon.classList = 'w-4 h-4 ml-2';
    }
}

function mobileXL720(screenSize) {
    if (screenSize.matches) {
        navbar.classList = 'fixed w-dvw flex justify-between bg-nav';
        logoLink.classList = 'flex items-center text-4xl';
        mainContainer.classList = 'flex flex-col p-5 text-main-h mt-48';
        greetingPara.classList = 'font-semibold text-3xl';
        h1Elem.classList = 'text-2xl font-semibold';
        nameHeading.classList = 'text-3xl';
        profileImg.classList = 'h-max mt-16';
        exploreBtn.classList = 'flex rounded-2xl font-semibold mt-3 bg-nav text-[#D0D0D0] ring-1 ring-slate-500 text-xs p-1'
        exploreBtnIcon.classList = 'w-4 h-4 ml-2'
    }
}

function tablet1024(screenSize) {
    if (screenSize.matches) {
        logoLink.classList = 'flex items-center text-5xl';
        navItems.classList.remove('mr-32');
        mainContainer.classList.remove('ml-16');
        greetingPara.classList = 'font-semibold text-3xl';
        greetingPara.classList.add('text-4xl');
        h1Elem.classList = 'font-semibold text-4xl';
        nameHeading.classList = 'text-5xl';
        profileImg.classList = 'h-max mt-16';
    }
}

function desktop(screenSize) {
    if (screenSize.matches) {
        navbar.classList = 'fixed w-dvw h-14 flex justify-between bg-nav';
        logoLink.classList = 'flex items-center ml-52';
        logo.classList = 'w-12';
        logoText.classList = 'text-5xl text-nav font-sebold';
        navItems.classList = 'flex text-nav text-xl font-semibold items-center mr-32'
        nameHeading.classList = 'text-7xl'
        mainContainer.classList = 'flex flex-col mt-64 ml-16 p-5 text-main-h';
        greetingPara.classList = 'font-semibold text-6xl';
        skillsPara.classList = 'text-2xl font-semibold text-[#222222]';
        exploreBtn.classList = 'flex rounded-2xl font-semibold mt-3 bg-nav text-[#D0D0D0] p-2 ring-1 ring-slate-500';
        exploreBtnIcon.classList = 'w-6 h-6 ml-2';
        h1Elem.classList = 'text-5xl font-semibold';
        profileImg.classList = 'mt-32 h-max';
    }
}

const screen280 = window.matchMedia('(min-width: 0px) and (max-width: 280px)');
const screen320 = window.matchMedia('(min-width: 281px) and (max-width: 320px)');
const screen375 = window.matchMedia('(min-width: 321px) and (max-width: 375px)');
const screen414 = window.matchMedia('(min-width: 376px) and (max-width: 414px)');
const screen430 = window.matchMedia('(min-width: 377px) and (max-width: 430px)');
const screen720 = window.matchMedia('(min-width: 431px) and (max-width: 720px)');
const screen1024 = window.matchMedia('(min-width: 721px) and (max-width: 1024px)');
const screenDefault = window.matchMedia('(min-width: 1025px)');

mobileS280(screen280);
mobileSM320(screen320);
mobileM375(screen375);
mobileML414(screen414);
mobileL430(screen430);
mobileXL720(screen720);
tablet1024(screen1024);
desktop(screenDefault);

window.onresize = () => {
    if (window.outerWidth >= 0 && window.outerWidth <= 280) {
        mobileS280(screen280);
    }
    if (window.outerWidth >= 281 && window.outerWidth <= 320) {
        mobileSM320(screen320);
    }
    if (window.outerWidth >= 321 && window.outerWidth <= 375) {
        mobileM375(screen375);
    }
    if (window.outerWidth >= 376 && window.outerWidth <= 414) {
        mobileML414(screen414);
    }
    if (window.outerWidth >= 415 && window.outerWidth <= 430) {
        mobileL430(screen430);
    }
    if (window.outerWidth >= 431 && window.outerWidth <= 720) {
        mobileXL720(screen720);
    }
    if (window.outerWidth >= 721 && window.outerWidth <= 1024) {
        tablet1024(screen1024);
    }
    if (window.outerWidth >= 1025) {
        desktop(screenDefault)
    }
}
window.onload = () => {
    if (window.outerWidth >= 0 && window.outerWidth <= 280) {
        mobileS280(screen280);
    }
    if (window.outerWidth >= 281 && window.outerWidth <= 320) {
        mobileSM320(screen320);
    }
    if (window.outerWidth >= 321 && window.outerWidth <= 375) {
        mobileM375(screen375);
    }
    if (window.outerWidth >= 376 && window.outerWidth <= 414) {
        mobileML414(screen414);
    }
    if (window.outerWidth >= 415 && window.outerWidth <= 430) {
        mobileL430(screen430);
    }
    if (window.outerWidth >= 431 && window.outerWidth <= 720) {
        mobileXL720(screen720);
    }
    if (window.outerWidth >= 721 && window.outerWidth <= 1024) {
        tablet1024(screen1024);
    }
    if (window.outerWidth >= 1025) {
        desktop(screenDefault)
    }
}