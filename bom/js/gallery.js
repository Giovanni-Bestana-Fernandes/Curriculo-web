import { portfolioData } from './data.js';

let currentProject = null;
let currentIndex = 0;
let zoomLevel = 1;

const modal = document.getElementById('lightbox-modal');
const slider = document.getElementById('lightbox-slider');
const counter = document.getElementById('lightbox-counter');

export function initGallery() {

    document.getElementById('lightbox-close').onclick = closeLightbox;
    document.getElementById('lightbox-prev').onclick = prev;
    document.getElementById('lightbox-next').onclick = next;

    document.getElementById('zoom-in').onclick = zoomIn;
    document.getElementById('zoom-out').onclick = zoomOut;
    document.getElementById('zoom-reset').onclick = resetZoom;

    document.addEventListener('keydown', handleKey);
}

export function openProjectGallery(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project || !project.gallery) return;

    currentProject = project.gallery;
    currentIndex = 0;

    slider.innerHTML = currentProject.images.map((img, i) => `
        <div class="lightbox-slide">
            <img src="${img.src}" data-index="${i}">
        </div>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    update();
}

function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function next() {
    if (currentIndex < currentProject.images.length - 1) {
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
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    counter.textContent = `${currentIndex + 1}/${currentProject.images.length}`;
    resetZoom();
}

function zoomIn() {
    zoomLevel += 0.2;
    applyZoom();
}

function zoomOut() {
    zoomLevel -= 0.2;
    applyZoom();
}

function resetZoom() {
    zoomLevel = 1;
    applyZoom();
}

function applyZoom() {
    document.querySelectorAll('.lightbox-slide img').forEach((img, i) => {
        img.style.transform = i === currentIndex ? `scale(${zoomLevel})` : 'scale(1)';
    });
}

function handleKey(e) {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
}