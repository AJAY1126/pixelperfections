// Get references to DOM elements
const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Handle file input change event
fileInput.addEventListener('change', function(e) {
  // Get the selected file
  const file = e.target.files[0];

  // Check if the file is an image
  if (file && file.type.startsWith('image')) {
    // Create a new FileReader
    const reader = new FileReader();

    // Read the file as Data URL
    reader.readAsDataURL(file);

    // Handle the file load event
    reader.onload = function() {
      // Create a new image element
      const img = new Image();

      // Set the image source to the Data URL
      img.src = reader.result;

      // When the image is loaded, draw it on the canvas
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Apply background removal
        removeBackground();
      };
    };
  }
});

// Function to remove the image background
function removeBackground() {
  // Initialize CamanJS with the canvas
  Caman('#canvas', function() {
    // Use the green screen filter to remove the background
    this.revert(false);
    this.greenScreen([0, 255, 0], 20);
    this.render();
  });
}