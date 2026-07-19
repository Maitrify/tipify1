const openBtn = document.getElementById('openPanelBtn');
const panel = document.getElementById('filterPanel');

openBtn.addEventListener('click', () => {
  panel.classList.remove('hidden');
  panel.classList.add('visible');
});

document.addEventListener('click', (e) => {
  if (!panel.contains(e.target) && e.target !== openBtn) {
    panel.classList.remove('visible');
    panel.classList.add('hidden');
  }
});

// (Optional) Handle form submit
const filterForm = document.getElementById('filterForm');
filterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(filterForm);
  const filters = Object.fromEntries(data.entries());
  console.log('Applied Filters:', filters);
});