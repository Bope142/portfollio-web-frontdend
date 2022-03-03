const removeSelect = () => {
    document.querySelectorAll('.nav__link').
    forEach(link => link.classList.remove('link_active'))
}
const addSelect = (link) => {
    link.classList.add('link_active')
}
let options = {
    root: null,
    rootMargin: '0px',
    threshold: .3
}
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav__link').
            forEach((link, index) => {
                if (link.classList.contains(entry.target.id)) {
                    removeSelect()
                    addSelect(document.querySelectorAll('.nav__link')[index])
                }

            })
        }

    });
};

let observer = new IntersectionObserver(callback, options);
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.observer-link').
    forEach(r => {
        observer.observe(r)
    });
    AOS.init({
        easing: 'ease-in-out'
      });

})
