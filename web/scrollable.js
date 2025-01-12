const scrollContainer = document.querySelector('.scroll');

let isDown = false;
let startX;
let scrollLeft;

// Mouse events
scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile support
scrollContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});
