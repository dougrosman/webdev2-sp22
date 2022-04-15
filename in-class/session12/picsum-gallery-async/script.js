// auto generate a photo gallery from picsum.photos

const gallery = document.querySelector('.gallery');


generateGallery(10);


function generateGallery(amount) {

    for(let i = 0; i < amount; i++) {

        // const newImage = document.createElement('img');
        const newImage = new Image();

        const url = `https://picsum.photos/id/${i}/200`

        newImage.setAttribute('class', 'gallery__img')
        newImage.setAttribute('src', url)
        newImage.setAttribute('alt', 'stock photo')

        gallery.appendChild(newImage);
    }

    console.log("hello");
}