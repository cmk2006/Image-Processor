document.getElementById('img').addEventListener('change', function() {
    // Get the selected file input element
    var input = this;

    // Get the file name from the input element
    var fileName = input.files[0].name;

    // Update the file name span element
    document.getElementById('fileName').textContent = fileName;

    // Check if a file is selected
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Update the src attribute of the image element to show the selected image
            document.getElementById('ImagePreview').src = e.target.result;
            document.getElementById('previewImg').src = '';
        }

        // Read the selected file as a data URL
        reader.readAsDataURL(input.files[0]);
    }
});

function updateFileName(input) {
    var fileName = input.files[0].name;
    document.getElementById('fileName').textContent = fileName;
}



document.getElementById('imageForm').addEventListener('htmx:afterRequest', function(event) {
    console.log('htmx:response event triggered');
    var response = event.detail.xhr.response; // Get the XMLHttpRequest response
    document.getElementById('previewImg').src = 'data:image/jpeg;base64,' + response;
});

