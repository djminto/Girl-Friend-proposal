// 3D Hearts Animation
const heartsBg = document.querySelector('.hearts-bg');
const heartColors = ['#ff69b4', '#ffb6e6', '#ff4fa3', '#ff8ecf', '#ffb6e6'];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  const size = Math.random() * 32 + 24;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  heart.style.background = heartColors[Math.floor(Math.random() * heartColors.length)];
  heartsBg.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 400);

// Add heart CSS
const style = document.createElement('style');
style.innerHTML = `
.heart {
  position: absolute;
  bottom: -40px;
  pointer-events: none;
  opacity: 0.85;
  animation: floatUp 5s linear forwards;
  z-index: 1;
}
.heart::before, .heart::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: inherit;
}
.heart::before {
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
.heart::after {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.heart {
  background: #ff69b4;
  transform: rotate(-45deg) scale(1.1);
}
@keyframes floatUp {
  0% { transform: translateY(0) scale(1.1) rotate(-45deg); opacity: 0.85; }
  80% { opacity: 1; }
  100% { transform: translateY(-110vh) scale(1.2) rotate(-45deg); opacity: 0; }
}
`;
document.head.appendChild(style);
