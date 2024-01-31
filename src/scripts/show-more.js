console.log('Show more cards Loaded');

document.addEventListener('DOMContentLoaded', function() {
  // Find all elements with the class 'card'
  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
    // Check if the card has the data-toggle attribute set to 'more'
    if (card.dataset.toggle === 'more') {
      // Create a 'Show more' button
      var button = document.createElement('button');
      button.textContent = '+ Show more';

      // Append the button to the card
      card.appendChild(button);

      // Add a click event listener to the button
      button.addEventListener('click', function() {
        // Toggle the data-toggle attribute between 'more' and 'less'
        card.dataset.toggle = (card.dataset.toggle === 'more') ? 'less' : 'more';

        // Change the button text based on the updated data-toggle value
        button.textContent = (card.dataset.toggle === 'more') ? '+ Show more' : '– Show less';
      });
    }
  });
});