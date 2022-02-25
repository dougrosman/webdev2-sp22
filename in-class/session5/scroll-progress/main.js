// when the user scrolls...
// call the myFunction() function
window.onscroll = function() {
    updateProgress()
};



function updateProgress() {
    
    // calculate how much has been scrolled
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log("winScroll: ", winScroll);
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log("height: ", height);
    let scrolled = (winScroll / height) * 100;

    // use the amount scrolled to style the progress bar
    document.querySelector(".progress-bar").style.width = scrolled + "%";
}