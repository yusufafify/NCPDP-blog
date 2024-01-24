//?This JavaScript code creates a navbar element with an ID of "navbar" and adds an event
//?listener to the window object to detect when the user scrolls. When the user scrolls,
//?the code checks if the vertical scroll position is greater than zero. If it is,
//?the code adds a class "scrolled" to the navbar element. Otherwise,
//?if the scroll position is zero or less,
//?the "scrolled" class is removed from the navbar element.

// Get the navbar element by its ID
const navbar = document.getElementById("navbar");

// Add a scroll event listener to the window object
window.addEventListener("scroll", () => {
  // Check if the vertical scroll position is greater than 0
  if (window.scrollY > 0) {
    // If the scroll position is greater than 0, add the "scrolled" class to the navbar element
    navbar.classList.add("scrolled");
  } else {
    // If the scroll position is 0 or less, remove the "scrolled" class from the navbar element
    navbar.classList.remove("scrolled");
  }
});
