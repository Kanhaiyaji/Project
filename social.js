// Inject Social Media Popup into every page
document.addEventListener("DOMContentLoaded", function () {
  const popup = `
    <div class="social-popup">
      <a href="https://www.instagram.com/oddsocean.in" target="_blank">
        <img src="insta.jpeg" alt="Instagram" />
      </a>
      <a href="https://youtube.com/@oddsocean-in" target="_blank">
        <img src="yt.png" alt="YouTube" />
      </a>
      <a href="https://x.com/oddsocean_in" target="_blank">
        <img src="x.png" alt="Twitter (X)" />
      </a>
      <a href="https://discord.gg/aubQj2Fxzd" target="_blank">
        <img src="download.png" alt="Discord" />
      </a>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", popup);
});
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".hero h1");
  const audio = document.getElementById("welcome-audio");

  if (title && audio) {
    title.addEventListener("mouseenter", () => {
      audio.currentTime = 0; // har hover pe restart hoga
      audio.play();
    });
  }
});
