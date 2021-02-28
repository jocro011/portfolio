var navbar = document.querySelector('.navbar');

var workHeader = document.querySelector('.work-header');
var sticky = workHeader.offsetTop;
var myWork = document.querySelector('.myWork');

var skillsHeader = document.querySelector('.skills-header');
var sticky2 = skillsHeader.offsetTop;
var mySkills = document.querySelector('.mySkills');

window.addEventListener('scroll', function(e) {

    if (window.pageYOffset >= 5) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled')
    }

    if (window.pageYOffset >= sticky) {
        workHeader.classList.add('sticky');
        myWork.classList.add('active');
      } else {
        workHeader.classList.remove('sticky');
        myWork.classList.remove('active');
      };

    if (window.pageYOffset >= sticky2) {
        skillsHeader.classList.add('sticky');
        mySkills.classList.add('active');
        myWork.classList.remove('active');
        } else {
        skillsHeader.classList.remove('sticky');
        mySkills.classList.remove('active');
        }

})


var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

  if (prevScrollpos < currentScrollPos) {
    navbar.style.top = "-100px";
  }
  
  if (prevScrollpos <= 0 || prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  }
  prevScrollpos = currentScrollPos;

}