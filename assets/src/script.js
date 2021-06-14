const h5 = document.querySelector('.whatsapp h5');
const mouseOver = () => {
  h5.style.display = 'block';
};

const mouseOut = () => {
  h5.style.display = 'none';
};

const socialMenu = document.querySelector('.social');
const whatsapp = document.querySelector('.whatsapp');

socialMenu.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};

window.addEventListener('scroll', function () {
  socialMenu.hidden = pageYOffset < document.documentElement.clientHeight;
  whatsapp.hidden = pageYOffset < document.documentElement.clientHeight;
  
});
