---
title: Nav Accordion
date: 2024-01-01
---

# Nav Accordion

### Component Demo

<nav class="nav_accordion">
  <header class="nav_accordion__title" onclick="toggleAccordion(this)">
    <h3>Title</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99374 13.6771L4.41041 8.08542C4.08541 7.76042 4.08541 7.23542 4.41041 6.91042C4.73541 6.58542 5.26041 6.58542 5.58541 6.91042L9.98541 11.3188L14.4021 6.91042C14.7271 6.58542 15.2521 6.58542 15.5771 6.91042C15.9021 7.23542 15.9021 7.76042 15.5771 8.08542L9.98541 13.6771H9.99374Z"/></svg>
  </header>

  <ul class="nav_accordion__menu">
    <li>
      <a href="#">
        Navigation Item
        <svg style="margin-left: auto;" width="20" height="20" viewBox="0 0 20 20" fill="none"><g>
          <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M9.40827 15.5687C9.57494 15.7271 9.78329 15.8104 9.99996 15.8104L9.99161 15.8271C10.2083 15.8271 10.4249 15.7437 10.5833 15.5854L16.175 10.0021L15.6847 9.51186C15.6275 9.42949 15.5558 9.35782 15.4735 9.30059L10.5833 4.41041C10.2583 4.08541 9.73327 4.08541 9.40827 4.41041C9.08327 4.73541 9.08327 5.26041 9.40827 5.58541L12.9749 9.15201H4.99999C4.54166 9.15201 4.16666 9.52701 4.16666 9.98534C4.16666 10.4437 4.54166 10.8187 4.99999 10.8187H12.9901L9.40827 14.3937C9.08327 14.7187 9.08327 15.2437 9.40827 15.5687Z"/>
        </g></svg>
      </a>
    </li>
    <li>
      <a href="#">
        Navigation Item
        <svg style="margin-left: auto;" width="20" height="20" viewBox="0 0 20 20" fill="none"><g>
          <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M9.40827 15.5687C9.57494 15.7271 9.78329 15.8104 9.99996 15.8104L9.99161 15.8271C10.2083 15.8271 10.4249 15.7437 10.5833 15.5854L16.175 10.0021L15.6847 9.51186C15.6275 9.42949 15.5558 9.35782 15.4735 9.30059L10.5833 4.41041C10.2583 4.08541 9.73327 4.08541 9.40827 4.41041C9.08327 4.73541 9.08327 5.26041 9.40827 5.58541L12.9749 9.15201H4.99999C4.54166 9.15201 4.16666 9.52701 4.16666 9.98534C4.16666 10.4437 4.54166 10.8187 4.99999 10.8187H12.9901L9.40827 14.3937C9.08327 14.7187 9.08327 15.2437 9.40827 15.5687Z"/>
        </g></svg>
      </a>
    </li>
    <li>
      <a href="#">
        Navigation Item
        <svg style="margin-left: auto;" width="20" height="20" viewBox="0 0 20 20" fill="none"><g>
          <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M9.40827 15.5687C9.57494 15.7271 9.78329 15.8104 9.99996 15.8104L9.99161 15.8271C10.2083 15.8271 10.4249 15.7437 10.5833 15.5854L16.175 10.0021L15.6847 9.51186C15.6275 9.42949 15.5558 9.35782 15.4735 9.30059L10.5833 4.41041C10.2583 4.08541 9.73327 4.08541 9.40827 4.41041C9.08327 4.73541 9.08327 5.26041 9.40827 5.58541L12.9749 9.15201H4.99999C4.54166 9.15201 4.16666 9.52701 4.16666 9.98534C4.16666 10.4437 4.54166 10.8187 4.99999 10.8187H12.9901L9.40827 14.3937C9.08327 14.7187 9.08327 15.2437 9.40827 15.5687Z"/>
        </g></svg>
      </a>
    </li>
    <li>
      <a href="#">
        Navigation Item
        <svg style="margin-left: auto;" width="20" height="20" viewBox="0 0 20 20" fill="none"><g>
          <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M9.40827 15.5687C9.57494 15.7271 9.78329 15.8104 9.99996 15.8104L9.99161 15.8271C10.2083 15.8271 10.4249 15.7437 10.5833 15.5854L16.175 10.0021L15.6847 9.51186C15.6275 9.42949 15.5558 9.35782 15.4735 9.30059L10.5833 4.41041C10.2583 4.08541 9.73327 4.08541 9.40827 4.41041C9.08327 4.73541 9.08327 5.26041 9.40827 5.58541L12.9749 9.15201H4.99999C4.54166 9.15201 4.16666 9.52701 4.16666 9.98534C4.16666 10.4437 4.54166 10.8187 4.99999 10.8187H12.9901L9.40827 14.3937C9.08327 14.7187 9.08327 15.2437 9.40827 15.5687Z"/>
        </g></svg>
      </a>
    </li>
  </ul>
</nav>

### Example HTML

```html
<nav class="nav_accordion">
  <header class="nav_accordion__title" onclick="toggleAccordion(this)">
  <ul>
    <li>
      <a href="/link-url">
        <!-- Optional Inline SVG Sport Icon  -->
        Navigation Item
        <!-- Inline SVG Icon with auto left margin -->
      </a>
    </li>
    <!-- More List Items -->
  </ul>
</nav>
```

<script>
  function toggleAccordion(element) {
      // Find the nearest parent element with class .nav_accordion
      var accordion = findNearestParent(element, 'nav_accordion');

      // Toggle the class .nav_accordion--active
      if (accordion) {
          accordion.classList.toggle('nav_accordion--show');
      }
  }

  function findNearestParent(element, className) {
      // Traverse up the DOM to find the nearest parent with the specified class
      while (element && !element.classList.contains(className)) {
          element = element.parentElement;
      }

      return element;
  }
</script>