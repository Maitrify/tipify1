// document.getElementById('filterForm').addEventListener('submit', function (e) {
//   e.preventDefault();

//   // Extract filter values
//   const form = new FormData(e.target);
//   const filters = {
//     tripType: form.getAll('tripType'),
//     season: form.get('season'),
//     mood: form.getAll('mood'),
//     groupSize: form.get('groupSize'),
//     occasion: form.get('occasion'),
//   };

//   // Placeholder: Replace with your own data fetch (Firebase later)
//   const dummyTrips = [
//     { title: 'Goa Beach', type: 'party', season: 'summer', group: '2-3' },
//     { title: 'Manali Snow Trip', type: 'adventure', season: 'winter', group: '4-6' },
//     { title: 'Daman', type: 'family', season: 'summer', group: '4-6'}
//   ];

//   // Filter logic (basic matching)
//   const results = dummyTrips.filter(trip => {
//     return (!filters.season || trip.season === filters.season) &&
//            (!filters.groupSize || trip.group === filters.groupSize);
//   });

//   // Show results
//   const resultsContainer = document.getElementById('results');
//   resultsContainer.innerHTML = results.length
//     ? results.map(r => `<p>🌍 ${r.title}</p>`).join('')
//     : '<p>No trips found. Try adjusting filters.</p>';
// });

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