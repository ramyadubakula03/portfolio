function toggleMenu(){
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function sendEmail(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  const mailto = `mailto:dubakularamya@gmail.com?subject=Portfolio Message from ${name}&body=${msg}%0AFrom: ${email}`;
  window.location.href = mailto;
}

/* GSAP Animations */
gsap.from(".hero img", {scale:0, duration:1});
gsap.from(".hero h1", {y:50, opacity:0, duration:1, delay:0.3});
gsap.from(".hero p", {y:50, opacity:0, duration:1, delay:0.6});

gsap.from(".timeline-item", {
  scrollTrigger: ".timeline",
  x: -50,
  opacity: 0,
  stagger: 0.3,
  duration: 1
});

gsap.from(".project-card", {
  scrollTrigger: ".projects",
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});

function openProject(url){
  window.open(url, "_blank");
}
gsap.from(".hero-text h1", {opacity:0, y:40, duration:1});
gsap.from(".hero-text h2", {opacity:0, y:40, duration:1, delay:0.2});
gsap.from(".hero-text p", {opacity:0, y:40, duration:1, delay:0.4});
gsap.from(".hero-buttons", {opacity:0, y:40, duration:1, delay:0.6});
gsap.from(".hero-image img", {opacity:0, scale:0.7, duration:1, delay:0.5});


