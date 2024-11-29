'use strict';
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});





document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function() {
        var bodyContent = this.closest('.article').querySelector('.body-content');
        var tags = this.closest('.article').querySelector('.tags');

        // Toggle visibility of body content and tags
        if (bodyContent.style.display === "" || bodyContent.style.display === "none") {
            bodyContent.style.display = "block";
            tags.style.display = "block";
            this.innerHTML = '<i class="fa fa-arrow-up"></i>';  // Change the text and icon
        } else {
            bodyContent.style.display = "none";
            tags.style.display = "none";
            this.innerHTML = '<i class="fa fa-arrow-right"></i>';  // Reset the text and icon
        }
    });
});


