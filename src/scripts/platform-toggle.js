console.log('PLatform Toggle Loaded');

function togglePlatformSBK(element) {
  // Find the nearest parent element with class .nav_accordion
  var platformToggleParent = findNearestParent(element, 'platform_toggle');

  // Toggle the class .nav_accordion--active
  if (platformToggleParent) {
    platformToggleParent.classList.add('platform_toggle--sbk');
    platformToggleParent.classList.remove('platform_toggle--exc');
  }
}

function togglePlatformEXC(element) {
  // Find the nearest parent element with class .nav_accordion
  var platformToggleParent = findNearestParent(element, 'platform_toggle');

  // Toggle the class .nav_accordion--active
  if (platformToggleParent) {
    platformToggleParent.classList.add('platform_toggle--exc');
    platformToggleParent.classList.remove('platform_toggle--sbk');
  }
}

function findNearestParent(element, className) {
  // Traverse up the DOM to find the nearest parent with the specified class
  while (element && !element.classList.contains(className)) {
      element = element.parentElement;
  }

  return element;
}