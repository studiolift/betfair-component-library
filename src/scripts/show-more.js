console.log('Show more cards Loaded');

document.addEventListener('DOMContentLoaded', function() {
  
  // Function to handle the show more on cards
  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {

    var showMoreText = card.getAttribute('data-more-text');
    var showLessText = card.getAttribute('data-less-text');

    // Check if the card has the data-toggle attribute set to 'more'
    if (card.dataset.toggle === 'more') {
      // Create a 'Show more' button
      var button = document.createElement('button');
      button.textContent = showMoreText;

      // Append the button to the card
      card.appendChild(button);

      // Add a click event listener to the button
      button.addEventListener('click', function() {
        // Toggle the data-toggle attribute between 'more' and 'less'
        card.dataset.toggle = (card.dataset.toggle === 'more') ? 'less' : 'more';

        // Change the button text based on the updated data-toggle value
        button.textContent = (card.dataset.toggle === 'more') ? showMoreText : showLessText;
      });
    }
  });

});