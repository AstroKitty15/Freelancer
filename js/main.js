const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
}

AOS.init();

// AOS.init({

    // Если нужно отключить анимацию на мобильных
    // disable: 'mobile'
    
    // Если нужно чтобы анимация сработала только один раз при открытии страницы
    // once: true

// });