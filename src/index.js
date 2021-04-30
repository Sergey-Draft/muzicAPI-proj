import router from "./routes";
import { burgerHandle } from "../src/components/burger";
import getPreloader from "./components/preloader";
import { dots, putActiveDot, getActiveSlide, putActiveSlide, getTemplateSlides } from "./components/slider";
import { createRadioList } from "./components/music";
import { writeAccountData, checkLogIn } from "./components/signin";
import { getVariable, togglePlay, initProgressBar } from "./components/player";

document.body.innerHTML = `
    <main>
       <div class="header" id="header"></div>
       <div id="content">
            testksdjhfjksdkf
       </div> 
       <div class="fixed__player">
    <div class="audio-player">

        <audio id="audio">
          <source src="https://thenewcode.com/assets/audio/24-ghosts-III.mp3" type="audio/mp3">
        </audio>
      
        <div class="player-controls">
      
          <div id="radioIcon"></div>
      
          <button id="playAudio"> <i class="material-icons small">play_arrow</i></button>
      
          <div id="seekObjContainer">
            <div id="seekObj">
              <div id="percentage"></div>
            </div>
          </div>
      
          <p><small id="currentTime">00:00</small></p>
      
        </div>
      </div>
    </div>
    </main>
`;

window.addEventListener('load', async () => {
    // Загрузка страницы Loading page
    await router();
    // Burger click
    let burger = document.querySelector('#menu-toggle');
    if (burger) {
        burger.addEventListener('click', burgerHandle);
    }
    // Preloader
    const preloader = document.querySelector('#main-preloader');
    if (preloader) {
        setTimeout(getPreloader, 2000);
    }
    // Slider
    let dots = document.querySelector('.items__button');
    if (dots) {
        getActiveSlide();
    }


    if (dots) {
        dots.addEventListener('click', getTemplateSlides);
    }

    // List radio
    createRadioList();


    let registerBtn = document.querySelector('#register-form');
    if (registerBtn) {
        registerBtn.addEventListener('submit', writeAccountData);
    }

    let loginFrom = document.querySelector('#login-form');
    if (loginFrom) {
        loginFrom.addEventListener('submit', checkLogIn);
    }

    // Player

    let { musicPlayToggle, audioFile } = getVariable();
    musicPlayToggle.addEventListener('click', togglePlay);

    audioFile.addEventListener('timeupdate', initProgressBar);

});

window.addEventListener('hashchange', async () => {
    //Loading page
    await router();
    // Burger click
    let burger = document.querySelector('#menu-toggle');
    if (burger) {
        burger.addEventListener('click', burgerHandle);
    }

    // Preloader
    const preloader = document.querySelector('#main-preloader');
    if (preloader) {
        setTimeout(getPreloader, 1000);
    }

    //Slider
    // Slider
    let dots = document.querySelector('.items__button');
    if (dots) {
        getActiveSlide();
    }
    if (dots) {
        dots.addEventListener('click', getTemplateSlides);
    }

    //player
    let { musicPlayToggle, audioFile } = getVariable();
    musicPlayToggle.addEventListener('click', togglePlay);

    audioFile.addEventListener('timeupdate', initProgressBar);

});









