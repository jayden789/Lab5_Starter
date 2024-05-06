// expose.js

window.addEventListener('DOMContentLoaded', init);

const airHornImg = "assets/images/air-horn.svg";
const carHornImg = "assets/images/car-horn.svg";
const partyHornImg = "assets/images/party-horn.svg";

const volumeIcon0 = "assets/icons/volume-level-0.svg";
const volumeIcon1 = "assets/icons/volume-level-1.svg";
const volumeIcon2 = "assets/icons/volume-level-2.svg";
const volumeIcon3 = "assets/icons/volume-level-3.svg";

const airSound = "assets/audio/air-horn.mp3";
const carSound = "assets/audio/car-horn.mp3";
const partySound = "assets/audio/party-horn.mp3";
let option = "";

const jsConfetti = new JSConfetti();

function init() {
    // TODO
    const imgList = document.getElementsByTagName("img");
    const hornSelect = document.querySelector("#horn-select");
    const audio = document.querySelector(".hidden");
    const button = document.querySelector("button");
    const volume = document.querySelector("#volume");
    
    hornSelect.addEventListener("change", (event)=> {
        loadImg(event.target.value);
        option = event.target.value;
    });

    button.addEventListener("click", ()=> {
        setSound(option);
    });

    volume.addEventListener("input", (event)=> {
        setIcon(event.target.value)
        audio.volume = parseFloat(event.target.value) / 100;
    })



    const loadImg = (horn) => {
        if (horn == "car-horn") {
            imgList[0].src = carHornImg;
            imgList[0].alt = "Car Horn Image";
        } else if (horn == "air-horn") {
            imgList[0].src = airHornImg;
            imgList[0].alt = "Air Horn Image";
        } else if (horn == "party-horn") {
            imgList[0].src = partyHornImg;
            imgList[0].alt = "Party Horn Image";
            jsConfetti.addConfetti()
        }
    }

    const setSound = (horn) => {
        if (horn == "car-horn") {
            audio.src = carSound;
        } else if (horn == "air-horn") {
            audio.src = airSound;
        } else if (horn == "party-horn") {
            audio.src = partySound;
        } else {
            audio.src = "";
        }
        audio.setAttribute("autoplay", "");
    }

    const setIcon = (volumeValue) => {
        const value = parseInt(volumeValue);

        if (value == 0) {
            imgList[1].src = volumeIcon0;
            imgList[1].alt = "Volume level 0";
        } else if (value > 0 && value < 33) {
            imgList[1].src = volumeIcon1;
            imgList[1].alt = "Volume level 1";
        }  else if (value > 32 && value < 67) {
            imgList[1].src = volumeIcon2;
            imgList[1].alt = "Volume level 2";
        } else {
            imgList[1].src = volumeIcon3;
            imgList[1].alt = "Volume level 3";
        }
    }
}