// Sample data - replace with your own photo data
const photos = [
    {
        title: "Sunset at Beach",
        description: "A beautiful sunset scene at the beach with vibrant colors.",
        photographer: "unknown",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsB-oJ_KJINpx5HVmbxt3-Fy1_JEP12IXPGw&s"
    },
    {
        title: "City Skyline",
        description: "A stunning view of the city skyline at night.",
        photographer: "unknown",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gScWtFoW56KoTbQSs7rcR-IFVPRIpQ53og&s"
    }
];

let currentPhotoIndex = 0;
const photoElement = document.getElementById('photo');
const titleElement = document.getElementById('photo-title');
const descriptionElement = document.getElementById('photo-description');
const photographerElement = document.getElementById('photo-photographer');
const prevPhotoBtn = document.getElementById('prev-photo-btn');
const nextPhotoBtn = document.getElementById('next-photo-btn');
const randomPhotoBtn = document.getElementById('random-photo-btn');

function displayPhoto(index) {
    const photo = photos[index];
    photoElement.src = photo.imageUrl;
    photoElement.alt = photo.title;
    titleElement.textContent = photo.title;
    descriptionElement.textContent = photo.description;
    photographerElement.textContent = `Photographer: ${photo.photographer}`;
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    displayPhoto(currentPhotoIndex);
}

function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    displayPhoto(currentPhotoIndex);
}

// Function to display a random photo and its details
function displayRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    displayPhoto(randomIndex);
}

// Display initial photo
displayPhoto(currentPhotoIndex);

// Event listeners for navigation buttons
nextPhotoBtn.addEventListener('click', showNextPhoto);
prevPhotoBtn.addEventListener('click', showPrevPhoto);

// Event listener for Random Photo button
randomPhotoBtn.addEventListener('click', displayRandomPhoto);

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        showNextPhoto();
    } else if (event.key === 'ArrowLeft') {
        showPrevPhoto();
    }
});

// Event listener to open larger view of the photo on click
photoElement.addEventListener('click', function() {
    window.open(photoElement.src, '_blank');
});
