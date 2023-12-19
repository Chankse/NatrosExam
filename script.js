const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const otherNewsToggle = document.getElementById('newsToggleBtn')
const otherNewsCont = document.getElementById('otherNews')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
})

otherNewsToggle.addEventListener('click', () => {
    otherNewsToggle.classList.toggle('active');

    if (otherNewsToggle.classList.contains('active')) {
        otherNewsCont.style.display = 'block';
    } else {
        otherNewsCont.style.display = 'none';
    }
})