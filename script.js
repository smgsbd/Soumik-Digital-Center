// সেবার তালিকা সম্পাদনা: শুধু নিচের SERVICES অংশে লেখা বদলান।
// নতুন সেবার জন্য items-এর একটি লাইন কপি করুন; বাদ দিতে লাইনটি মুছুন।
// icon: smartphone, wallet, file, landmark, camera, music, shopping
// tone: blue, pink, teal, violet, orange, cyan, green, gold
const SERVICES = {
  "label": "আমাদের সেবাসমূহ",
  "heading": "এক জায়গায়, আপনার সব সমাধান",
  "description": "দৈনন্দিন ডিজিটাল প্রয়োজনে আমরা আছি আপনার পাশে।",
  "subtitle": "আপনার প্রয়োজনের সেবাটি বেছে নিন।",
  "contactLabel": "যোগাযোগ করুন",
  "items": [
    {
      "icon": "smartphone",
      "title": "মোবাইল রিচার্জ",
      "text": "সকল অপারেটরের মোবাইল রিচার্জ সেবা।",
      "tone": "blue",
      "href": "#contact"
    },
    {
      "icon": "wallet",
      "title": "মোবাইল ব্যাংকিং",
      "text": "বিকাশ, রকেট, নগদ ও উপায়ের মাধ্যমে লেনদেন।",
      "tone": "pink",
      "href": "#contact"
    },
    {
      "icon": "file",
      "title": "অনলাইন আবেদন",
      "text": "সকল ধরনের অনলাইন আবেদন ও ফরম পূরণ।",
      "tone": "teal",
      "href": "#contact"
    },
    {
      "icon": "landmark",
      "title": "ইউনিয়ন পরিষদের কাজ",
      "text": "ইউনিয়ন পরিষদের যাবতীয় ডিজিটাল কাজে সহায়তা।",
      "tone": "violet",
      "href": "#contact"
    },
    {
      "icon": "camera",
      "title": "ছবি তোলা",
      "text": "বিভিন্ন আবেদন ও প্রয়োজনের জন্য ছবি তোলা।",
      "tone": "orange",
      "href": "#contact"
    },
    {
      "icon": "music",
      "title": "গান ও মুভি লোড",
      "text": "মেমোরি কার্ডে পছন্দের গান ও মুভি লোড।",
      "tone": "cyan",
      "href": "#contact"
    },
    {
      "icon": "smartphone",
      "title": "মোবাইল ফোন বিক্রি",
      "text": "আপনার প্রয়োজনের মোবাইল ফোন কিনুন।",
      "tone": "green",
      "href": "#contact"
    },
    {
      "icon": "shopping",
      "title": "অনলাইন পণ্য অর্ডার",
      "text": "অনলাইন থেকে পণ্য অর্ডার করে এনে দেওয়া।",
      "tone": "gold",
      "href": "#contact"
    }
  ]
};

const SERVICE_ICONS = {
  "smartphone": "<svg aria-hidden=\"true\" class=\"lucide lucide-smartphone\" data-tsd-source=\"/src/components/ServicesSection.tsx:21:70\" fill=\"none\" height=\"25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewbox=\"0 0 24 24\" width=\"25\" xmlns=\"http://www.w3.org/2000/svg\"><rect height=\"20\" rx=\"2\" ry=\"2\" width=\"14\" x=\"5\" y=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>",
  "wallet": "<svg aria-hidden=\"true\" class=\"lucide lucide-wallet\" data-tsd-source=\"/src/components/ServicesSection.tsx:21:70\" fill=\"none\" height=\"25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewbox=\"0 0 24 24\" width=\"25\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"></path><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"></path></svg>",
  "file": "<svg aria-hidden=\"true\" class=\"lucide lucide-file-text\" data-tsd-source=\"/src/components/ServicesSection.tsx:21:70\" fill=\"none\" height=\"25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewbox=\"0 0 24 24\" width=\"25\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M10 9H8\"></path><path d=\"M16 13H8\"></path><path d=\"M16 17H8\"></path></svg>",
  "landmark": "<svg aria-hidden=\"true\" class=\"lucide lucide-landmark\" data-tsd-source=\"/src/components/ServicesSection.tsx:21:70\" fill=\"none\" height=\"25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewbox=\"0 0 24 24\" width=\"25\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 18v-7\"></path><path d=\"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z\"></path><path d=\"M14 18v-7\"></path><path d=\"M18 18v-7\"></path><path d=\"M3 22h18\"></path><path d=\"M6 18v-7\"></path></svg>",
  "camera": "<svg aria-hidden=\"true\" class=\"lucide lucide-camera\" data-tsd-source=\"/src/components/ServicesSection.tsx:21:70\" fill=\"none\" height=\"25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewbox=\"0 0 24 24\" width=\"25\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\"></path><circle cx=\"12\" cy=\"13\" r=\"3\"></circle></svg>",
  "music": "<svg aria-hidden=\"true\" class=\"lucide lucide-music2 lucide-music-2\" data-tsd-source=\"/src/components/ServicesSection.tsx:21:70\" fill=\"none\" height=\"25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewbox=\"0 0 24 24\" width=\"25\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"18\" r=\"4\"></circle><path d=\"M12 18V2l7 4\"></path></svg>",
  "shopping": "<svg aria-hidden=\"true\" class=\"lucide lucide-shopping-bag\" data-tsd-source=\"/src/components/ServicesSection.tsx:21:70\" fill=\"none\" height=\"25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewbox=\"0 0 24 24\" width=\"25\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 10a4 4 0 0 1-8 0\"></path><path d=\"M3.103 6.034h17.794\"></path><path d=\"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z\"></path></svg>"
};

// Services: text is inserted safely, and all cards share one editable template.
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
document.querySelector('[data-services-label]').textContent = SERVICES.label;
document.querySelector('[data-services-heading]').textContent = SERVICES.heading;
const intro = document.querySelector('[data-services-description]');
intro.replaceChildren(document.createTextNode(SERVICES.description), document.createElement('br'), document.createTextNode(SERVICES.subtitle));
const grid = document.querySelector('.service-grid');
const arrow = grid.querySelector('.card-link svg').cloneNode(true);
grid.replaceChildren(...SERVICES.items.map((item, index) => {
  const card = element('a', `service-card tone-${item.tone}`);
  card.href = /^(#|https?:\/\/|tel:|mailto:)/.test(item.href) ? item.href : '#contact';
  const top = element('div', 'card-top');
  const icon = element('span', 'service-icon');
  icon.innerHTML = SERVICE_ICONS[item.icon] || SERVICE_ICONS.file;
  top.append(icon, element('span', 'service-number latin', String(index + 1).padStart(2, '0')));
  const link = element('span', 'card-link', SERVICES.contactLabel);
  link.append(arrow.cloneNode(true));
  card.append(top, element('h3', '', item.title), element('p', '', item.text), link);
  return card;
}));

// Mobile menu.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-nav');
function setMenu(open) {
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন');
}
menuButton.addEventListener('click', () => setMenu(menu.hidden));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

// Logo slider: next/previous, dots, autoplay, pause, keyboard and touch swipe.
const slider = document.querySelector('.banking-slider');
const track = slider.querySelector('.banking-track');
const slides = [...track.children];
const dots = [...slider.querySelectorAll('.slider-dot')];
const pauseButton = slider.querySelector('button[aria-label="স্লাইডার থামান"]');
const pauseIcon = pauseButton.innerHTML;
const playIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>';
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  clone.removeAttribute('aria-label');
  track.append(clone);
});
let active = 0, paused = false, hovering = false, focused = false, busy = false;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function paint(animate = true) {
  track.style.transition = animate && !reducedMotion.matches ? 'transform .4s ease' : 'none';
  track.style.transform = `translateX(-${active * slides[0].getBoundingClientRect().width}px)`;
  dots.forEach((dot, i) => {
    const selected = i === active % slides.length;
    dot.classList.toggle('selected', selected);
    dot.setAttribute('aria-pressed', String(selected));
  });
}
function move(direction) {
  if (busy) return;
  busy = true;
  if (direction < 0 && active === 0) {
    active = slides.length;
    paint(false);
    track.getBoundingClientRect();
  }
  active += direction;
  paint();
  window.setTimeout(() => {
    if (active >= slides.length) { active = 0; paint(false); }
    busy = false;
  }, reducedMotion.matches ? 0 : 420);
}
slider.querySelector('button[aria-label="আগের লোগো"]').addEventListener('click', () => move(-1));
slider.querySelector('button[aria-label="পরের লোগো"]').addEventListener('click', () => move(1));
dots.forEach((dot, i) => dot.addEventListener('click', () => { if (!busy) { active = i; paint(); } }));
pauseButton.addEventListener('click', () => {
  paused = !paused;
  pauseButton.setAttribute('aria-label', paused ? 'স্লাইডার চালু করুন' : 'স্লাইডার থামান');
  pauseButton.title = pauseButton.getAttribute('aria-label');
  pauseButton.innerHTML = paused ? playIcon : pauseIcon;
});
slider.addEventListener('mouseenter', () => { hovering = true; });
slider.addEventListener('mouseleave', () => { hovering = false; });
slider.addEventListener('focusin', () => { focused = true; });
slider.addEventListener('focusout', event => { focused = slider.contains(event.relatedTarget); });
slider.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
});
let touchX = 0;
slider.addEventListener('touchstart', event => { touchX = event.changedTouches[0].clientX; }, { passive: true });
slider.addEventListener('touchend', event => {
  const distance = touchX - event.changedTouches[0].clientX;
  if (Math.abs(distance) > 35) move(distance > 0 ? 1 : -1);
}, { passive: true });
window.addEventListener('resize', () => paint(false));
window.setInterval(() => { if (!paused && !hovering && !focused && !document.hidden && !reducedMotion.matches) move(1); }, 3500);
paint(false);
