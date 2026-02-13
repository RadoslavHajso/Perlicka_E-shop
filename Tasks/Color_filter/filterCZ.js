document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.filter-section-parametric-id-4');
    if (!section) return;

    section.classList.add('--active');
    const h4 = section.querySelector('h4');
    if (h4) h4.classList.add('--active');
});