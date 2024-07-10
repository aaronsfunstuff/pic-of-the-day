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
    },
  {
        title: "Mountain Landscape",
        description: "Scenic view of mountains with snow-capped peaks.",
        photographer: "Harvey Steam",
        imageUrl: "https://photopxl.com/pxl-content/uploads/2019/06/1.-Title-Image-22Western-Mountain-Landscape-Photography22.jpg"
    },
    {
        title: "Waterfall in Forest",
        description: "A majestic waterfall surrounded by lush green forest.",
        photographer: "Sarah Johnson",
        imageUrl: "https://olympicpeninsula.org/wp-content/uploads/2021/02/WF-Trail-Willaby-Creek-Falls-3-Edited-1024x683.jpg"
    },
    {
        title: "Desert Oasis",
        description: "An oasis in the middle of the desert with palm trees and a small lake.",
        photographer: "David White",
        imageUrl: "https://blenderartists.org/uploads/default/original/4X/8/5/1/85149627bfd4b8110c1aab0e9021dfe0508f88b3.jpeg"
    },
    {
        title: "Northern Lights",
        description: "A mesmerizing display of the aurora borealis in the night sky.",
        photographer: "Emily Green",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/k6okX2VVUg4qWoyxuNLsf7.jpg"
    },
    {
        title: "Tropical Beach",
        description: "A serene tropical beach with turquoise waters and white sand.",
        photographer: "Chris Taylor",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1N89WE8C7YF8AO32BVbGVEEXwP7lyv6FYxg&s"
    },
    {
        title: "Historic Castle",
        description: "An ancient castle perched on a hilltop overlooking a valley.",
        photographer: "Jessica Lee",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Panorámica_Otoño_Alcázar_de_Segovia.jpg"
    },
    {
        title: "Wildflower Meadow",
        description: "A field of colorful wildflowers stretching to the horizon.",
        photographer: "Ryan Adams",
        imageUrl: "https://www.familyhandyman.com/wp-content/uploads/2023/04/GettyImages-1168969757.jpg"
    },
    {
        title: "Urban Street Art",
        description: "Vibrant street art on city walls expressing creativity and culture.",
        photographer: "Sophie Brown",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdzEC3wiClcbIrZllQKuNcIg-YfYV_y3mg2A&s"
    },
    {
        title: "Snowy Mountain Peak",
        description: "A snowy mountain peak under a clear blue sky.",
        photographer: "Alex Clark",
        imageUrl: "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo="
    },
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
