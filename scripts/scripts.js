document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const logo = document.querySelector('.header__logo img');
  const btns = document.querySelectorAll('.btn-reset');
  const goTopBtn = document.querySelector('.gotopbtn');
  const accordions = document.querySelectorAll('.accordion');

  function checkHeight() {
      if (window.scrollY > 200) {
          goTopBtn.style.display = "block";
          header.style.background = '#fff';
          header.style.color = '#95c535';
          header.style.borderBottom = '5px solid #c7e6a3';
          btns.forEach(btn => btn.style.color = '#95c535');
          logo.style.filter = "invert(36%) sepia(74%) saturate(346%) hue-rotate(56deg) brightness(91%) contrast(92%)";
      } 
      else {
          goTopBtn.style.display = "none";
          header.style.background = 'none';
          header.style.color = '#fff';
          header.style.borderBottom = 'none';
          btns.forEach(btn => btn.style.color = '#fff');
          logo.style.filter = "invert(1) brightness(1000%)";
      }
  }

  window.addEventListener('scroll', checkHeight);

  accordions.forEach(acc => {
      acc.addEventListener('click', function() {
          this.classList.toggle('active');
          const panel = this.nextElementSibling;
          panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
      });
  });
});