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