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
    console.log(image);

    const img = new Image();

    img.src = "images/" + image.src;
    img.alt = image.alt;
    img.classList.add("gallery__img");

    try {
      await img.decode();
      gallery.appendChild(img)
    } catch (error) {
      console.error("Invalid image, ", error);
    }

  }

}