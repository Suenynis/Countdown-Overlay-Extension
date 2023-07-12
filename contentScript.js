var countdownElement = document.createElement("div");
countdownElement.id = "countdown";
document.body.appendChild(countdownElement);

var countdown = 6;
var countdownInterval = setInterval(function () {
  countdown--;
  countdownElement.textContent = countdown;

  if (countdown === 0) {
    clearInterval(countdownInterval);
    document.body.removeChild(countdownElement);
    restorePageContent();
  }
}, 1000);

var overlayElement = document.createElement("div");
overlayElement.id = "overlay";
document.body.appendChild(overlayElement);

// Add styles for the countdown animation and overlay
var styles = `
  #countdown {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-weight: bold;
    color: #fff;
    animation: countdown-animation 1s linear infinite;
    z-index: 9999;
  }

  @keyframes countdown-animation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9998;
  }
`;

var styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);

function restorePageContent() {
  countdownElement.style.display = "none";
  overlayElement.style.display = "none";
  // Add logic to restore the original page content visibility if needed
}
