## Task 1 - Image Gallery
A responsive image gallery built with HTML, CSS, and JavaScript.

## Features
Responsive grid layout that adapts to all screen sizes
Lightbox view with fullscreen image display
Previous / Next navigation buttons
Keyboard navigation (← → to browse, Escape to close)
Smooth hover effects and transitions
Image captions and counter display


## Project Structure
CodeAlpha_ImageGallery/
└── images          # All images in the gallery
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Gallery logic and lightbox functionality
└── README.md       # Project documentation

## How to Run
Clone or download the project files
Open index.html in any modern web browser
No build tools or dependencies required


## How to Add Your Own Images
In script.js, find the images array and replace the placeholder entries with your own:
jsconst images = [
  { src: "images/photo1.jpg", caption: "Your caption here" },
  { src: "images/photo2.jpg", caption: "Another caption" },
];
Place your image files in an images/ folder inside the project directory.

## Technologies Used
HTML
CSS
Vanilla JavaScript (DOM manipulation, keyboard events)
