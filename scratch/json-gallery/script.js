loadImages();

function loadImages() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const imageInfo = JSON.parse(this.response);
    console.table(imageInfo);
    generateGallery(imageInfo);
  }
  xhttp.open("GET", "images.json");
  xhttp.send();
}

async function generateGallery(data) {
  const gallery = document.querySelector('.gallery');
  
  for(image of data.images) {

    const card = document.createElement("div");
    card.classList.add("gallery__card")

    const img = new Image();
    img.src = "images/" + image.img_src;
    img.alt = image.alt;
    img.classList.add("gallery__card-img");

    const caption = document.createElement("p")
    caption.textContent = img.alt;


    try {
      await img.decode();

      card.appendChild(img)
      card.appendChild(caption)
      gallery.appendChild(card)
    } catch (error) {
      console.error(error, `image: ${img.src}`);
    }

  }

}