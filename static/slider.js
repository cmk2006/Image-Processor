const slider = document.getElementById("imgSize");
const sliderValue = document.getElementById("Sizedisplay");
const firstimg = document.getElementById("ImagePreview");
const secondimg = document.getElementById("previewImg");

// Display the initial value when the page is loaded
sliderValue.innerHTML = slider.value * 10 + "%";
firstimg.style.width = slider.value * 10 + "%";
secondimg.style.width = slider.value * 10 + "%";

// Update the displayed slider value and the width of the images when the slider is changed
slider.addEventListener("input", function() {
    const value = this.value * 10; // Get the slider value
    sliderValue.innerHTML = value + "%"; // Update the displayed value
    firstimg.style.width = value + "%"; // Set the width of the first image
    secondimg.style.width = value + "%"; // Set the width of the second image
});