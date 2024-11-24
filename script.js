

document.getElementById("gift-box").addEventListener("click", function () {
  // Hide the gift box
  document.getElementById("gift-box").style.display = "none";

  // Show the photo
  document.getElementById("photo").style.display = "block";
  document.getElementById("photo").classList.remove("hidden");

  // Show the balloons and trigger animation
  let balloons = document.getElementById("balloons");
  balloons.style.display = "flex";
  for (let i = 0; i < 10; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.animation = `floatUp ${
      Math.random() * 5 + 5
    }s linear infinite`;
    balloons.appendChild(balloon);
  }

  // Play music

  // Display birthday message
  setTimeout(() => {
    document.getElementById("message").classList.remove("hidden");
  }, 1000);
});
document.getElementById('gift-box').addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.muted = false; // Unmute the audio
    audio.play().catch(error => console.log('Audio play error:', error));

    // Rest of your click logic...
});
