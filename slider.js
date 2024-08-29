var imageArray = [
    "https://www.limelight.pk/cdn/shop/files/web-pc.jpg?v=1720162509",
    "https://www.limelight.pk/cdn/shop/files/LAWN_UNSTITCHED_swipe_banner_web-desktop_version.jpg?v=1718954807"
];
var linkArray = ["lime2.html", "lime2.html"];
var currentIndex = 0;

function displayImage(index) {
    var image = document.getElementById("image");
    var link = document.getElementById("imageLink");

    image.src = imageArray[index];  
    link.href = linkArray[index];   
}
function nextImage() {
    currentIndex++;
    if (currentIndex >= imageArray.length) {
        currentIndex = 0;
    }
    displayImage(currentIndex);
}
function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imageArray.length - 1;
    }
    displayImage(currentIndex);
}
displayImage(currentIndex);
setInterval(nextImage, 4000);  





// tracking:
