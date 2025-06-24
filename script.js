// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out! We’ll get back to you soon.');
  this.reset();
});

// Sticky Header Transparency on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.sticky-header');
  if (window.scrollY > 50) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }

  // Scroll Progress Bar
  const scrollBar = document.getElementById('scroll-bar');
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollBar.style.width = `${scrollPercent}%`;
});

// Modal Logic for Projects
document.querySelectorAll('.view-more').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const modalId = e.currentTarget.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

// Close modal
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}
