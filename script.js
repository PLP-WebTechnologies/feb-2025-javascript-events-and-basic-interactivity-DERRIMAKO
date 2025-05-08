// ========== Full Image Viewer ==========
document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
    });
});

// Create and show lightbox
function openLightbox(src, alt) {
    // Check if lightbox already exists
    let existingLightbox = document.getElementById('lightbox');
    if (existingLightbox) existingLightbox.remove();

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100vw';
    lightbox.style.height = '100vh';
    lightbox.style.background = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '1000';

    const fullImage = document.createElement('img');
    fullImage.src = src;
    fullImage.alt = alt;
    fullImage.style.maxWidth = '90vw';
    fullImage.style.maxHeight = '90vh';
    fullImage.style.border = '4px solid #00f9ff';
    fullImage.style.borderRadius = '12px';
    fullImage.style.boxShadow = '0 0 20px #00f9ff';

    lightbox.appendChild(fullImage);
    document.body.appendChild(lightbox);

    // Close on click or ESC
    lightbox.addEventListener('click', () => lightbox.remove());
    document.addEventListener('keydown', handleEscClose);
}

// Handle ESC key to close lightbox
function handleEscClose(e) {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.remove();
            document.removeEventListener('keydown', handleEscClose);
        }
    }
}

// ========== Double-click Easter Egg ==========
document.addEventListener('dblclick', () => {
    alert('🌟 Secret adventure unlocked! 🚀');
});

// ========== Auto Year Update in Footer ==========
const footer = document.querySelector('footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Adventure Vision Gallery. All rights reserved.`;
}


// ========== Form Validation ==========
const form = document.getElementById('adventureForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Validate on input (real-time feedback)
[nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', () => validateForm());
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent actual submission
    if (validateForm()) {
        alert("🚀 Welcome aboard, explorer!");
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    // Name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email
    if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password
    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters Adventurer.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    return isValid;
}
