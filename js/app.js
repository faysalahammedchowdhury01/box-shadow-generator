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
  const span = document.querySelector(`span[name="${this.name}"]`);
  span.textContent = this.value + suffix;
}

// Event Listeners
inputs.forEach((input) => input.addEventListener('change', handleShadow));
inputs.forEach((input) => input.addEventListener('mousemove', handleShadow));
inputs.forEach((input) => input.addEventListener('change', handleCSS));
inputs.forEach((input) => input.addEventListener('mousemove', handleCSS));

// Change InnerHTML of Copy When Value is Change
const copy = document.querySelector('.copy');

inputs.forEach((input) =>
  input.addEventListener('change', () => (copy.innerHTML = 'Copy'))
);

// Copy Code to Clipboard
const clipboard = new ClipboardJS('.copy');
clipboard.on('success', function (e) {
  copy.innerHTML = 'Copied';

  e.clearSelection();
});
