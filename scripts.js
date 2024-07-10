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

const photoElement = document.getElementById('photo');
const titleElement = document.getElementById('photo-title');
const descriptionElement = document.getElementById('photo-description');
const photographerElement = document.getElementById('photo-photographer');
const randomPhotoBtn = document.getElementById('random-photo-btn');

// Function to display a random photo and its details
function displayRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    const randomPhoto = photos[randomIndex];

    photoElement.src = randomPhoto.imageUrl;
    titleElement.textContent = randomPhoto.title;
    descriptionElement.textContent = randomPhoto.description;
    photographerElement.textContent = `Photographer: ${randomPhoto.photographer}`;
}

// Display a random photo on page load
displayRandomPhoto();

// Event listener for the Random Photo button
randomPhotoBtn.addEventListener('click', displayRandomPhoto);
