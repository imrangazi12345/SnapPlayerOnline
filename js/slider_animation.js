const menuBg = document.querySelector('.menu-slider-bg');
const slider = document.querySelector('.menu-slider');
const sliderMenuList = document.querySelector('.slider-menu-list');

function sliderOpen(){
  console.log('open')
  menuBg.style.display = 'block';
  setTimeout(()=>menuBg.style.opacity = 1,90);
  slider.style.width ="75%";
  sliderMenuList.style.marginLeft = '0px';
}

function sliderClose(){
  console.log('close')
  menuBg.style.display = 'none';
  setTimeout(()=> menuBg.style.opacity = 0,90);
  slider.style.width =0;
  sliderMenuList.style.marginLeft = '-300px';
}
// slider animations end />

