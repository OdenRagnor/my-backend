// A list of compliments
const compliments = [
  "You have incredible creativity.",
  "Your presence makes everything better.",
  "You are smarter than you give yourself credit for.",
  "Your kindness is magnetic.",
  "You have a natural talent for making things beautiful.",
  "Your determination is inspiring.",
  "You bring out the best in people.",
  "You have amazing golden eyes",
  "You are a princess among frogs",
  "You make people around you feel heard.",
  "You are the sun breaking through clouds.",
  "You are beautiful inside and out.",
  "Your laugh is infectious.",
  "You work hard.",
  "You are dedicated.",
  "You are a pretty princess",
  "I love your smile.",
  "You deserve only the best of high-fives!",
  "I like your butt!",
  "You make me smile.",
  "You are cute!",
  "You are a great mom!",
  "You make difficult things look effortless.",
  "Your voice could calm a storm.",
  "You have a glow that people notice instantly.",
  "Your compassion is one of your superpowers.",
  "You make every space feel warmer.",
  "Your ideas are genuinely refreshing.",
  "You are the kind of person others aspire to be.",
  "You have a smile that rewires bad days.",
  "Your presence feels like a soft blanket.",
  "You are wonderfully unpredictable in the best way.",
  "You make people feel appreciated.",
  "You have a rare kind of charm.",
  "You are stronger than you realize.",
  "You radiate kindness without even trying.",
  "You make life feel lighter.",
  "You are unforgettable in the most beautiful way.",
  "You bring comfort just by being near.",
  "You are a masterpiece in progress.",
  "You make ordinary days feel special.",
  "You are the kind of magic people do not forget."

];

// When the button is clicked, pick a random compliment
document.getElementById("complement").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];

  // Display it somewhere on the page
  document.getElementById("output").textContent = randomCompliment;
});
