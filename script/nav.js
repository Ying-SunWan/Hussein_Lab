// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll < 400) {
//           $(".sidenav a").css("color" , "white");
//         }
   
//         else{
//             $(".sidenav a").css("color" , "black");  	
//         }
//     })
//   })

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  navbar.classList.toggle('active')
})