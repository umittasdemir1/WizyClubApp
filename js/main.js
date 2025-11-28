// ========================
// TAB SWITCHING
// ========================
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((x) => {
      x.classList.remove('active');
      x.classList.add('inactive');
    });
    btn.classList.add('active');
    btn.classList.remove('inactive');
  });
});

// ========================
// SEARCH FUNCTIONALITY
// ========================
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const closeSearch = document.getElementById('closeSearch');
const tabsWrapper = document.getElementById('tabsWrapper');

function openSearch() {
  document.body.classList.add('search-open');
  tabsWrapper.classList.add('search-mode');
  searchOverlay.classList.add('active');
  setTimeout(() => searchInput.focus(), 120);
}

function closeSearchFn() {
  document.body.classList.remove('search-open');
  tabsWrapper.classList.remove('search-mode');
  searchOverlay.classList.remove('active');
  searchInput.value = '';
}

searchToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  openSearch();
});

closeSearch.addEventListener('click', closeSearchFn);

document.addEventListener('click', (e) => {
  if (!searchOverlay.contains(e.target) && !searchToggle.contains(e.target)) {
    closeSearchFn();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearchFn();
});

// ========================
// ACTION BUTTONS TOGGLE
// ========================

// Like Button
const likeBtn = document.getElementById('likeBtn');
const likeIcon = document.getElementById('likeIcon');
const likeCount = document.getElementById('likeCount');
let isLiked = false;
let likeCountValue = 4400; // 4.4k

likeBtn.addEventListener('click', () => {
  isLiked = !isLiked;
  likeIcon.classList.toggle('active');

  // TikTok tarzı zıplama animasyonu
  if (isLiked) {
    likeIcon.classList.add('bounce');

    // Animasyon bitince bounce class'ını kaldır
    setTimeout(() => {
      likeIcon.classList.remove('bounce');
    }, 600);

    likeCountValue++;
    likeCount.textContent = formatNumber(likeCountValue);
  } else {
    likeCountValue--;
    likeCount.textContent = formatNumber(likeCountValue);
  }
});

// Save Button
const saveBtn = document.getElementById('saveBtn');
const saveIcon = document.getElementById('saveIcon');
const saveCount = document.getElementById('saveCount');
let isSaved = false;
let saveCountValue = 856;

saveBtn.addEventListener('click', () => {
  isSaved = !isSaved;
  saveIcon.classList.toggle('active');

  if (isSaved) {
    saveCountValue++;
    saveCount.textContent = formatNumber(saveCountValue);
  } else {
    saveCountValue--;
    saveCount.textContent = formatNumber(saveCountValue);
  }
});

// Share Button
const shareBtn = document.getElementById('shareBtn');
const shareIcon = document.getElementById('shareIcon');
const shareCount = document.getElementById('shareCount');
let shareCountValue = 2100; // 2.1k

shareBtn.addEventListener('click', () => {
  shareIcon.classList.add('active');

  // Her paylaşımda sayaç artır
  shareCountValue++;
  shareCount.textContent = formatNumber(shareCountValue);

  // Web Share API varsa kullan
  if (navigator.share) {
    navigator.share({
      title: 'WizyClub',
      text: 'Captivating landscape views from my latest adventure.',
      url: window.location.href
    }).catch(() => {
      console.log('Share cancelled');
    });
  }

  // Animasyon için rengi kısa süre sonra kaldır
  setTimeout(() => {
    shareIcon.classList.remove('active');
  }, 300);
});

// Shopping Button
const shoppingBtn = document.getElementById('shoppingBtn');
const shoppingIcon = document.getElementById('shoppingIcon');
const shoppingCount = document.getElementById('shoppingCount');
let isShoppingActive = false;
let shoppingCountValue = 124;

shoppingBtn.addEventListener('click', () => {
  isShoppingActive = !isShoppingActive;
  shoppingIcon.classList.toggle('active');

  if (isShoppingActive) {
    shoppingCountValue++;
    shoppingCount.textContent = formatNumber(shoppingCountValue);
  } else {
    shoppingCountValue--;
    shoppingCount.textContent = formatNumber(shoppingCountValue);
  }
});

// ========================
// HELPER FUNCTIONS
// ========================

// Sayı formatlama (4400 -> 4.4k)
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}
