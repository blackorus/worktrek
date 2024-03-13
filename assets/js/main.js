function openNav() {
    document.getElementById("myNav").style.width = "75%";
  }
  
function closeNav() {
   document.getElementById("myNav").style.width = "70px";
}

document.addEventListener('DOMContentLoaded', function () {
  const linkElement = document.querySelector('.link');

  linkElement.addEventListener('animationend', function (event) {
    const animationName = event.animationName;

    if (animationName === 'animation-line' || animationName === 'animation-arrow') {
      // Hover animation has ended, apply the reverse animation
      linkElement.classList.remove('hover');
    }
  });

  linkElement.addEventListener('mouseover', function () {
    // Add a class to indicate that the element is being hovered
    linkElement.classList.add('hover');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const linkElement = document.querySelector('.small-link');

  linkElement.addEventListener('animationend', function (event) {
    const animationName = event.animationName;

    if (animationName === 'animation-line' || animationName === 'animation-arrow') {
      // Hover animation has ended, apply the reverse animation
      linkElement.classList.remove('hover');
    }
  });

  linkElement.addEventListener('mouseover', function () {
    // Add a class to indicate that the element is being hovered
    linkElement.classList.add('hover');
  });
});


