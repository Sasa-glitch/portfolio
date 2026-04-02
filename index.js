console.log("الحمد لله")

console.log(window.innerWidth)

// selecting navigation bar an links
const slideToggle = document.querySelector('.slide-toggle');
const links = document.querySelectorAll('.nav__link');

// nav bar appear function
slideToggle.addEventListener("click", () => {
  document.body.classList.toggle('nav-open');
});

// links click close function
for (let i of links) {
  i.addEventListener("click", () => {
    document.body.classList.remove('nav-open');
  });
}

// make up button work
const upButton = document.querySelector('.up-button')
let windowHeight = this.innerHeight;
// show it when scroll
window.addEventListener('scroll', _ => {
  let scrolled = this.scrollY || document.documentElement.scrollTop
  if (scrolled > windowHeight) {
    upButton.style.display = "block"
  } else {
    upButton.style.display = "none"
  }
})
// give the button a function
upButton.addEventListener('click', _ => {
  window.scrollTo({
    top: 0,         // Scroll to the very top
  });
})

//Make the delete button
const deleteButton = document.querySelector('.up-button__close')
deleteButton.addEventListener('click', (event) => {
  if (upButton) {
    upButton.remove()
  }
  event.stopPropagation()
})


// make the header sticky 

const header = document.getElementsByTagName("header")[0];
let lastScroll = 0;

window.addEventListener('scroll', _ => {
  let scrolled = this.scrollY || document.documentElement.scrollTop
  let scrollDiff = scrolled - lastScroll;
  const headerTop = parseInt(header.style.top) || 0;
  if (scrollDiff > 0) {
    header.style.top = `${Math.max(headerTop - scrollDiff, -header.offsetHeight)}px`
  } else {
    header.style.top = `${Math.min(headerTop - scrollDiff, 0)}px`
  }
  lastScroll = scrolled;

  if (scrolled > windowHeight || window.innerWidth < 600 && scrolled > 100) {
    header.style.boxShadow = "var(--bs)";
    header.style.backgroundColor = "var(--clr-light)"
  } else {
    header.style.boxShadow = "none";
    header.style.backgroundColor = "transparent";
  }
});

// Glitch image hover effects
const introGlitch = document.querySelector('.intro-glitch');
const introImg = document.querySelector('.intro__img');

if (introGlitch && introImg) {
  const originalIntroSrc = introImg.src;
  const originalIntroAlt = introImg.alt;
  
  introGlitch.addEventListener('mouseenter', () => {
    // using absolute/relative path as requested
    introImg.src = "images/real_glitch.jpg";
    introImg.alt = "glitch";
    introImg.classList.add('glitch-anim');
  });
  
  introGlitch.addEventListener('mouseleave', () => {
    introImg.src = originalIntroSrc;
    introImg.alt = originalIntroAlt;
    introImg.classList.remove('glitch-anim');
  });
}

const aboutGlitch = document.querySelector('.about-glitch');
const aboutImg = document.querySelector('.about-me__image');

if (aboutGlitch && aboutImg) {
  const originalAboutSrc = aboutImg.src;
  const originalAboutAlt = aboutImg.alt;
  
  aboutGlitch.addEventListener('mouseenter', () => {
    aboutImg.src = "images/real_glitch1.jpg";
    aboutImg.alt = "glitc";
    aboutImg.classList.add('glitch-anim');
  });
  
  aboutGlitch.addEventListener('mouseleave', () => {
    aboutImg.src = originalAboutSrc;
    aboutImg.alt = originalAboutAlt;
    aboutImg.classList.remove('glitch-anim');
  });
}