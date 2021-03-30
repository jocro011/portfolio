let navbar = document.querySelector('.navbar');

let workHeader = document.querySelector('.work-header');
let sticky = workHeader.offsetTop;
let myWork = document.querySelector('.myWork');

let skillsHeader = document.querySelector('.skills-header');
let sticky2 = skillsHeader.offsetTop;
let mySkills = document.querySelector('.mySkills');

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


let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let navHeight = navbar.offsetHeight;
    let heroSection = document.getElementById('hero-section');
    let heroHeight = heroSection.offsetHeight;

  if (prevScrollpos < currentScrollPos && prevScrollpos >= (heroHeight - navHeight)) {
    navbar.style.top = "-200px";
  }
  
  if (prevScrollpos <= 0 || prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  }
  prevScrollpos = currentScrollPos;

}