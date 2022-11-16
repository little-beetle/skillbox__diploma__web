const items = document.querySelectorAll('.evidence-content');

const selector = document.querySelector('.evidence-select');

const render = () => {
  const index = +selector.value - 1;
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = (i === index) ? 'block' : 'none';
  }
}

selector.addEventListener('input', render);
render();
