/* =======================================================
   TruthInLaw Framework v1.0
   article.js
======================================================= */


/* =======================================================
   READING PROGRESS BAR
======================================================= */

window.addEventListener("scroll", () => {

const scrollTop =
document.documentElement.scrollTop ||
document.body.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop / scrollHeight) * 100;

const progressBar =
document.getElementById("progress-bar");

if(progressBar){

progressBar.style.width = progress + "%";

}

});


/* =======================================================
   SMOOTH SCROLL
======================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/* =======================================================
   NAVIGATION SHADOW
======================================================= */

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(!nav) return;

if(window.scrollY>20){

nav.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}else{

nav.style.boxShadow="none";

}

});
/* =======================================================
   FADE-IN ANIMATIONS
======================================================= */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
"section, .card, .callout, .summary, .confidence-check, .takeaways, .learning-card"
).forEach(element=>{

observer.observe(element);

});


/* =======================================================
   BUTTON RIPPLE EFFECT
======================================================= */

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=
e.clientX-rect.left-size/2+"px";

ripple.style.top=
e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* =======================================================
   HERO FADE-IN
======================================================= */

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.opacity="1";

hero.style.transform="translateY(0)";

}

});
/* =======================================================
   ACTIVE TABLE OF CONTENTS
======================================================= */

const sections = document.querySelectorAll("section[id]");
const tocLinks = document.querySelectorAll(".toc a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 140;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

tocLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});


/* =======================================================
   SCROLL TO TOP BUTTON
======================================================= */

const scrollButton = document.createElement("button");

scrollButton.innerHTML = "↑";

scrollButton.id = "scrollTopBtn";

document.body.appendChild(scrollButton);

scrollButton.style.position = "fixed";
scrollButton.style.bottom = "30px";
scrollButton.style.right = "30px";
scrollButton.style.width = "52px";
scrollButton.style.height = "52px";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "50%";
scrollButton.style.background = "#1a2744";
scrollButton.style.color = "white";
scrollButton.style.fontSize = "22px";
scrollButton.style.cursor = "pointer";
scrollButton.style.boxShadow = "0 12px 25px rgba(0,0,0,.18)";
scrollButton.style.display = "none";
scrollButton.style.zIndex = "999";
scrollButton.style.transition = ".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollButton.style.display="block";

}else{

scrollButton.style.display="none";

}

});

scrollButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* =======================================================
   ESTIMATED READING TIME
======================================================= */

const article = document.querySelector("article");

if(article){

const words = article.innerText.trim().split(/\s+/).length;

const minutes = Math.max(1, Math.ceil(words / 225));

const readTime = document.getElementById("reading-time");

if(readTime){

readTime.innerText = "⏱ " + minutes + " min read";

}

}
/* =======================================================
   TruthInLaw Framework v1.0
   FINAL INITIALIZATION & UTILITIES
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("TruthInLaw Framework v1.0 Loaded");

    /* -------------------------------
       External Links Open in New Tab
    -------------------------------- */

    document.querySelectorAll("a").forEach(link => {

        if (
            link.hostname &&
            link.hostname !== window.location.hostname
        ) {

            link.target = "_blank";
            link.rel = "noopener noreferrer";

        }

    });

});


/* =======================================================
   KEYBOARD SHORTCUT
   Press HOME to smoothly return to top
======================================================= */

document.addEventListener("keydown", function(e){

    if(e.key === "Home"){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

});


/* =======================================================
   IMAGE FADE-IN
======================================================= */

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

images.forEach(img=>{

    img.style.opacity="0";
    img.style.transform="translateY(20px)";
    img.style.transition=".6s ease";

    imageObserver.observe(img);

});


/* =======================================================
   PERFORMANCE
======================================================= */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* =======================================================
   FUTURE FEATURES
======================================================= */

/*

Reserved for future TruthInLaw updates.

Version 1.1
- Dark Mode
- Search
- Bookmarks

Version 1.2
- Reading History
- User Progress Saving

Version 2.0
- AI Citation Checker
- Interactive Verification Exercises

*/


/* =======================================================
   END OF FRAMEWORK
======================================================= */

console.log("TruthInLaw Framework v1.0 Ready");
