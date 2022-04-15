// auto generate a photo gallery from picsum.photos

const gallery = document.querySelector('.gallery');


// generateGallery(10);


async function generateGallery(amount) {

    for(let i = 0; i < amount; i++) {

        // const newImage = document.createElement('img');
        const newImage = new Image();
        const url = `https://picsum.photos/id/${i}/200`

        newImage.src = url;

        try {
            await newImage.decode();
            newImage.setAttribute('class', 'gallery__img')
            newImage.setAttribute('alt', 'stock photo')
            gallery.appendChild(newImage);
        } catch(error) {
            console.log("Invalid Image, ", error)
        }
    }
    console.log("hello");
}