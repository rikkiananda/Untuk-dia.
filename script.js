// ========================================
// ROMANTIC WEBSITE - JAVASCRIPT
// ========================================

// === CUSTOM CURSOR ===
// Pink circle cursor follows mouse movement
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

// Smooth cursor animation
function updateCursor() {
    const cursor = document.querySelector('body::before');
    // Update CSS custom properties for cursor position
    document.documentElement.style.setProperty('--cursor-x', cursorX + 'px');
    document.documentElement.style.setProperty('--cursor-y', cursorY + 'px');
    requestAnimationFrame(updateCursor);
}
updateCursor();

// === DUST PARTICLE SYSTEM ===
const canvas = document.getElementById('dustCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // 1-3px
        this.speedX = (Math.random() - 0.5) * 0.5; // Slow movement
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.15 + 0.05;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = `rgba(255, 100, 180, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles (40-60 particles)
const particleCount = 50;
const particles = [];
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animation loop
let scrollY = 0;
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply subtle parallax based on scroll
    const parallaxOffset = scrollY * 0.05;

    particles.forEach((particle, index) => {
        particle.update();
        ctx.save();
        ctx.translate(0, -parallaxOffset * (index % 3)); // Different layers
        particle.draw();
        ctx.restore();
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();

// Update scroll position for parallax
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
});

// === LANDING PAGE TRANSITION ===
const enterBtn = document.getElementById('enterBtn');
const landingSection = document.getElementById('landing');
const mainContent = document.getElementById('mainContent');

enterBtn.addEventListener('click', () => {
    landingSection.classList.add('hidden');
    setTimeout(() => {
        mainContent.classList.add('visible');
        // Start typewriter effect after transition
        setTimeout(startTypewriter, 500);
    }, 1000);
});

// === SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.memory-card').forEach(el => {
    observer.observe(el);
});

// === TYPEWRITER EFFECT ===
const typewriterText = document.getElementById('typewriterText');
const fullText = `Woi pacar mbot, aku buatin web ini karna gabut ajah bukan berarti aku mw kaya gini demi kamu. Btw sebenarnya ada banyak yang mw kasi tau ke kamu tp mungkinn ga akan habisnya jadi satu web, aku mah jago bisa semuanya g kaya km, yaudah deh aku mau kasih kata kata romantis tp gtw ini gimana soalnya aku ga bisa rangkai kata kata untuk pacar ku sendiri jujur, udah deh sudah saatnya kembali seperti Rikki pada asalnya setelan default dengan kata kata yang baku dan hangat.`;

let charIndex = 0;
let isTyping = false;

function startTypewriter() {
    if (isTyping) return;
    isTyping = true;
    typewriterText.textContent = '';
    typeWriter();
}

function typeWriter() {
    if (charIndex < fullText.length) {
        typewriterText.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30); // Typing speed (30ms per character)
    } else {
        // Remove cursor border when done
        typewriterText.style.borderRight = 'none';
        // Show second paragraph
        setTimeout(() => {
            document.querySelector('.letter-para-2').classList.add('visible');
        }, 500);
    }
}

// === MUSIC PLAYER ===
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressSlider = document.getElementById('progressSlider');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const currentCover = document.getElementById('currentCover');
const currentTitle = document.getElementById('currentTitle');
const currentArtist = document.getElementById('currentArtist');
const equalizer = document.getElementById('equalizer');
const songItems = document.querySelectorAll('.song-item');

let currentSongIndex = -1;

// Song item click
songItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        loadSong(index);
        audioPlayer.play();
    });
});

// Load song
function loadSong(index) {
    const songItem = songItems[index];
    const src = songItem.getAttribute('data-src');
    const cover = songItem.querySelector('.song-cover img').src;
    const title = songItem.querySelector('.song-title').textContent;
    const artist = songItem.querySelector('.song-artist').textContent;

    audioPlayer.src = src;
    currentCover.src = cover;
    currentTitle.textContent = title;
    currentArtist.textContent = artist;
    currentSongIndex = index;

    // Update active state
    songItems.forEach(s => s.classList.remove('active'));
    songItem.classList.add('active');
}

// Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (currentSongIndex === -1) {
        loadSong(0);
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

// Update play/pause button and equalizer
audioPlayer.addEventListener('play', () => {
    playPauseBtn.textContent = '⏸';
    equalizer.classList.add('active');
    // Make particles slightly more active (optional)
    particles.forEach(p => {
        p.speedX *= 1.2;
        p.speedY *= 1.2;
    });
});

audioPlayer.addEventListener('pause', () => {
    playPauseBtn.textContent = '▶';
    equalizer.classList.remove('active');
    // Return particles to normal speed
    particles.forEach(p => {
        p.speedX /= 1.2;
        p.speedY /= 1.2;
    });
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressFill.style.width = progress + '%';
        progressSlider.value = progress;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
});

// Update duration
audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

// Seek functionality
progressSlider.addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

// Format time (seconds to mm:ss)
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Auto-play next song
audioPlayer.addEventListener('ended', () => {
    if (currentSongIndex < songItems.length - 1) {
        loadSong(currentSongIndex + 1);
        audioPlayer.play();
    } else {
        playPauseBtn.textContent = '▶';
        equalizer.classList.remove('active');
    }
});

// === HIDDEN MESSAGE ===
const revealBtn = document.getElementById('revealBtn');
const hiddenMessage = document.getElementById('hiddenMessage');
let isRevealed = false;

revealBtn.addEventListener('click', () => {
    if (!isRevealed) {
        hiddenMessage.classList.add('revealed');
        revealBtn.textContent = '✓';
        revealBtn.style.background = 'var(--pink-accent)';
        revealBtn.style.color = 'var(--bg-dark)';
        isRevealed = true;

        // Make particles glow more when revealed
        particles.forEach(p => {
            p.opacity = Math.min(p.opacity * 1.5, 0.3);
        });
    } else {
        hiddenMessage.classList.remove('revealed');
        revealBtn.textContent = '?';
        revealBtn.style.background = 'rgba(255, 46, 136, 0.1)';
        revealBtn.style.color = 'var(--pink-accent)';
        isRevealed = false;

        // Return particles to normal
        particles.forEach(p => {
            p.opacity = Math.random() * 0.15 + 0.05;
        });
    }
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === PERFORMANCE OPTIMIZATION ===
// Reduce particle count on mobile
if (window.innerWidth < 768) {
    const removeCount = Math.floor(particles.length / 2);
    particles.splice(0, removeCount);
}

// Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause audio if playing
        if (!audioPlayer.paused) {
            audioPlayer.pause();
        }
    }
});

console.log('🌸 Website loaded successfully! Made with love for Shafa ♡');
