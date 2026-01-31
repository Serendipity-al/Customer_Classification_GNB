// Form loading state
document.getElementById('predictionForm').addEventListener('submit', function() {
    this.classList.add('loading');
});

// Prevent scroll on number inputs
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('wheel', function(e) {
        e.preventDefault();
    });
    
    // Add focus animation
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Animate confidence bar on load
window.addEventListener('load', function() {
    const confidenceFill = document.querySelector('.confidence-fill');
    if (confidenceFill) {
        const confidenceValue = confidenceFill.getAttribute('data-confidence');
        if (confidenceValue) {
            // Remove % sign if present and use the value
            const width = confidenceValue.replace('%', '');
            setTimeout(() => {
                confidenceFill.style.width = width + '%';
            }, 100);
        }
    }
});

// Add particle effect on button hover
const quantumButton = document.querySelector('.quantum-button');
if (quantumButton) {
    quantumButton.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#00bfff';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'particleFade 0.6s ease-out forwards';
        
        this.appendChild(particle);
        
        setTimeout(() => particle.remove(), 600);
    });
}

// Add CSS for particle fade animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFade {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0) translateY(-20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);