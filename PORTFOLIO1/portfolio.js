    
    AOS.init();

    const text="a frontend developer based in lahore";
    let index=0;
    let speed = 100;
   function  typeWriter(params) {
       if ( index<text.length) {
           document.getElementById("typed").textContent += text.charAt(index);
           index++;
           setTimeout(typeWriter, speed);
       } else{
           setTimeout(()=>{
               reset();
           },1000)
       } 
   }
   function  reset(params) {
       index = 0;
       document.getElementById("typed").textContent = "";
       typeWriter();
   }
   typeWriter();
    
   //about animation
   const text1="Frontend developer";
    let index1=0;
    let speed1 = 100;
   function  typeWriter1( ) {
       if ( index1<text1.length) {
           document.getElementById("about-animation").textContent += text1.charAt(index1);
           index1++;
           setTimeout(typeWriter1, speed1);
       } else{
           setTimeout(()=>{
               reset1();
           },1000)
       } 
   }
   function  reset1(params) {
       index1 = 0;
       document.getElementById("about-animation").textContent = "";
       typeWriter1();
   }
   typeWriter1();
   
     
   
   
  
   //active button
   const button = document.querySelectorAll('.btn1');
    
   
   button.forEach((btn)=>{
     btn.addEventListener('click', function() {
       button.forEach(btn => btn.classList.remove('active'));
       this.classList.add('active');
   });
    
   })
    
   
    
   const buttons = document.querySelectorAll('.btn11');
   
   buttons.forEach((button, index) => {
       button.addEventListener('click', function() {
           // Remove active class from all buttons
           buttons.forEach(btn => btn.classList.remove('active1'));
   
           // Find the next button
           
      this.classList.add('active1');
    
       });
   });
    
   //respo header
    
   
   
   
     const hamburger = document.querySelector('.hamburger');
       const navLinks = document.querySelector('.nav-link');
       
       hamburger.addEventListener('click', function() {
         navLinks.classList.toggle('show-nav');
       });
       
    
   //contact us
   const form = document.getElementById('contactForm');
   const name = document.getElementById('name');
   const email = document.getElementById('email');
   const subject = document.getElementById('subject');
   const message = document.getElementById('message');
   
   function validateForm() {
       let valid = true;
   
       // Validate name
       if (name.value.trim() === "") {
           name.classList.add("error");
           valid = false;
       } else {
           name.classList.remove("error");
       }
   
       // Validate email
       if (email.value.trim() === "" || !email.value.includes("@")) {
           email.classList.add("error");
           valid = false;
       } else {
           email.classList.remove("error");
       }
   
       // Validate subject
       if (subject.value.trim() === "") {
           subject.classList.add("error");
           valid = false;
       } else {
           subject.classList.remove("error");
       }
   
       // Validate message
       if (message.value.trim() === "") {
           message.classList.add("error");
           valid = false;
       } else {
           message.classList.remove("error");
       }
   
       return valid;
   }
   
   function sendEmail() {
       const bodyMessage = `
           Name: ${name.value} <br>
           Email: ${email.value} <br>
           Subject: ${subject.value} <br>
           Message: ${message.value}
       `;
   
       Email.send({
           Host: "smtp.elasticemail.com",
           Username: "bajwazunaira411@gmail.com",
           Password: "6A02D89BE638EAD0A81F32E922F8D248EF9A", // Be cautious sharing sensitive data
           To: 'bajwazunaira411@gmail.com',
           From: "bajwazunaira411@gmail.com",
           Subject: subject.value,
           Body: bodyMessage,
       }).then(response => {
           if (response === 'OK') {
               Swal.fire({
                   title: "Success",
                   text: "Message sent successfully",
                   icon: "success"
               });
               form.reset();
           } else {
               Swal.fire({
                   title: "Error",
                   text: "There was an error sending your message. Please try again.",
                   icon: "error"
               });
           }
       }).catch(error => {
           Swal.fire({
               title: "Error",
               text: "Failed to send the email. Please check your network connection or email settings.",
               icon: "error"
           });
           console.error("Email sending failed:", error);
       });
   }
   
   
   form.addEventListener('submit', (e) => {
       e.preventDefault();
   
       if (validateForm()) {
           sendEmail();
       } else {
           Swal.fire({
               title: "Error",
               text: "Please fill in all fields correctly.",
               icon: "error"
           });
       }
   });
       //scroll animation
       window.addEventListener('load', function() {
       const contentt = document.getElementById('myContent');
       contentt.classList.add('visible'); // Apply the .visible class on page load
   });
   
   
   let sections = document.querySelectorAll('section');
   let mybutton = document.getElementById("myBtn");
      window.onscroll = () => {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
       
       sections.forEach(element=>{
           let off = element.offsetHeight;
    
           if ( window.scrollY >= element.offsetTop &&  window.scrollY <= element.offsetHeight+element.offsetTop) {
               element.classList.add('show');
           }else{
               element.classList.remove('show');
           }
       })
      }
    
      //goo
      function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
   
    
   
   
   
   const toggle = document.querySelectorAll('.toggle-btn');
   
   toggle.forEach(button => {
       button.addEventListener('click', function() {
           // Find the corresponding more-text element within the same content block
           const moreText = this.previousElementSibling.querySelector('.more-text');
           const btnText = this;
   
           if (moreText.style.display === 'none' || moreText.style.display === '') {
               moreText.style.display = 'inline';
               btnText.textContent = 'Read Less';
           } else {
               moreText.style.display = 'none';
               btnText.textContent = 'Read More';
           }
       });
   });
   
   
   


   
   const openPopupBtn = document.getElementById('ecomms'); // single button

const modal = document.getElementById('modal');
const closePopupBtn = document.querySelector('.modal-close');

openPopupBtn.addEventListener('click', function() {
  modal.classList.add('show');
});

closePopupBtn.addEventListener('click', function() {
  modal.classList.remove('show');
});

 
