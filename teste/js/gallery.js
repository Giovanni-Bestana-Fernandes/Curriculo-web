import { portfolioData } from './data.js';

// ═══════════════════════════════════════════
//  GALLERY / LIGHTBOX STATE
// ═══════════════════════════════════════════
let currentProject = null;
let currentIndex   = 0;
let zoomLevel      = 1;

const getModal  = () => document.getElementById('lightbox-modal');
const getSlider = () => document.getElementById('lightbox-slider');
const getCounter= () => document.getElementById('lightbox-counter');

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
export function initGallery() {
    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev')?.addEventListener('click', prev);
    document.getElementById('lightbox-next')?.addEventListener('click', next);

    document.getElementById('zoom-in')?.addEventListener('click',    zoomIn);
    document.getElementById('zoom-out')?.addEventListener('click',   zoomOut);
    document.getElementById('zoom-reset')?.addEventListener('click', resetZoom);

    // Fecha ao clicar fora
    getModal()?.addEventListener('click', (e) => {
        if (e.target === getModal()) closeLightbox();
    });

    document.addEventListener('keydown', handleKey);
}

// ═══════════════════════════════════════════
//  OPEN
// ═══════════════════════════════════════════
export function openProjectGallery(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project?.gallery) return;

    currentProject = project.gallery;
    currentIndex   = 0;
    zoomLevel      = 1;

    const slider = getSlider();
    if (!slider) return;

    slider.innerHTML = currentProject.images.map((img, i) => `
        <div class="lightbox-slide">
            <img src="${img.src}" alt="${img.alt || ''}" data-index="${i}" style="transition: transform 0.3s ease;">
        </div>
    `).join('');

    getModal()?.classList.add('active');
    document.body.style.overflow = 'hidden';

    update();
}

// ═══════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════
function next() {
    if (currentProject && currentIndex < currentProject.images.length - 1) {
        currentIndex++;
        update();
    }
}

function prev() {
    if (currentIndex > 0) {
        currentIndex--;
        update();
    }
}

function update() {
    const slider  = getSlider();
    const counter = getCounter();
    if (slider)  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (counter) counter.textContent = `${currentIndex + 1}/${currentProject.images.length}`;
    resetZoom();
}

function closeLightbox() {
    getModal()?.classList.remove('active');
    document.body.style.overflow = '';
}

// ═══════════════════════════════════════════
//  ZOOM
// ═══════════════════════════════════════════
function zoomIn()    { zoomLevel = Math.min(3, zoomLevel + 0.25); applyZoom(); }
function zoomOut()   { zoomLevel = Math.max(0.5, zoomLevel - 0.25); applyZoom(); }
function resetZoom() { zoomLevel = 1; applyZoom(); }

function applyZoom() {
    document.querySelectorAll('.lightbox-slide img').forEach((img, i) => {
        img.style.transform = i === currentIndex ? `scale(${zoomLevel})` : 'scale(1)';
    });
}

// ═══════════════════════════════════════════
//  KEYBOARD
// ═══════════════════════════════════════════
function handleKey(e) {
    if (!getModal()?.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  next();
    if (e.key === 'ArrowLeft')   prev();
    if (e.key === '+')           zoomIn();
    if (e.key === '-')           zoomOut();
}