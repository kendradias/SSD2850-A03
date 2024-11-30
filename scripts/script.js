'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("animated-text");
    const spans = animatedText.getElementsByTagName("span"); // Get all span elements
    let lineIndex = 0; // Track the current line
    let charIndex = 0; // Track the current character in the line

    function typeCharacter() {
        if (lineIndex < spans.length) {
            let line = spans[lineIndex];
            let text = line.getAttribute('data-full-text') || line.textContent; // Use a data attribute to store the full text
            if (charIndex < text.length) {
                line.textContent = text.substring(0, charIndex + 1); // Update text one character at a time
                charIndex++;
                setTimeout(typeCharacter, 100); // Adjust typing speed here (faster or slower)
            } else {
                lineIndex++;
                charIndex = 0; // Reset character index for the next line
                if (lineIndex < spans.length) {
                    setTimeout(typeCharacter, 500); // Wait before starting the next line
                }
            }
        }
    }

    // Initialize the typing effect
    Array.from(spans).forEach(span => {
        span.setAttribute('data-full-text', span.textContent); // Store the full text in a data attribute
        span.textContent = ''; // Clear initial content
    });
    
    typeCharacter(); // Start typing as soon as the page loads
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Read more button functionality
document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function() {
        const bodyContent = this.closest('.article').querySelector('.body-content');
        const tags = this.closest('.article').querySelector('.tags');

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

// Function to display a random article from the existing ones
function displayRandomArticleFromExisting() {
    // Get all article elements from the articles section
    const articles = document.querySelectorAll("#articles .article");

    // Select a random article
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArticle = articles[randomIndex];

    // Clone the random article's content
    const clonedArticle = randomArticle.cloneNode(true);

    // Inject the cloned article into the highlight section
    const highlightSection = document.getElementById("highlight-section");
    highlightSection.innerHTML = ""; 

    // Append desired elements to the highlight section
    if (clonedArticle.querySelector(".image-container")) {
        highlightSection.appendChild(clonedArticle.querySelector(".image-container"));
    }
    if (clonedArticle.querySelector("h3")) {
        highlightSection.appendChild(clonedArticle.querySelector("h3"));
    }
    if (clonedArticle.querySelector(".body-content")) {
        highlightSection.appendChild(clonedArticle.querySelector(".body-content"));
    }
    // highlightSection.appendChild(clonedArticle);
}

// Call the function when the page loads
window.onload = displayRandomArticleFromExisting;
