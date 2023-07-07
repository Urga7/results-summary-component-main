let continueButton = document.getElementsByClassName('button')[0];

continueButton.addEventListener('mouseover', function() {
    continueButton.style.backgroundImage = "linear-gradient(to top, hsl(241, 81%, 54%), hsl(252, 100%, 67%))";
});

continueButton.addEventListener('mouseout', function() {
    continueButton.style.backgroundImage = "none";
});
