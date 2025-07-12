document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const gridToggle = document.getElementById("grid-toggle");
    const videoToggle = document.getElementById("video-toggle");
    const imageGrid = document.getElementById("image-grid");
    const videoGrid = document.getElementById("video-grid");

    // Function to switch to video grid
    videoToggle.addEventListener("click", function() {
        // Hide image grid, show video grid
        imageGrid.style.display = "none";
        videoGrid.style.display = "grid";
    });

    // Function to switch to image grid
    gridToggle.addEventListener("click", function() {
        // Hide video grid, show image grid
        videoGrid.style.display = "none";
        imageGrid.style.display = "grid";
    });
});
