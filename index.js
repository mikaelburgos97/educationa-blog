

let toggle = document.querySelector('.toggle')
let topbar = document.querySelector('.topbar')
let navigation = document.querySelector('.navigation')
let themeSwitch = document.querySelector('.themeSwitch')
let body = document.querySelector('body')
let main = document.querySelector('.main')


const users = {
  user: "user",
  profilePic: '',
  password: 'whwhwhwhwh',
  tags: ['technology', 'health', 'programming', 'books', 'finance', 'trending'],
  email: "mwmwmw@gmail",
  firstName: 'name',
  lastName: 'surname',
}


const post = {
  postedBy: 'user',
  forTag: 'technology',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  liked: false,
  disliked: false,
  datePosted: '1/16/2024',
}




// const users = [];
const currentUserLoggedIn = {};
















































































toggle.onclick = function(){
  toggle.classList.toggle('active')  
  topbar.classList.toggle('active')  
  navigation.classList.toggle('active')  
  main.classList.toggle('active')  
}
// theme switch toggle 

themeSwitch.onclick = function (){
  body.classList.toggle('dark')
}


// for mobile devices 
function toggleMenu(){
  let navigation = document.querySelector('.navigation')
  let main = document.querySelector('.main')
  navigation.classList.remove('active')
  main.classList.remove('active')
}