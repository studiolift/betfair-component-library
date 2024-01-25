console.log('Accordion Loaded');

function toggleAccordion(element) {
  // Find the nearest parent element with class .nav_accordion
  var accordion = findNearestParent(element, 'accordion');

  // Toggle the class .nav_accordion--active
  if (accordion) {
      accordion.classList.toggle('accordion--show');
  }
}

function findNearestParent(element, className) {
    // Traverse up the DOM to find the nearest parent with the specified class
    while (element && !element.classList.contains(className)) {
        element = element.parentElement;
    }

    return element;
}