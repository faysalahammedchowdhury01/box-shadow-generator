// Select Element
const inputs = document.querySelectorAll('input');
const inset = document.querySelector(`input[type="checkbox"]`);

// Set Checkbox Value
inset.addEventListener('change', () =>
  inset.checked ? (inset.value = 'inset') : (inset.value = '')
);

// Handle Shadow
function handleShadow() {
  const suffix = this.dataset.suffix || '';

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Handle CSS
function handleCSS() {
  const suffix = this.dataset.suffix || '';
  // Select Element
  const allSpan = document.querySelectorAll(`span[name="${this.name}"]`);
  allSpan.forEach((span) => (span.textContent = this.value + suffix));
}

// Event Listeners
inputs.forEach((input) => input.addEventListener('change', handleShadow));
inputs.forEach((input) => input.addEventListener('mousemove', handleShadow));
inputs.forEach((input) => input.addEventListener('change', handleCSS));
inputs.forEach((input) => input.addEventListener('mousemove', handleCSS));

// Copy Code to Clipboard
const clipboard = new ClipboardJS('.copy');
clipboard.on('success', function (e) {
  const copy = document.querySelector('.copy');
  copy.innerHTML = 'Copied!';

  // Change Inner HTML After 1.5 sec
  setTimeout(() => {
    copy.innerHTML = 'Copy CSS';
  }, 1500);

  e.clearSelection();
});

// Current Year
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();

year.textContent = currentYear;
