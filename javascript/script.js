
/* Apparition des blocs */

const blockAdvent1 = document.querySelector('.section2__text');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = blockAdvent1.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
        blockAdvent1.classList.add('active')
    }
})

const blockAdvent2 = document.querySelector('.section4__frontend');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = blockAdvent2.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
        blockAdvent2.classList.add('active')
    }
})

const blockAdvent3 = document.querySelector('.section4__backend');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = blockAdvent3.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
        blockAdvent3.classList.add('active')
    }
})

const blockAdvent4 = document.querySelector('.section4__system');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = blockAdvent4.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
        blockAdvent4.classList.add('active')
    }
})


/* Evenement rotation cards */
const ratio = 0.2
const option = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('active')
    } else {
        entry.target.classList.remove('active')
    } 
    })
}
const observer = new IntersectionObserver(handleIntersect, option)
document.querySelectorAll('.cardsall').forEach(function (r) {
    observer.observe(r)
})
