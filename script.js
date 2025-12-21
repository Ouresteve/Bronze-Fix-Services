const typingText= document.getElementById("typing-text");

const text = "Professional repair, installation and maintenance of kitchen & laundry appliances.";

let index=0;

function typeEffect() {
    if(index<text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect,40);
    }
}
typeEffect();

const counter=document.getElementById("client-count");
let target = 4800;
let current=0;
 function countUp() {
    if(current<target) {
        current+=20;
        counter.textContent=current;
        setTimeout(countUp,20);
    }else{
        counter.textContent = target;
    }
 }

 countUp();


 const heroImage=document.getElementById("hero-service-image");
 const images= [
    "images/broze.jpeg",
    "images/Home appliances.jpeg",
    "images/work.jpg",
    "images/Technician.jpeg",
    "images/Experienced.jpeg"
 ];

 let imgIndex=0;

 function changHeroImage() {
    imgIndex = (imgIndex +1)% images.length;
    heroImage.src=images[imgIndex];

 }

 setInterval(changHeroImage,6000);