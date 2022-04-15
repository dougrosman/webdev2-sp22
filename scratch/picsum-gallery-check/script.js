const gallery = document.querySelector('.gallery');
const MAX_PHOTOS = 150;
const WIDTH = 200;
const HEIGHT = 200;


async function populateGallery() {

}


for(let i = 0; i < MAX_PHOTOS; i++) {
  const photoURL = `https://picsum.photos/id/${i}/${WIDTH}/${HEIGHT}`;

  const newImage = document.createElement("img");
  newImage.setAttribute('class', `gallery__img`)
  newImage.setAttribute('src', `${photoURL}`)
  newImage.setAttribute('alt', 'stock photo from picsum.photos')

  gallery.appendChild(newImage);
}



