fetch('http://localhost:3000/list-files')
  .then(response => response.json())
  .then(files => {
    console.log("files>>>>>>>>>>>>>>>>>>>>>>>>>",files);
    const promises = files.map(file => {
      console.log("fileName>>>>>>>>>>>>>>>>>>>>>>>>>",file);

      return fetch(file)
        .then(response => response.text())
        .then(text => {
          console.log("text>>>>>>>>>>>>>>>>>>>>>>>>>",text);

          const paragraph = document.createElement('p');
          paragraph.textContent = text;
          console.log("paragraph>>>>>>>>>>>>>>>>>>>>>>>>>",paragraph);

          textElement.appendChild(paragraph);
        })
        .catch(error => {
          console.log("error>>>>>>>>>>>>>>>>>>>>>>>>>");

          console.error(error);
        });
    });
    return Promise.all(promises);
  })
  .catch(error => {
    console.error(error);
  });
