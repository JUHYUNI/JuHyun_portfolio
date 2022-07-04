var iconBtn = document.querySelector('.icon_btn');
const sideMenu = document.querySelector('.sideMenu');

iconBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('on');
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 1000,
  },
  observer: true,
  observeParents: true,
  loop: true
});