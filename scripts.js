// Function to display a welcome message
function welcomeMessage() {
    alert("Welcome to Yasir Khaan's personal website! Thanks for visiting.");
}

// Handle file upload for the background image
document.getElementById('bgImageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fileInput = document.getElementById('bgImageInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('bgImage').src = e.target.result;
            document.body.style.backgroundImage = `url('${e.target.result}')`;
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select a file.');
    }
});

// Handle file upload for other files
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const files = document.getElementById('fileInput').files;
    const uploadStatus = document.getElementById('uploadStatus');
    const loadingSpinner = document.getElementById('loadingSpinner');

    if (files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    // Show the spinner
    loadingSpinner.style.display = 'block';

    // Simulate an upload (this part needs to be replaced with real upload logic)
    setTimeout(() => {
        // Hide the spinner
        loadingSpinner.style.display = 'none';
        uploadStatus.innerHTML = `<p>Upload successful!</p>`;
    }, 2000); // Simulate a 2-second upload delay
});
