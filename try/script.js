const fileUrl = 'file1.txt';
const textElement = document.getElementById('text');

fetch(fileUrl)
  .then(response => response.text())
  .then(text => {
    textElement.textContent = text;
  })
  .catch(error => {
    console.error(error);
  });
