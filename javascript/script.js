window.addEventListener('scroll', () => {
    console.log('scroll!');
})

const blockAdvent1 = document.querySelector('.section2__text');
const blockAdvent2 = document.querySelector('.section2__cards1');
const blockAdvent3 = document.querySelector('.section4__frontend');
const blockAdvent4 = document.querySelector('.section4__backend');
const blockAdvent5 = document.querySelector('.section4__system');


window.addEventListener('scroll', () => {
    if(window.scrollY > 880 ) {
        blockAdvent1.classList.add('scroll');
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 1300 ) {
        blockAdvent2.classList.add('scroll');
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 2255 ) {
        blockAdvent3.classList.add('scroll');
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 2695 ) {
        blockAdvent4.classList.add('scroll');
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 2840 ) {
        blockAdvent5.classList.add('scroll');
    }
});
