function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const projectContainer = document.querySelector('.project-container');
const projects = document.querySelectorAll('.details-container');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

function updateSlider() {
  const totalProjects = projects.length;
  const projectWidth = projects[0].offsetWidth;
  const scrollAmount = currentIndex * projectWidth;
  projectContainer.style.transform = `translateX(-${scrollAmount}px)`;
}

nextBtn.addEventListener('click', () => {
  const totalProjects = projects.length;
  if (currentIndex < totalProjects - 1) {
    currentIndex++;
  }
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateSlider();
});

