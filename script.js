

// Start the camera (front camera)
navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
.then(stream => {
    document.getElementById("camera").srcObject = stream;
})
.catch(error => {
    alert("Camera access blocked! Please enable permissions.");
});

// Song Database (Correct file names from your folder)
const songsDatabase = {
  happy: [
    "songs/happy.mp3"
  ],
  sad: [
    "songs/sad.mp3"
  ],
  angry: [
    "songs/angry.mp3"
  ],
  neutral: [
    "songs/neutral.mp3"
  ]
};

// Random emotion generator for prototype
function detectEmotion() {
    const emotions = ["happy", "sad", "angry", "neutral"];
    const emotion = emotions[Math.floor(Math.random() * emotions.length)];

    // Update emotion on screen
    document.getElementById("emotion").innerText =
        "Emotion: " + emotion.toUpperCase();

    // Play song based on the emotion
    playSongBasedOnEmotion(emotion);
}

// Play a song that matches the detected emotion
function playSongBasedOnEmotion(emotion) {
    const playlist = songsDatabase[emotion];
    const randomSong = playlist[Math.floor(Math.random() * playlist.length)];

    const audio = document.getElementById("audioPlayer");
    audio.src = randomSong;
    audio.play();
}
