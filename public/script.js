let currentIndex = 0;

function changeSlide(direction) {
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Update the index
    currentIndex += direction;

    // Wrap around if necessary
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Update the transform property
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function toggleButton(toggleElement, e) {
    //console.log("toggle: " + toggleElement.toString());
    var elementName = "toggleContent" + toggleElement;
    console.log(e);
    const content = document.getElementById(elementName);

    if (content.style.display === 'none') {
        content.style.display = 'block';
        e.textContent = 'Hide';
    } else {
        content.style.display = 'none';
        e.textContent = 'Show';
    }
}

// document.getElementById('toggleButton').addEventListener('click', function () {
//     const content = document.getElementById('toggleContent');
//     if (content.style.display === 'none') {
//         content.style.display = 'block';
//         this.textContent = 'Hide';
//     } else {
//         content.style.display = 'none';
//         this.textContent = 'Show';
//     }
// });