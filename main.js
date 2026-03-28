// ===== MOBILE MENU =====
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== GARDEN FILTER =====
function filterGarden(type, btn) {
  document.querySelectorAll('.garden-section .tag-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.plant-card').forEach(card => {
    const t = card.getAttribute('data-type');
    card.classList.toggle('hidden', type !== 'all' && t !== type);
  });
}

// ===== WATER PLANT =====
function waterPlant(btn, name) {
  btn.textContent = '✓ Watered!';
  btn.classList.add('watered');
  btn.disabled = true;
  const card = btn.closest('.plant-card');
  if (card) {
    const bar = card.querySelector('.water-bar');
    const label = card.querySelector('.water-label');
    if (bar)   { bar.style.width = '100%'; }
    if (label) { label.textContent = '✅ Just watered!'; label.style.color = '#388e3c'; }
  }
  showToast(`💧 ${name} has been watered!`);
  setTimeout(() => {
    btn.textContent = '💧 Water';
    btn.classList.remove('watered');
    btn.disabled = false;
  }, 60000);
}

// ===== ADD PLANT MODAL =====
function openAddModal() {
  document.getElementById('addModal').classList.add('open');
}
function closeAddModal() {
  document.getElementById('addModal').classList.remove('open');
}

function addPlant() {
  const name  = document.getElementById('newName').value.trim();
  const emoji = document.getElementById('newEmoji').value.trim() || '🌱';
  const type  = document.getElementById('newType').value;
  const freq  = document.getElementById('newFreq').value;
  const light = document.getElementById('newLight').value;

  if (!name) { showToast('⚠️ Please enter a plant name!'); return; }

  const grid = document.getElementById('plantGrid');
  const card = document.createElement('div');
  card.className = 'plant-card';
  card.setAttribute('data-type', type);
  card.setAttribute('data-id', Date.now());

  const badgeClass = type === 'indoor' ? 'indoor' : type === 'outdoor' ? 'outdoor' : type === 'succulents' ? 'succulent' : 'herb';
  const badgeLabel = type === 'indoor' ? 'Indoor' : type === 'outdoor' ? 'Outdoor' : type === 'succulents' ? 'Succulent' : 'Herb';

  card.innerHTML = `
    <div class="plant-emoji">${emoji}</div>
    <div class="plant-info">
      <h3>${name}</h3>
      <span class="plant-type-badge ${badgeClass}">${badgeLabel}</span>
      <div class="plant-meta">
        <span>💧 ${freq}</span>
        <span>☀️ ${light}</span>
      </div>
      <div class="water-bar-wrap"><div class="water-bar" style="width:70%"></div></div>
      <p class="water-label">💧 Newly added</p>
    </div>
    <div class="card-actions">
      <button class="btn-water" onclick="waterPlant(this,'${name}')">💧 Water</button>
      <button class="btn-details" onclick="showDetails('${name}','${emoji}','${badgeLabel}','${freq}','${light}','Newly added plant — update care notes as you learn more!')">Details</button>
    </div>
  `;
  grid.prepend(card);
  closeAddModal();
  showToast(`🌱 ${emoji} ${name} added to your garden!`);

  // update stats
  const total = document.getElementById('totalPlants');
  if (total) total.textContent = parseInt(total.textContent) + 1;

  // clear form
  document.getElementById('newName').value = '';
  document.getElementById('newEmoji').value = '';
}

// close modal on overlay click
document.addEventListener('click', e => {
  const addModal = document.getElementById('addModal');
  if (addModal && e.target === addModal) closeAddModal();
  const detailModal = document.getElementById('detailModal');
  if (detailModal && e.target === detailModal) closeDetailModal();
});

// ===== DETAILS MODAL =====
function showDetails(name, emoji, type, freq, light, note) {
  document.getElementById('dName').textContent  = name;
  document.getElementById('dEmoji').textContent = emoji;
  document.getElementById('dType').textContent  = type;
  document.getElementById('dFreq').textContent  = freq;
  document.getElementById('dLight').textContent = light;
  document.getElementById('dNote').textContent  = note;
  document.getElementById('detailModal').classList.add('open');
}
function closeDetailModal() {
  document.getElementById('detailModal').classList.remove('open');
}

// ===== ESC TO CLOSE MODALS =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAddModal();
    closeDetailModal();
  }
});
