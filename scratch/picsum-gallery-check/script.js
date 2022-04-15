const gallery = document.querySelector('.gallery');
const MAX_PHOTOS = 100;
const WIDTH = 100;
const HEIGHT = 100;
let rejected = "";

generateGallery();

async function generateGallery(numPhotos) {

  for(let i = 0; i < MAX_PHOTOS; i++) {
    const img = new Image();
    img.src = `https://picsum.photos/id/${i}/${WIDTH}/${HEIGHT}`
    
    try {
      await img.decode();
      gallery.appendChild(img)
    } catch (error) {
      console.error("Invalid image, ", error);
      rejected += `${i}, `
      document.querySelector('.rejected').innerText = rejected;
    }
  }
}