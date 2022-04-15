function generateURL(len) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

  let randomString = '';
  for(let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      const randomChar = chars[randomIndex];
      randomString+=randomChar;
  }

  let randomURL = `https://i.imgur.com/${randomString}.jpg`;
  return randomURL;
}


const MAX_WIDTH = 200;

let gallery = document.querySelector('.gallery');
let boxes;

function loadImage(url) {

  let img = new Image();
  img.onload = function() {
    let dims = [this.width, this.height];
      
      if(dims[0] === 161 && dims[1] === 81){
          console.log("trying again...");
          loadImage(generateURL(5));
       } else {
          gallery.appendChild(img);
      }
  }
  img.src = url;
}

for(let i = 0; i < 30; i++) {
  loadImage(generateURL(5));
}