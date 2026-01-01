const scenes = document.querySelectorAll('.scene');
const openBtn = document.getElementById('openBtn');
const card = document.querySelector('.card');
const music = document.getElementById('bgMusic');

let index = 0;

openBtn.onclick = () => {
  document.querySelector('.start-screen').style.display = 'none';
  card.classList.remove('hidden');
  music.play();
  showScene();
};

function showScene() {
  if (index > 0) scenes[index - 1].style.opacity = 0;
  if (index < scenes.length) {
    scenes[index].style.opacity = 1;
    index++;
    setTimeout(showScene, index === scenes.length ? 30000 : 20000);
  }
}

/* 🌹 Petals */
const petals = document.getElementById('petals');
setInterval(() => {
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = 8 + Math.random() * 6 + 's';
  petals.appendChild(p);
  setTimeout(() => p.remove(), 15000);
}, 400);

/* 🤍 Hearts */
const hearts = document.getElementById('hearts');
setInterval(() => {
  const h = document.createElement('div');
  h.className = 'heart';
  h.innerHTML = '♡';
  h.style.left = Math.random() * 100 + 'vw';
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 14000);
}, 1200);

/* ✨ Glitter */
const glitter = document.getElementById('glitter');
for (let i = 0; i < 80; i++) {
  const g = document.createElement('div');
  g.className = 'glitter';
  g.style.left = Math.random() * 100 + 'vw';
  g.style.top = Math.random() * 100 + 'vh';
  glitter.appendChild(g);
}

/* 🎆 Fireworks */
document.addEventListener('click', (e) => {
  for (let i = 0; i < 10; i++) {
    const f = document.createElement('div');
    f.className = 'firework';
    f.style.left = e.clientX + 'px';
    f.style.top = e.clientY + 'px';
    f.style.background = `hsl(${Math.random()*360},100%,70%)`;
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1000);
  }
});
