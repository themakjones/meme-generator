const addImage = (url, container) => {
    const img = document.createElement('img');

    img.src = url;
    img.classList.add('meme-img');

    container.appendChild(img)}

const addText = (text, className, container) => {
    const div = document.createElement('div');

    div.classList.add(className);
    div.innerText = text;

    container.appendChild(div);
}

addEventListener('submit', ev => {
    ev.preventDefault();

    let url = document.querySelector('#image-url').value;
    let topText = document.querySelector('#top-text').value;
    let bottomText = document.querySelector('#bottom-text').value;

    let memeDiv = document.createElement('div');
    memeDiv.classList.add('meme-container');

    addImage(url, memeDiv);
    addText(topText, 'top-text', memeDiv);
    addText(bottomText, 'bottom-text', memeDiv);

    document.querySelector('.result-container').appendChild(memeDiv);

    document.querySelector('form').reset()
})

