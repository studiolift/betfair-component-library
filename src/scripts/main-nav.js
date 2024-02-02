function toggleNav() {
  var menuToggleElement = document.querySelector('.doc_header__menu_toggle');
  var navElement = document.querySelector('.doc_layout__nav');

  // Toggle the 'active' class on the menu toggle element
  menuToggleElement.classList.toggle('active');

  // Toggle the 'doc_layout__nav--show' class on the navigation element
  navElement.classList.toggle('doc_layout__nav--show');
}