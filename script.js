//your JS code here. If required.
function activateSearch() {
  const searchDiv = document.querySelector('.search');
  searchDiv.classList.add('active');

  const inputElement = document.querySelector('.input');
  inputElement.focus();
}