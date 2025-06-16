document.addEventListener('DOMContentLoaded', () => {
  // Typing Effect
  const typingText = "Hi, I'm Ekta Sharma";
  const typingElement = document.getElementById('typing-text');
  let index = 0;

  if (typingElement) {
    function type() {
      if (index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
    type();
  }

  // Form Validation
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields!');
        return;
      }

      if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address!');
        return;
      }

      alert('Submitting your message...');
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  // Scroll Animation
  const revealElements = document.querySelectorAll('section');

  // Set initial style
  revealElements.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
  });

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load too

  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
});
