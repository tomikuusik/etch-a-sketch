const containerDiv = document.querySelector('#maindiv');
for (i = 0; i < (16*16); i++) {
    const div = document.createElement('div');
    div.id = "div-" + (i+1);
    containerDiv.appendChild(div);
}
