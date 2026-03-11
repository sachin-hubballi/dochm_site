async function loadMenu() {
  try {
    const response = await fetch('components/main_menu.html');
    const html = await response.text();
    document.getElementById('header_menu').innerHTML = html;
  } catch (error) {
    console.error('Error loading menu:', error);
  }
}
// Call it when DOM is ready
document.addEventListener('DOMContentLoaded', loadMenu);

async function loadMobileMenu() {
  try {
    const response = await fetch('components/mobile_header_menu.html');
    const html = await response.text();
    document.getElementById('header_menu_mobile').innerHTML = html;
  } catch (error) {
    console.error('Error loading mobile menu:', error);
  }
}
// Call it when DOM is ready
document.addEventListener('DOMContentLoaded', loadMobileMenu);

async function loadFooter() {
  try {
    const response = await fetch('components/footer.html');
    const html = await response.text();
    document.getElementById('uc-footer').innerHTML = html;
  } catch (error) {
    console.error('Error loading footer:', error);
  }
}
// Call it when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);