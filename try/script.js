const currentPath = window.location.pathname;
const directoryUrl = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
const textElement = document.getElementById('text');

fetch(directoryUrl)
  .then(response => response.text())
  .then(text => {
    const fileNames = text.split('\n').filter(name => name.endsWith('.txt'));
    const promises = fileNames.map(fileName => {
      const fileUrl = directoryUrl + fileName;
      return fetch(fileUrl)
        .then(response => response.text())
        .then(text => {
          const paragraph = document.createElement('p');
          paragraph.textContent = text;
          textElement.appendChild(paragraph);
        })
        .catch(error => {
          console.error(error);
        });
    });
    return Promise.all(promises);
  })
  .catch(error => {
    console.error(error);
  });
