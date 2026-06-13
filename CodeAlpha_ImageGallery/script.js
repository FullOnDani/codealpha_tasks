const images = [
{ src: "images/image1.png", caption: "Beautiful Nets" },
{ src: "images/image2.png", caption: "PdfnBooks" },
{ src: "images/image3.png", caption: "Boy On Laptop" },
{ src: "images/image4.png", caption: "Cinematic Floor Crack" },
{ src: "images/image5.png", caption: "Rubies Unleashed" },
{ src: "images/image6.png", caption: "Atmos Weathr" },
{ src: "images/image7.jpg", caption: "Art" },
{ src: "images/image8.png", caption: "Garden Logo" },
];

const gallery   = document.getElementById('gallery');
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
const lbCounter = document.getElementById('lb-counter');
const lbClose   = document.getElementById('lb-close');
const lbPrev    = document.getElementById('lb-prev');
const lbNext    = document.getElementById('lb-next');

let current = 0;

images.forEach((img, i) => {
const item = document.createElement('div');
item.className = 'gallery-item';
item.innerHTML = `
    <img src="${img.src}" alt="${img.caption}" loading="lazy" />
    <div class="overlay">
    <div class="zoom-icon">⤢</div>
    <span class="caption">${img.caption}</span>
    </div>
`;
item.addEventListener('click', () => openLightbox(i));
gallery.appendChild(item);
});

function openLightbox(index) {
current = index;
updateLightbox();
lightbox.classList.add('active');
document.body.style.overflow = 'hidden';
}

function closeLightbox() {
lightbox.classList.remove('active');
document.body.style.overflow = '';
}

function updateLightbox() {
const img = images[current];
lbImg.src = img.src;
lbImg.alt = img.caption;
lbCaption.textContent = img.caption;
lbCounter.textContent = `${current + 1} / ${images.length}`;

const wrap = lbImg.parentElement;
wrap.style.animation = 'none';
wrap.offsetHeight;
wrap.style.animation = '';
}

function prev() {
current = (current - 1 + images.length) % images.length;
updateLightbox();
}

function next() {
current = (current + 1) % images.length;
updateLightbox();
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', prev);
lbNext.addEventListener('click', next);

lightbox.addEventListener('click', e => {
if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
if (!lightbox.classList.contains('active')) return;
if (e.key === 'ArrowLeft')  prev();
if (e.key === 'ArrowRight') next();
if (e.key === 'Escape')     closeLightbox();
});