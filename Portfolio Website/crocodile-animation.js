function crocodile_facts() {
    var facts = [
      'I love crocodiles! Actually',
      'I broke more than 50 hotwheel cars when I was a kid',
      'I love streatgy and management games',
      'I am a big fan of starwars',
      'Once a monkey ate my headphones',
      'The name of my pet doggo is "Tommy"',
    ];
    
    var textBubble = document.querySelector('.text_bubble');
    var randomIndex = Math.floor(Math.random() * facts.length);
    textBubble.innerHTML = facts[randomIndex];
  }