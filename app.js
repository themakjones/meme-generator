const addImage = (url) => {
    const img = document.createElement('img');
    const div = document.createElement('div');

    img.src = url;
    div.classList.add('meme');
    div.appendChild(img)

    document.querySelector('#meme-container').appendChild(div);
}

addEventListener('submit', ev => {
    ev.preventDefault();

    let url = document.querySelector('#image-url').value;
    let topText = document.querySelector('#top-text').value;
    let bottomText = document.querySelector('#bottom-text').value;

    addImage(url);
})

