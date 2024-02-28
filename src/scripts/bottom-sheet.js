console.log('Bottom Sheet Loaded');

function toggleBottomSheet(element) {
  // Find the nearest parent element with class .nav_accordion
  var bottomSheet = findNearestParent(element, 'bottom_sheet');

  // Toggle the class .nav_accordion--active
  if (bottomSheet) {
      bottomSheet.classList.toggle('bottom_sheet--show');
  }
}

function findNearestParent(element, className) {
  // Traverse up the DOM to find the nearest parent with the specified class
  while (element && !element.classList.contains(className)) {
    element = element.parentElement;
  }

  return element;
}