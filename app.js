const icons = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6h18v6"/><path d="M3 12V8a2 2 0 0 1 2-2h5v6"/><path d="M3 18h18"/><circle cx="16" cy="9" r="1.6"/></svg>',
  area: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 15v5h-5M4 15v5h5M20 9V4h-5"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-9.3A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.7C19 15.6 12 20 12 20Z"/></svg>'
};

const PHONE = '998976577766';
const CART_KEY = 'uybor_cart';
const SOLD_KEY = 'uybor_sold';

function readStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch (err) {
    return [];
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    return;
  }
}

function waLink(text) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

function openWhatsApp(text) {
  window.open(waLink(text), '_blank', 'noopener');
}

const properties = [
  {
    id: 1, name: 'Quyoshli Dacha', location: "Chirchiq yo'li, Toshkent",
    price: 2450000000, type: 'Dacha', rooms: 5, area: 320, level: '2 qavat',
    img: 'images/exterior-1.jpg',
    gallery: ['images/interior-1.jpg', 'images/interior-3.jpg', 'images/interior-7.jpg'],
    desc: "Katta hovuz, panoramik oynalar va ochiq terrasga ega zamonaviy dacha.", isNew: true
  },
  {
    id: 2, name: 'Osmon Penthaus', location: 'Yunusobod, Toshkent',
    price: 1890000000, type: 'Kvartira', rooms: 4, area: 210, level: '21-qavat',
    img: 'images/interior-5.jpg',
    gallery: ['images/interior-11.jpg', 'images/interior-6.jpg', 'images/interior-10.jpg'],
    desc: "Osmono'par binoning yuqori qavatidagi hashamatli penthaus, shahar manzarasi bilan.", isNew: true
  },
  {
    id: 3, name: 'Chortoq Dacha', location: 'Chortoq, Toshkent viloyati',
    price: 980000000, type: 'Dacha', rooms: 3, area: 140, level: '1 qavat',
    img: 'images/exterior-2.jpg',
    gallery: ['images/interior-2.jpg', 'images/exterior-12.jpg', 'images/interior-10.jpg'],
    desc: "Tog' etagidagi tinch dacha, katta bog' va dam olish hududi bilan.", isNew: false
  },
  {
    id: 4, name: "Bog' Ko'chasi Uyi", location: "Mirzo Ulug'bek, Toshkent",
    price: 1250000000, type: 'Hovli', rooms: 4, area: 180, level: '2 qavat',
    img: 'images/exterior-11.jpg',
    gallery: ['images/interior-6.jpg', 'images/interior-13.jpg', 'images/interior-3.jpg'],
    desc: "Oilaviy yashash uchun qulay hovli uyi, keng hovli va garaj bilan.", isNew: false
  },
  {
    id: 5, name: 'Shisha Uy', location: 'Bektemir, Toshkent',
    price: 3100000000, type: 'Dacha', rooms: 6, area: 420, level: '2 qavat',
    img: 'images/exterior-3.jpg',
    gallery: ['images/interior-8.jpg', 'images/interior-7.jpg', 'images/interior-1.jpg'],
    desc: "To'liq shishadan yasalgan fasad, yorug' interyer va Infinity hovuz.", isNew: true
  },
  {
    id: 6, name: 'Yashil Kvartira', location: 'Chilonzor, Toshkent',
    price: 640000000, type: 'Kvartira', rooms: 2, area: 68, level: '7-qavat',
    img: 'images/interior-6.jpg',
    gallery: ['images/interior-13.jpg', 'images/interior-5.jpg', 'images/interior-10.jpg'],
    desc: "Yashil hududda joylashgan shinam kvartira, zamonaviy ta'mirlangan.", isNew: false
  },
  {
    id: 7, name: 'Registon Shahar Uyi', location: 'Registon, Samarqand',
    price: 1050000000, type: 'Hovli', rooms: 4, area: 165, level: '2 qavat',
    img: 'images/exterior-10.jpg',
    gallery: ['images/interior-2.jpg', 'images/interior-11.jpg', 'images/exterior-12.jpg'],
    desc: "Registon yaqinidagi ikki qavatli shahar uyi, milliy va zamonaviy uslub uyg'unligi.", isNew: false
  },
  {
    id: 8, name: 'Nurafshon Lofti', location: 'Olmazor, Toshkent',
    price: 720000000, type: 'Kvartira', rooms: 3, area: 92, level: '9-qavat',
    img: 'images/interior-2.jpg',
    gallery: ['images/interior-5.jpg', 'images/interior-10.jpg', 'images/interior-7.jpg'],
    desc: "Loft uslubidagi keng kvartira, baland shiftlar va ochiq oshxona bilan.", isNew: false
  },
  {
    id: 9, name: 'Zomin Dacha', location: 'Zomin, Jizzax viloyati',
    price: 1420000000, type: 'Dacha', rooms: 5, area: 260, level: '2 qavat',
    img: 'images/exterior-5.jpg',
    gallery: ['images/interior-1.jpg', 'images/interior-3.jpg', 'images/interior-2.jpg'],
    desc: "Kurort hududidagi hashamatli dacha, hovuz va landshaft dizayni bilan.", isNew: false
  },
  {
    id: 10, name: "Tungi Bog' Dacha", location: 'Qibray, Toshkent viloyati',
    price: 2100000000, type: 'Dacha', rooms: 5, area: 300, level: '2 qavat',
    img: 'images/exterior-6.jpg',
    gallery: ['images/interior-11.jpg', 'images/interior-8.jpg', 'images/interior-13.jpg'],
    desc: "Kechqurun yoritilgan zamonaviy dacha, maxsus yoritish tizimi bilan.", isNew: true
  },
  {
    id: 11, name: 'Palma Hovlisi', location: 'Yangihayot, Toshkent',
    price: 1650000000, type: 'Hovli', rooms: 4, area: 220, level: '2 qavat',
    img: 'images/exterior-7.jpg',
    gallery: ['images/interior-9.jpg', 'images/interior-1.jpg', 'images/interior-6.jpg'],
    desc: "Palmalar orasidagi oq hovli uyi, yopiq hovli va hovuz bilan.", isNew: false
  },
  {
    id: 12, name: 'Shoh Penthaus', location: 'Shayxontohur, Toshkent',
    price: 2750000000, type: 'Kvartira', rooms: 5, area: 260, level: '24-qavat',
    img: 'images/interior-11.jpg',
    gallery: ['images/interior-10.jpg', 'images/interior-5.jpg', 'images/interior-7.jpg'],
    desc: "24-qavatdagi shoh penthaus, panoramik derazalar va premium ta'mir.", isNew: true
  },
  {
    id: 13, name: 'Sohil Shisha Dacha', location: 'Bektemir, Toshkent',
    price: 3400000000, type: 'Dacha', rooms: 6, area: 380, level: '2 qavat',
    img: 'images/exterior-4.jpg',
    gallery: ['images/interior-8.jpg', 'images/interior-12.jpg', 'images/interior-3.jpg'],
    desc: "Suv bo'yidagi shisha dacha, katta terras va basseyn bilan.", isNew: false
  },
  {
    id: 14, name: 'Kechki Bog\' Uyi', location: 'Qibray, Toshkent viloyati',
    price: 1550000000, type: 'Hovli', rooms: 4, area: 200, level: '1 qavat',
    img: 'images/interior-4.jpg',
    gallery: ['images/interior-9.jpg', 'images/interior-13.jpg', 'images/interior-2.jpg'],
    desc: "Kechki bog' manzarali uy, olovli o'choq va dam olish zonasi bilan.", isNew: false
  },
  {
    id: 15, name: 'Yam-yashil Burchak', location: 'Yakkasaroy, Toshkent',
    price: 780000000, type: 'Kvartira', rooms: 3, area: 88, level: '5-qavat',
    img: 'images/interior-13.jpg',
    gallery: ['images/interior-6.jpg', 'images/interior-5.jpg', 'images/interior-9.jpg'],
    desc: "Yorug' va shinam kvartira, ko'p o'simliklar va tabiiy materiallar bilan.", isNew: false
  }
];

let cart = readStore(CART_KEY).filter((id) => properties.some((p) => p.id === id));
let sold = new Set(readStore(SOLD_KEY).filter((id) => cart.includes(id)));

const state = {
  type: 'all',
  query: '',
  sort: 'default'
};

let currentProperty = null;

const grid = document.getElementById('grid');
const empty = document.getElementById('empty');
const chips = document.getElementById('chips');
const sortSelect = document.getElementById('sortSelect');
const searchForm = document.getElementById('searchForm');
const heroType = document.getElementById('heroType');
const heroQuery = document.getElementById('heroQuery');
const toastEl = document.getElementById('toast');
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const header = document.getElementById('header');
const modal = document.getElementById('modal');
const modalMain = document.getElementById('modalMain');
const modalThumbs = document.getElementById('modalThumbs');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalLoc = document.getElementById('modalLoc');
const modalSpecs = document.getElementById('modalSpecs');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalBuy = document.getElementById('modalBuy');
const cartEl = document.getElementById('cart');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartHeadCount = document.getElementById('cartHeadCount');
const cartBadge = document.getElementById('cartBtn');
const wishBtn = document.getElementById('wishBtn');

function money(value) {
  if (value <= 0) return "0 so'm";
  if (value >= 1e9) {
    const b = value / 1e9;
    let s = b.toFixed(2);
    if (s.endsWith('.00')) s = s.slice(0, -3);
    else s = s.replace('.', ',');
    return s + " mlrd so'm";
  }
  return Math.round(value / 1e6) + " mln so'm";
}

function inCart(id) { return cart.includes(id); }
function isSold(id) { return sold.has(id); }

function saveCart() {
  writeStore(CART_KEY, cart);
  writeStore(SOLD_KEY, [...sold]);
}

function specHtml(p) {
  return `<span class="spec">${icons.bed}<span>${p.rooms} xona</span></span>
    <span class="spec">${icons.area}<span>${p.area} m²</span></span>
    <span class="spec">${icons.layers}<span>${p.level}</span></span>`;
}

function cardHTML(p) {
  const active = inCart(p.id);
  const soldOut = isSold(p.id);
  const buyBtn = soldOut
    ? '<button class="btn btn--sold" type="button" disabled>Sotib olindi</button>'
    : `<button class="btn btn--buy" type="button" data-buy="${p.id}">Sotib olish</button>`;
  return `<article class="card reveal${soldOut ? ' is-sold' : ''}" data-id="${p.id}">
    <div class="card__art">
      <img src="${p.img}" alt="${p.name} — ${p.location}" loading="lazy" />
      ${soldOut ? '<div class="sold-overlay"><span>Sotib olindi</span></div>' : (p.isNew ? '<span class="badge">Yangi</span>' : '')}
      <span class="tag">${p.type}</span>
      <button class="fav${active ? ' is-active' : ''}" type="button" aria-pressed="${active}" aria-label="Savatga qo'shish">${icons.heart}</button>
    </div>
    <div class="card__body">
      <h3>${p.name}</h3>
      <p class="loc">${icons.pin}<span>${p.location}</span></p>
      <div class="specs">${specHtml(p)}</div>
      <div class="card__foot">
        <span class="price">${money(p.price)}</span>
        <div class="card__actions">
          ${buyBtn}
          <button class="btn btn--ghost" type="button" data-detail="${p.id}">Batafsil</button>
        </div>
      </div>
    </div>
  </article>`;
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
}

function render(instant) {
  const q = state.query.trim().toLowerCase();
  let list = properties.filter((p) => {
    const typeOk = state.type === 'all' || p.type === state.type;
    const haystack = `${p.name} ${p.location} ${p.type}`.toLowerCase();
    const queryOk = !q || haystack.includes(q);
    return typeOk && queryOk;
  });

  if (state.sort === 'asc') list = list.sort((a, b) => a.price - b.price);
  if (state.sort === 'desc') list = list.sort((a, b) => b.price - a.price);

  grid.innerHTML = list.map(cardHTML).join('');
  empty.hidden = list.length > 0;
  if (instant) {
    grid.querySelectorAll('.card').forEach((card) => card.classList.add('in'));
  } else {
    observeReveals();
  }
}

function setType(type) {
  state.type = type;
  chips.querySelectorAll('.chip').forEach((chip) => {
    const on = chip.dataset.filter === type;
    chip.classList.toggle('is-active', on);
    chip.setAttribute('aria-selected', String(on));
  });
  document.querySelectorAll('.nav a[data-cat]').forEach((link) => {
    link.classList.toggle('is-active', link.dataset.cat === type);
  });
  render();
}

function addToCart(id) {
  if (!inCart(id)) {
    cart.push(id);
    saveCart();
  }
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter((x) => x !== id);
  sold.delete(id);
  saveCart();
  updateCartUI();
  render(true);
}

function clearCart() {
  cart = [];
  sold.clear();
  saveCart();
  updateCartUI();
  render(true);
}

function toggleCartItem(id) {
  if (inCart(id)) {
    removeFromCart(id);
    showToast("Savatdan olib tashlandi.");
  } else {
    addToCart(id);
    showToast("Savatga qo'shildi.");
  }
}

function buyNow(id) {
  const p = properties.find((item) => item.id === id);
  if (!p) return;
  addToCart(id);
  sold.add(id);
  saveCart();
  updateCartUI();
  render(true);
  showToast(`Sotib olindi! «${p.name}» savatchaga tushdi.`, 'success');
}

function updateCartUI() {
  const count = cart.length;
  cartCount.textContent = count;
  cartHeadCount.textContent = count;
  wishBtn.classList.toggle('is-active', count > 0);
  cartBadge.classList.toggle('has-items', count > 0);
  renderCart();
}

function cartItemHTML(p) {
  const soldOut = isSold(p.id);
  return `<div class="cart-item${soldOut ? ' is-sold' : ''}">
    <img class="cart-item__img" src="${p.img}" alt="${p.name}" loading="lazy" />
    <div class="cart-item__info">
      <strong>${p.name}</strong>
      <span class="cart-item__loc">${p.location}</span>
      <span class="cart-item__price">${money(p.price)}</span>
      ${soldOut ? '<span class="cart-item__tag">Sotib olindi</span>' : '<span class="cart-item__tag cart-item__tag--cart">Savatda</span>'}
    </div>
    <button class="cart-item__remove" type="button" data-cart-remove="${p.id}" aria-label="O'chirish">&times;</button>
  </div>`;
}

function renderCart() {
  const items = cart.map((id) => properties.find((p) => p.id === id)).filter(Boolean);
  cartItems.innerHTML = items.map(cartItemHTML).join('');
  cartItems.hidden = items.length === 0;
  cartEmpty.hidden = items.length > 0;
  const total = items.reduce((sum, p) => sum + p.price, 0);
  cartTotal.textContent = money(total);
  document.getElementById('cartCheckout').disabled = items.length === 0;
  document.getElementById('cartClear').disabled = items.length === 0;
}

function openCart() {
  renderCart();
  cartEl.classList.add('is-open');
  cartEl.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
}

function closeCart() {
  cartEl.classList.remove('is-open');
  cartEl.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
}

function openModal(id) {
  const p = properties.find((item) => item.id === id);
  if (!p) return;
  currentProperty = p;

  modalMain.src = p.img;
  modalMain.alt = p.name;
  modalTitle.textContent = p.name;
  modalType.textContent = p.type;
  modalLoc.innerHTML = `${icons.pin}<span>${p.location}</span>`;
  modalSpecs.innerHTML = specHtml(p);
  modalDesc.textContent = p.desc;
  modalPrice.textContent = money(p.price);

  const soldOut = isSold(p.id);
  modalBuy.disabled = soldOut;
  modalBuy.textContent = soldOut ? 'Sotib olindi' : 'Sotib olish';
  modalBuy.classList.toggle('btn--sold', soldOut);

  const images = [p.img, ...p.gallery];
  modalThumbs.innerHTML = images.map((src, i) => `
    <button class="modal__thumb${i === 0 ? ' is-active' : ''}" type="button" data-src="${src}" aria-label="Rasm ${i + 1}">
      <img src="${src}" alt="" loading="lazy" />
    </button>`).join('');

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  currentProperty = null;
}

chips.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (chip) setType(chip.dataset.filter);
});

nav.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-cat]');
  if (link) {
    e.preventDefault();
    setType(link.dataset.cat);
    document.getElementById('uylar').scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav.classList.remove('open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  render();
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  state.query = heroQuery.value;
  setType(heroType.value);
  document.getElementById('uylar').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

grid.addEventListener('click', (e) => {
  const favBtn = e.target.closest('.fav');
  if (favBtn) {
    toggleCartItem(Number(favBtn.closest('.card').dataset.id));
    return;
  }

  const buyBtn = e.target.closest('[data-buy]');
  if (buyBtn) {
    buyNow(Number(buyBtn.dataset.buy));
    return;
  }

  const detailBtn = e.target.closest('[data-detail]');
  if (detailBtn) openModal(Number(detailBtn.dataset.detail));
});

modalBuy.addEventListener('click', () => {
  if (!currentProperty) return;
  buyNow(currentProperty.id);
  closeModal();
});

modalThumbs.addEventListener('click', (e) => {
  const thumb = e.target.closest('.modal__thumb');
  if (!thumb) return;
  modalThumbs.querySelectorAll('.modal__thumb').forEach((t) => t.classList.remove('is-active'));
  thumb.classList.add('is-active');
  modalMain.src = thumb.dataset.src;
});

modal.addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) closeModal();
});

document.getElementById('modalCta').addEventListener('click', () => {
  const p = currentProperty;
  const messageField = document.querySelector('#contactForm [name="message"]');
  if (p) messageField.value = `«${p.name}» haqida ma'lumot olmoqchiman.`;
  const text = p
    ? `Salom! «${p.name}» (${p.type}, ${p.location}) haqida ma'lumot olmoqchiman. Narxi: ${money(p.price)}.`
    : "Salom! Uy haqida ma'lumot olmoqchiman.";
  closeModal();
  openWhatsApp(text);
  showToast('WhatsApp ochildi — xabar yuborishingiz mumkin.');
  document.getElementById('aloqa').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('cartBtn').addEventListener('click', openCart);
wishBtn.addEventListener('click', openCart);

cartEl.addEventListener('click', (e) => {
  if (e.target.closest('[data-cart-close]')) {
    closeCart();
    return;
  }
  const removeBtn = e.target.closest('[data-cart-remove]');
  if (removeBtn) {
    removeFromCart(Number(removeBtn.dataset.cartRemove));
    showToast("Savatdan olib tashlandi.");
  }
});

document.getElementById('cartClear').addEventListener('click', () => {
  if (!cart.length) return;
  clearCart();
  showToast("Savatcha tozalandi.");
});

document.getElementById('cartCheckout').addEventListener('click', () => {
  if (!cart.length) return;
  cart.forEach((id) => sold.add(id));
  saveCart();
  updateCartUI();
  render(true);
  showToast("Sotib olindi! Barcha tanlangan uylar savatchada.", 'success');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (cartEl.classList.contains('is-open')) closeCart();
    if (modal.classList.contains('is-open')) closeModal();
  }
});

let toastTimer;
function showToast(message, type) {
  toastEl.textContent = message;
  toastEl.classList.toggle('toast--success', type === 'success');
  toastEl.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 3200);
}

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}, { passive: true });

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const message = form.elements.message.value.trim();
  if (!name || !phone) {
    showToast("Iltimos, ism va telefon raqamini kiriting.");
    return;
  }
  const text = `Salom! Men ${name}.\nTelefon: ${phone}${message ? `\nXabar: ${message}` : ''}`;
  openWhatsApp(text);
  showToast(`Rahmat, ${name}! Xabar WhatsApp orqali yuborilmoqda.`);
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();

updateCartUI();
render();
observeReveals();
