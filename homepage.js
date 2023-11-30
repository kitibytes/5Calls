document.querySelector('form').onsubmit = function(event) {
  var input = document.querySelector('input[name="search"]').value.trim();
  console.log("Form submitted with input:", input); // Debugging line
  
  var zipPattern = /^\d{5}(-\d{4})?$/; // Matches 5 digits, with an optional 4 digits preceded by a dash
  var addressPattern = /\d+\s+\w+/; // Matches a number followed by a space and words - very basic address pattern

  if (!zipPattern.test(input) && !addressPattern.test(input)) {
    console.log("Invalid input detected"); // Debugging line
    alert("Please enter a valid address or zipcode.");
    event.preventDefault(); // Stop form from submitting
  } else {
    console.log("Valid input detected"); // Debugging line
  }
};

document.addEventListener("DOMContentLoaded", function() {
  // Get all nav-link elements
  var navLinks = document.querySelectorAll('.navbar .nav-link');

  // Iterate over each nav-link
  navLinks.forEach(function(link) {
    // Add a click event listener to each link
    link.addEventListener('click', function(e) {
      // Extract the target section from the href attribute of the link
      var targetId = link.getAttribute('href');
      var targetSection = document.querySelector(targetId);

      // Check if the target section exists and is not #section1
      if (targetSection && targetId !== "#section1") {
        // Prevent the default anchor click behavior
        e.preventDefault();

        // Compute the offset position (the top of the target section minus the navbar height)
        var navbarHeight = document.querySelector('.navigation').offsetHeight;
        var offsetTop = targetSection.offsetTop - navbarHeight;

        // Smooth scroll to the target section
        window.scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
}); // Corrected closing for the event listener
