
function showSnackbar(message, type) {
  const snackbar = document.getElementById('snackbar');
  snackbar.textContent = message;
  snackbar.className = '';
  snackbar.classList.add('show', type);
  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '').trim();
  }, 3000);
}