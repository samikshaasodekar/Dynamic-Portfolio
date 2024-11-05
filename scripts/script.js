document.querySelector(".hamburger-icon").addEventListener("click", function() {
  const menuLinks = document.querySelector(".menu-links");
  menuLinks.classList.toggle("open");
  this.classList.toggle("open");
});




document.addEventListener('DOMContentLoaded', function () {
    const sliderList = document.querySelector('.slider-list');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    sliderList.addEventListener('mousedown', (e) => {
      isDown = true;
      sliderList.classList.add('active');
      startX = e.pageX - sliderList.offsetLeft;
      scrollLeft = sliderList.scrollLeft;
    });
  
    sliderList.addEventListener('mouseleave', () => {
      isDown = false;
      sliderList.classList.remove('active');
    });
  
    sliderList.addEventListener('mouseup', () => {
      isDown = false;
      sliderList.classList.remove('active');
    });
  
    sliderList.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderList.offsetLeft;
      const walk = (x - startX) * 3; 
      sliderList.scrollLeft = scrollLeft - walk;
    });
  });
  