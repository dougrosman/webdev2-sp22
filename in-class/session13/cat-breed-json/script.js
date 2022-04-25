// Starter JSON Request Code:
// https://www.w3schools.com/js/js_ajax_http.asp

loadData();

function loadData() {
    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function() {
        // Here you can use the Data

    }

    // Send a request
    xhttp.open("GET", "data.json");
    xhttp.send();
}



// let button = document.querySelector('.print');

// button.addEventListener("click", function() {

//     let text = document.querySelector('.myText');

//     alert(text.value)
// })