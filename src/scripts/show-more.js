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

  // Function to handle the toggle events on embed summaries
  function toggleReadMore(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Find the closest embed_summary container
    const embedSummary = event.target.closest('.embed_summary');
    if (!embedSummary) return; // If no container found, exit the function

    // Find the readmore div within this container
    const readMoreDiv = embedSummary.querySelector('.embed_summary__readmore');

    // Toggle the class for the readmore div
    readMoreDiv.classList.toggle('embed_summary__readmore--show');

    // Toggle the button text
    const button = event.target;
    const moreText = embedSummary.getAttribute('data-more-text');
    const lessText = embedSummary.getAttribute('data-less-text');

    if (button.textContent === moreText) {
        button.textContent = lessText;
    } else {
        button.textContent = moreText;
    }
  }

  // Attach event listener to all read more buttons
  const readMoreButtons = document.querySelectorAll('.read_more_button');
  readMoreButtons.forEach(button => {
      button.addEventListener('click', toggleReadMore);
  });

});