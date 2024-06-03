// script.js
const videoSources = [
    "videos/Video1.mp4",
    "videos/Video2.mp4",
    "videos/Video3.mp4",
    "videos/Video4.mp4",
    "videos/Video5.mp4",
    "videos/Video6.mp4",
];

const videoUnlockCodes = [
    "1600",
    "1738",
    "8507",
    "5046",
    "6969",
    "4200",
    "8008"
];

let unlockedVideos = [];

function addVideos() {
    const videosContainer = document.querySelector('.videos');
    videoSources.forEach((source, index) => {
        const colWrapper = document.createElement("div");
        colWrapper.classList.add("col-md-4", "mb-4");
        const videoWrapper = document.createElement("div");
        videoWrapper.classList.add("card", "bg-dark");
        colWrapper.appendChild(videoWrapper);

        const videoElement = document.createElement("video");
        videoElement.id = "video" + (index + 1);
        videoElement.classList.add("video-player", "card-img-top", "object-fit-contain");
        videoElement.controls = false; // Initially disable controls
        const sourceElement = document.createElement("source");
        sourceElement.src = source;
        sourceElement.type = "video/mp4";
        videoElement.poster = "video-thumb.png";
        videoElement.appendChild(sourceElement);
        videoWrapper.appendChild(videoElement);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        videoWrapper.appendChild(cardBody);

        // Add video number
        const videoNumber = document.createElement("div");
        videoNumber.classList.add("video-number", "text-uppercase", "fs-2", "text-light");
        videoNumber.textContent = `Video ${index + 1}`;
        cardBody.appendChild(videoNumber);

        const row = document.createElement("div");
        row.classList.add("row");
        const rowColL = document.createElement("div");
        rowColL.classList.add("col");
        const rowColR = document.createElement("div");
        rowColR.classList.add("col");
        row.appendChild(rowColL);
        row.appendChild(rowColR);

        cardBody.appendChild(row);

        // Add input field for unlock code
        const unlockInput = document.createElement("input");
        unlockInput.id = `videoUnlock${index}`;
        unlockInput.classList.add("unlock-input", "form-control");
        unlockInput.placeholder = "Enter unlock code";
        rowColL.appendChild(unlockInput);

        // Add button for unlocking the video
        const unlockButton = document.createElement("button");
        unlockButton.textContent = "Unlock Video";
        unlockButton.classList.add("unlock-btn", "btn", "btn-light");
        unlockButton.addEventListener("click", () => {
          const code = document.getElementById(`videoUnlock${index}`).value;
          unlockVideo(index, code);
        });
        rowColR.appendChild(unlockButton);

        videosContainer.appendChild(colWrapper);
    });
}

function unlockVideo(index, code) {
    if (code === videoUnlockCodes[index]) {
        unlockedVideos.push(index);
        const video = document.getElementById(`video${index + 1}`);
        video.controls = true; 
        video.requestFullscreen();
        video.play(); 
    } else {
        alert("Invalid code! Please try again.");
    }
}
window.addEventListener('DOMContentLoaded', () => {
    addVideos();
});
