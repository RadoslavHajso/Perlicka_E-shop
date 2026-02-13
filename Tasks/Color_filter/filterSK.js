
document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('#category-filter-hover, #category-filter, .category-filters')) return;
  
    const section = document.querySelector('.filter-section-parametric-id-37');
    if (!section) return;
  
    section.classList.add('--active');
    const h4 = section.querySelector('h4');
    if (h4) h4.classList.add('--active');
  });

  //toto je aj pre Hu verziu maju rovnake id