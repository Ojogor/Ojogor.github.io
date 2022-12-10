// Get a reference to the image
const crocodile_image = document.querySelector('#Crocodile_Button');

// Attach an event listener to the image that listens for the 'click' event
crocodile_image.addEventListener('click', () => {
  
  displayFact();
});
function displayFact() {
  // Array of fun facts about yourself
  const facts = [
    "I enjoy going for long walks in the park.",
    "I am a skilled pianist.",
    "I have a collection of rare stamps.",
    "I have traveled to 5 different countries.",
    "I speak 3 languages fluently.",
    "I have a pet turtle named Timmy.",
    "I am an avid reader and have read over 100 books in the past year.",
    "I am a certified scuba diver."
  ];

  // Generate a random number between 0 and the number of facts in the array
  const randomIndex = Math.floor(Math.random() * facts.length);

  // Use the random number to select a random fact from the array
  const fact = facts[randomIndex];

  // Display the fact
  console.log(fact);
}