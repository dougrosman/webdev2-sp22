const gallery = document.querySelector('.gallery');

function generateDivs(amount) {
    for(let i = 0; i < amount; i++) {
        let newBox = document.createElement(`div`);
        newBox.classList.add('box');

        const randomWidth = Math.floor(10 + Math.random() * 100)
        const randomHeight = Math.floor(10 + Math.random() * 40)

        newBox.style.width = randomWidth + "px";
        newBox.style.height = randomHeight + "px";

        let randomColor = [
            Math.floor(Math.random()*256),
            Math.floor(Math.random()*256),
            Math.floor(Math.random()*256)
        ]

        // rgb(200, 100, 20)
        // string concatenation: combining strings with strings, or strings with non-strings
        
        // standard strings way of doing this
        //newBox.style.backgroundColor = "rgb(" + randomColor[0] + "," + randomColor[1] + "," + randomColor[2] + ")"

        // template strings way of doing this
        newBox.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`

        gallery.appendChild(newBox);
    }
}

generateDivs(100);