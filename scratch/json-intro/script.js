loadData();

function loadData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const imageInfo = JSON.parse(this.response);
    console.table(imageInfo);
    generateGallery(imageInfo);
  }
  xhttp.open("GET", "data.json");
  xhttp.send();
}



async function generateGallery(data) {
  const gallery = document.querySelector('#catContainer');
  
  for(cat of data.cat) {

    const card = document.createElement("div");
    card.classList.add("gallery__card")

    const img = new Image();
    img.src = "images/" + image.src;
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