/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

function SubForm (){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  document.getElementById("currentDateTime").defaultValue = dateTime;

  $.ajax({
    url:"https://dummyurl.com",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("Form Data Submitted :)")
    },
    error: function(){
      alert(" Message Successfully sent , Hruday will contact you within 2 days") 
    }
  });
  document.getElementById("myForm").reset();
}

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

sr.reveal('.qualif__icon',{delay:400});
sr.reveal('.qualif__subtitle',{delay:400});
sr.reveal('.qualif__text',{delay:400});
/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{delay:600}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});
//SCROLL FAMILIAR
sr.reveal('.familiar_cont',{interval: 200});
sr.reveal('.familiar__img',{interval: 200});
sr.reveal('.familiar__subtitle',{interval:200});
/*SCROLL WORK*/
//sr.reveal('.work__img',{delay: 200}); 
//acheivement section
//sr.reveal('.certificate__img',{delay: 200});
/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 50}); 
var typed = new Typed(".typing",{
  strings: ["Python Programmer","Aspiring Data Scientist", "Azure Fundamentals","Google Cloud Platform","Quick Learner","Solution-Oriented"],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true
});




