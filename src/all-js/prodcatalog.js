const showMoreBtn = document.querySelector('.show-more-btn');
const hiddenItems = document.querySelectorAll('.product-item:nth-child(n+5)');

if (window.innerWidth < 768 && hiddenItems.length > 0) {
  showMoreBtn.hidden = false;

  showMoreBtn.addEventListener('click', () => {
    hiddenItems.forEach(item => (item.style.display = 'block'));
    showMoreBtn.style.display = 'none';
  });
}
