const getVariable = () => {
  const audioFile = document.querySelector('#audio');
  const musicPlayToggle = document.querySelector('#playAudio');
  const percentage = document.querySelector('#percentage');
  const currentTime = document.querySelector('#currentTime');
  const seekObj = document.querySelector('#seekObj');

  return {
    audioFile: audioFile,
    musicPlayToggle: musicPlayToggle,
    percentage,
    currentTime,
    seekObj
  }
};

const togglePlay = () => {
  let { audioFile, musicPlayToggle } = getVariable();
  if (audioFile.paused === false) {
    audioFile.pause();
    musicPlayToggle.innerHTML = '<i class="material-icons small">play_arrow</i>';
  } else {
    audioFile.play();
    musicPlayToggle.innerHTML = '<i class="material-icons small">pause</i>';
  }
}

const indicatorPlayed = () => {
  const { percentage, audioFile } = getVariable();
  let percentageCurrent = (audioFile.currentTime / audioFile.duration).toFixed(2) * 100;
  percentage.style.width = `${percentageCurrent}%`;
}

const calculateCurrentValue = (currentTime) => {
  const currentMinute = parseInt(currentTime / 60) % 60;
  const currentSecond = currentTime % 60;
  const currentSec = currentSecond.toFixed();
  const currentTimeFormat = `${currentMinute < 10 ?
    `0${currentMinute}` : currentMinute}: 
     ${currentSec < 10 ? `0${currentSec}` : currentSec} `;

  return currentTimeFormat;
};

const initProgressBar = () => {
  let { audioFile, currentTime, seekObj, musicPlayToggle, percentage }
    = getVariable();
  const currentTimeActual = calculateCurrentValue(audioFile.currentTime);
  currentTime.innerHTML = currentTimeActual;

  audioFile.addEventListener('ended', () => {
    percentage.style.width = 0;
    currentTime.innerHTML = '00:00';
  });

  /* const seek = (e) => {
    const percent = e.offsetX / this.offsetWidth
  } */

  indicatorPlayed();
}

const trackPlaying = () => {

}

export { getVariable, togglePlay, initProgressBar };