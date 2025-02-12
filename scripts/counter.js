document.addEventListener('DOMContentLoaded', () => {
    let a = 0;
    
    window.addEventListener('scroll', () => {
        const counterBox = document.querySelector('#counter-box');
        if (!counterBox) return;
        
        const oTop = counterBox.offsetTop - window.innerHeight;
        if (a === 0 && window.scrollY > oTop) {
            document.querySelectorAll('.counter').forEach(counter => {
                const countTo = parseInt(counter.getAttribute('data-number'), 10);
                
                let countNum = 0;
                const duration = 3000;
                const startTime = performance.now();
                
                function animateCounter(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    if (elapsedTime < duration) {
                        countNum = Math.ceil((elapsedTime / duration) * countTo);
                        counter.textContent = countNum.toLocaleString('en');
                        requestAnimationFrame(animateCounter);
                    } else {
                        counter.textContent = countTo.toLocaleString('en');
                    }
                }
                requestAnimationFrame(animateCounter);
            });
            a = 1;
        }
    });
    
    const swiper = new Swiper('.mySwiper', {
        grabCursor: true,
        spaceBetween: 30,
        breakpoints: {
            767: {
                slidesPerView: 2
            }
        }
    });
});
