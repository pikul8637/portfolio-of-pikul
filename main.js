// Show welcome alert when the page loads
window.addEventListener('load', () => {
    alert('Welcome to Adarsha Kumar Prusty\'s Portfolio!');
});
// Function to show Thank You message
function showThankYou() {
    alert("Thank you for viewing my portfolio page!");
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


