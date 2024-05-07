window.addEventListener('DOMContentLoaded', init);
let voices = [];

function init() {
    const synth = window.speechSynthesis;
    const voiceSelect = document.querySelector("#voice-select");
    const textToSpeak = document.querySelector("#text-to-speak");
    const speakButton = document.querySelector("button");
    const img = document.querySelector("img");

    function populateVoiceList() {
        voices = synth.getVoices();

        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${voices[i].name} (${voices[i].lang})`;

            if (voices[i].default) {
                option.textContent += " — DEFAULT";
            }

            option.setAttribute("data-lang", voices[i].lang);
            option.setAttribute("data-name", voices[i].name);
            voiceSelect.appendChild(option);
        }
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    speakButton.addEventListener('click', () => {
        const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
        const selectedText = textToSpeak.value;
        console.log(selectedText)
        img.setAttribute("src", "assets/images/smiling-open.png");
        const utterance = new SpeechSynthesisUtterance(selectedText);
        const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
        utterance.voice = selectedVoice;
        utterance.onend = () => {
            img.setAttribute("src", "assets/images/smiling.png");

        };
        synth.speak(utterance);
    });

}