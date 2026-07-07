const menuButton = document.querySelector('.menu-button');
const headerNav = document.querySelector('.header-nav');

if (menuButton && headerNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('is-open');

    menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuButton.textContent = isOpen ? '閉じる' : 'メニュー';
  });
}

const navLinks = document.querySelectorAll('.header-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (headerNav && menuButton) {
      headerNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'メニュー';
    }
  });
});

const contactForm = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    formMessage.textContent = 'お問い合わせありがとうございます。実際の送信は行われません。';
    contactForm.reset();
  });
}