document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".nav-item.dropdown");

    function isDesktop() {
        return window.innerWidth > 991.98; // Adjust the width as needed for your desktop breakpoint
    }

    if (isDesktop()) {
        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener("mouseenter", function() {
                this.querySelector(".dropdown-menu").classList.add("show");
            });

            dropdown.addEventListener("mouseleave", function() {
                this.querySelector(".dropdown-menu").classList.remove("show");
            });
        });
    }
});
//email
document.getElementById('email-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the email input value
  var emailInput = document.querySelector('.email-form input[type="email"]');
  var email = emailInput.value;

  // Display the message
  var messageElement = document.getElementById('subscribe-message');
  messageElement.innerText = 'Thank You! We’ve received your submission!';

  // Optional: Clear the input after submission
  emailInput.value = '';
});
