// Custom Bootstrap JS for navbar toggling
document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var collapseElement = document.querySelector('#navbarNavAltMarkup');
  
    navbarToggler.addEventListener('click', function() {
      if (collapseElement.classList.contains('show')) {
        collapseElement.classList.remove('show');
      } else {
        collapseElement.classList.add('show');
      }
    });
  });
  